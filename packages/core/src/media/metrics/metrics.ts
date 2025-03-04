import { getMetricsReportingUrl } from './utils';
import { MediaControllerStore } from '../controller';
import { MimeType } from '../mime';
import { getMediaSourceType } from '../src';

type RawMetrics = {
  preloadTime: number;
  ttff: number;
  firstPlayback: number;

  nWaiting: number;
  timeWaiting: number;

  nStalled: number;
  timeStalled: number;

  timeUnpaused: number;

  nError: number;
  lastError?: string;

  videoHeight: number | null;
  videoWidth: number | null;
  playerHeight: number | null;
  playerWidth: number | null;

  playbackScore: number | null;

  player: 'livepeer-js';

  sourceType: MimeType | 'unknown';

  pageUrl: string;
  sourceUrl: string;
  duration: number | null;

  autoplay: 'autoplay' | 'preload-full' | 'preload-metadata' | 'standard';
  userAgent: string;
};

type PlaybackRecord = {
  clockTime: number;
  mediaTime: number;
  score: number;
};

export class PlaybackMonitor<TElement> {
  active = false;
  values: PlaybackRecord[] = [];
  score: number | null = null;
  averagingSteps = 20;
  store: MediaControllerStore<TElement>;

  constructor(store: MediaControllerStore<TElement>) {
    this.store = store;
  }

  init() {
    if (!this.active) {
      this.values = [];
      this.score = null;

      this.active = true;
    }
  }
  reset() {
    if (!this.active) {
      // it's not running, start it up
      this.init();
    } else {
      this.values = [];
    }
  }
  destroy() {
    if (this.active) {
      this.values = [];
      this.score = null;
      this.active = false;
    }
  }

  calculateScore() {
    if (this.active) {
      // save the current testing value and time
      // If the media plays, this should keep a constant value. If the media is stalled, it will go up with 1sec/sec. If the media is playing faster, it will go down.
      // current clock time - current playback time
      const latestPlaybackRecord =
        this.values.length > 0
          ? this.values[this.values.length - 1]
          : undefined;

      const currentValue = {
        clockTime: Date.now() * 1e-3,
        mediaTime: this.store.getState().progress,
        score: latestPlaybackRecord
          ? this.valueToScore(latestPlaybackRecord)
          : 0,
      };

      this.values.push(currentValue); // add the current value to the history

      // no history yet, can't calculate a score
      if (this.values.length < 2) {
        return null;
      }

      const oldestValue = this.values[0];

      if (oldestValue !== undefined) {
        // diff between oldest score and current
        const averagedScore = this.valueToScore(oldestValue, currentValue); // should be 1, decreases if bad

        // kick the oldest value from the array
        if (this.values.length > this.averagingSteps) {
          this.values.shift();
        }

        // the final score is the maximum of the averaged and the current value
        this.score = Math.max(averagedScore, currentValue.score);

        return Math.round(this.score * 10) / 10;
      }
    }

    return null;
  }

  valueToScore(a: PlaybackRecord, b?: PlaybackRecord) {
    // calculate the moving average
    // if this returns > 1, the media played faster than the clock
    // if this returns < 0, the media time went backwards
    const rate = this?.store?.getState?.()?.playbackRate ?? 1;

    return (
      (b?.mediaTime ?? this.store.getState().progress - a.mediaTime) /
      (b?.clockTime ?? Date.now() * 1e-3 - a.clockTime) /
      rate
    );
  }
}

class Timer {
  totalTime = 0;

  countStarts = 0;
  startTime = 0;

  start() {
    this.startTime = Date.now();
    this.countStarts++;
  }
  stop() {
    this.totalTime += this.startTime > 0 ? Date.now() - this.startTime : 0;
    this.startTime = 0;
  }
  getTotalTime() {
    this.totalTime += this.startTime > 0 ? Date.now() - this.startTime : 0;
    this.startTime = this.startTime > 0 ? Date.now() : 0;

    return this.totalTime;
  }
  getCountStarts() {
    return this.countStarts;
  }
}

export class MetricsStatus<TElement> {
  preloadTime = 0;
  requestedPlayTime = 0;
  retryCount = 0;
  connected = false;
  store: MediaControllerStore<TElement>;

  currentMetrics: RawMetrics;
  previousMetrics: RawMetrics | null = null;

  timeWaiting = new Timer();
  timeStalled = new Timer();
  timeUnpaused = new Timer();

  constructor(store: MediaControllerStore<TElement>, sourceUrl: string) {
    const currentState = store.getState();

    if (currentState.autoplay) {
      this.requestedPlayTime = Date.now();
      this.preloadTime = this.requestedPlayTime - bootMs;
    } else {
      this.requestedPlayTime = 0;
    }

    this.store = store;

    this.currentMetrics = {
      autoplay:
        currentState.priority && currentState.autoplay
          ? 'autoplay'
          : currentState.preload === 'full'
          ? 'preload-full'
          : currentState.preload === 'metadata'
          ? 'preload-metadata'
          : 'standard',
      duration: null,
      firstPlayback: 0,
      nError: 0,
      nStalled: 0,
      nWaiting: 0,
      pageUrl:
        typeof window !== 'undefined' ? window?.location?.href ?? '' : '',
      playbackScore: null,
      player: 'livepeer-js',
      playerHeight: null,
      playerWidth: null,
      preloadTime: 0,
      sourceType: currentState?.src?.mime ?? 'unknown',
      sourceUrl,
      timeStalled: 0,
      timeUnpaused: 0,
      timeWaiting: 0,
      ttff: 0,
      userAgent: String(currentState?.device?.userAgent ?? '').replace(
        /\\|"/gm,
        '',
      ),
      videoHeight: null,
      videoWidth: null,
    };

    store.subscribe((state, prevState) => {
      if (
        state._requestedPlayPauseLastTime !==
          prevState._requestedPlayPauseLastTime &&
        this.requestedPlayTime === 0
      ) {
        this.requestedPlayTime = state._requestedPlayPauseLastTime;

        if (this.preloadTime === 0) {
          this.preloadTime = Date.now() - bootMs;
        }
      }

      if (state.playing !== prevState.playing) {
        if (state.playing) {
          this.timeStalled.stop();
          this.timeWaiting.stop();

          this.timeUnpaused.start();
        } else {
          this.timeUnpaused.stop();
        }
      }

      if (
        state.progress !== prevState.progress &&
        !this.timeUnpaused.startTime
      ) {
        this.timeStalled.stop();
        this.timeWaiting.stop();
        this.timeUnpaused.start();
      }

      if (state.stalled !== prevState.stalled && state.stalled) {
        this.timeStalled.start();
        this.timeUnpaused.stop();
      }
      if (state.waiting !== prevState.waiting && state.waiting) {
        this.timeWaiting.start();
        this.timeUnpaused.stop();
      }
    });
  }

  addError(error: string) {
    this.currentMetrics.nError++;
    this.currentMetrics.lastError = error;
  }

  getFirstPlayback() {
    return this.currentMetrics.firstPlayback;
  }
  setFirstPlayback() {
    this.currentMetrics.firstPlayback = Date.now() - bootMs;
  }
  getTtff() {
    return this.currentMetrics.ttff;
  }
  setTtff() {
    const ttffCalculated = Date.now() - this.requestedPlayTime;

    // filter out erroneous values
    if (ttffCalculated < 120000) {
      this.currentMetrics.ttff = ttffCalculated;
    }
  }
  setPlaybackScore(playbackScore: number) {
    this.currentMetrics.playbackScore = playbackScore;
  }
  setConnected(isConnected: boolean) {
    this.connected = isConnected;
  }

  getMetrics() {
    const currentMetrics: RawMetrics = {
      ...this.currentMetrics,
      playerHeight: this.store.getState().size?.container?.height ?? null,
      playerWidth: this.store.getState().size?.container?.width ?? null,
      videoWidth: this.store.getState().size?.media?.width ?? null,
      videoHeight: this.store.getState().size?.media?.height ?? null,
      duration: this.store.getState().duration,

      nWaiting: this.timeWaiting.getCountStarts(),
      nStalled: this.timeStalled.getCountStarts(),

      timeWaiting: this.timeWaiting.getTotalTime(),
      timeStalled: this.timeStalled.getTotalTime(),
      timeUnpaused: this.timeUnpaused.getTotalTime(),

      preloadTime: this.preloadTime,
    };

    const previousMetrics = this.previousMetrics;
    this.previousMetrics = currentMetrics;

    return {
      current: currentMetrics,
      previous: previousMetrics,
    };
  }
}

const bootMs = Date.now(); // used for firstPlayback value

export type MediaMetrics<TElement> = {
  metrics: MetricsStatus<TElement> | null;
  destroy: () => void;
};

/**
 * Gather playback metrics from a media store and
 * report them to a websocket. Automatically handles a redirect to get the
 * metrics endpoint.
 *
 * @param store Element to capture playback metrics from
 */
export function addMediaMetricsToStore<TElement>(
  store: MediaControllerStore<TElement> | undefined | null,
  sourceUrl: string | undefined | null,
  onError?: (error: unknown) => void,
): MediaMetrics<TElement> {
  const defaultResponse: MediaMetrics<TElement> = {
    metrics: null,
    destroy: () => {
      //
    },
  };

  if (!store || !sourceUrl) {
    return defaultResponse;
  }

  if (!WebSocket) {
    console.log('Environment does not support WebSocket');
    return defaultResponse;
  }

  // set the src from the source URL
  store.setState({ src: getMediaSourceType(sourceUrl) });

  const metricsStatus = new MetricsStatus(store, sourceUrl);

  try {
    const createNewWebSocket = async (numRetries = 0) => {
      const reportingWebsocketUrl = await getMetricsReportingUrl(sourceUrl);

      if (reportingWebsocketUrl) {
        const newWebSocket = new WebSocket(reportingWebsocketUrl);

        newWebSocket.addEventListener('open', () => {
          // enable active statistics reporting
          report();
        });
        newWebSocket.addEventListener('close', (event) => {
          // disable active statistics gathering
          if (timeOut) {
            clearTimeout(timeOut);
            timeOut = null;
            enabled = false;
          }

          // use random code for internal error
          if (event.code !== 3077) {
            // auto-reconnect with exponential backoff
            setTimeout(function () {
              createNewWebSocket(numRetries++).then((websocket) => {
                ws = websocket;
              });
            }, Math.pow(2, numRetries) * 1e3);
          }
        });
        return newWebSocket;
      }

      return null;
    };

    let ws: WebSocket | null;

    createNewWebSocket()
      .then((websocket) => {
        ws = websocket;
      })
      .catch((e) => {
        console.error(e);
        onError?.(e);
      });

    let timeOut: NodeJS.Timeout | null = null;
    let enabled = true;

    /////////////////////
    //  basics         //
    /////////////////////

    store.subscribe((state, prevState) => {
      if (
        state.playing !== prevState.playing &&
        metricsStatus.getFirstPlayback() === 0
      ) {
        metricsStatus.setFirstPlayback();
      }

      // 1. When a video is above the fold and set to autoplay, ttff is from when the player is added to the HTML of the page to when the first
      // progress update
      // 2. When a video is below the fold and set to autoplay, from when lazy loading is triggered and the first progress update
      // 3. When a video is below the fold and not set to autoplay, from when lazy loading is triggered and the first progress update
      if (
        state.progress !== prevState.progress &&
        metricsStatus.getTtff() === 0
      ) {
        metricsStatus.setTtff();
      }

      if (state.error !== prevState.error && state.error) {
        metricsStatus.addError(state.error ?? 'unknown');
      }
    });

    /////////////////////
    //  playbackScore  //
    /////////////////////

    const monitor = new PlaybackMonitor(store);

    store.subscribe((state, prevState) => {
      // enable
      if (
        (state.playing !== prevState.playing && state.playing) ||
        (state.loading !== prevState.loading && state.loading)
      ) {
        monitor.init();
      }

      // TODO add rate change here similar to
      // for (const eventName of ['seeking', 'seeked', 'ratechange'] as const) {
      //   element.addEventListener(eventName, function () {
      //     monitor.reset();
      //   });
      // }
      if (state._requestedRangeToSeekTo !== prevState._requestedRangeToSeekTo) {
        monitor.reset();
      }

      // TODO ensure that these events are handled
      //   'loadeddata',
      //   'pause',
      //   'abort',
      //   'emptied',
      //   'ended',
      if (state.playing !== prevState.playing && !state.playing) {
        monitor.destroy();
      }
    });

    const report = () => {
      if (!enabled || !ws) {
        return;
      }

      // update playback score from monitor
      const playbackScore = monitor.calculateScore();
      if (playbackScore !== null) {
        metricsStatus.setPlaybackScore(playbackScore);
      }

      const metrics = metricsStatus.getMetrics();

      // only send a report if stats have changed, and only send those changes
      const d: Partial<RawMetrics> = {};
      let key: keyof RawMetrics;
      for (key in metrics.current) {
        const val = metrics.current[key];
        if (val !== metrics?.previous?.[key]) {
          (d[key] as typeof val) = val;
        }
      }
      if (Object.keys(d).length > 0) {
        send(ws, d);
      }

      timeOut = setTimeout(function () {
        report();
      }, 1e3);
    };

    const destroy = () => {
      enabled = false;
      monitor.destroy();
      if (timeOut) {
        clearTimeout(timeOut);
      }
      ws?.close(3077);
    };

    return { metrics: metricsStatus, destroy };
  } catch (e) {
    console.log(e);
  }

  return defaultResponse;
}

function send(webSocket: WebSocket, metrics: Partial<RawMetrics>) {
  if (webSocket.readyState !== webSocket.OPEN) {
    return;
  }

  webSocket.send(JSON.stringify(metrics));
}
