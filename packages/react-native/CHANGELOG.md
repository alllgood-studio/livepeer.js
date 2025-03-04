# @livepeer/react-native

## 1.3.1

### Patch Changes

- [#293](https://github.com/livepeer/livepeer.js/pull/293) [`8e28a01`](https://github.com/livepeer/livepeer.js/commit/8e28a016fb77059524b9a21cddf9e06df699a749) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added `sourceUrl` reporting to the Player.

- Updated dependencies [[`8e28a01`](https://github.com/livepeer/livepeer.js/commit/8e28a016fb77059524b9a21cddf9e06df699a749)]:
  - @livepeer/core-react@1.3.1

## 1.3.0

### Minor Changes

- [#289](https://github.com/livepeer/livepeer.js/pull/289) [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** changed the Player on React and React Native to hide the progress bar when viewing a livestream. Also improved the live stream experience with better HLS.js defaults for lower latency.

### Patch Changes

- [#289](https://github.com/livepeer/livepeer.js/pull/289) [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed an error where HLS errors would not provide detail and the Player would throw an `object undefined` error.

- Updated dependencies [[`2c9bb91`](https://github.com/livepeer/livepeer.js/commit/2c9bb91eb9b09a8d113b47368afc3c89ecc2070e), [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90), [`20879a4`](https://github.com/livepeer/livepeer.js/commit/20879a4900e277642674f0dada3b7fc78736ea90)]:
  - @livepeer/core-react@1.3.0

## 1.2.5

### Patch Changes

- [#286](https://github.com/livepeer/livepeer.js/pull/286) [`cd502da`](https://github.com/livepeer/livepeer.js/commit/cd502da49908d70ceab241a84a4a670b1a54f701) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** renamed the `protocol` field to `sourceType` to align with the backend metrics websocket.

- Updated dependencies [[`cd502da`](https://github.com/livepeer/livepeer.js/commit/cd502da49908d70ceab241a84a4a670b1a54f701)]:
  - @livepeer/core-react@1.2.5

## 1.2.4

### Patch Changes

- [#279](https://github.com/livepeer/livepeer.js/pull/279) [`1db99c7`](https://github.com/livepeer/livepeer.js/commit/1db99c782fd1f367d303668c18acdca1c10cda5b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** tuned the button APIs to be easier to customize for custom controls.

- [#276](https://github.com/livepeer/livepeer.js/pull/276) [`25c1bb6`](https://github.com/livepeer/livepeer.js/commit/25c1bb6d572a237cc73ff7d3528673f1e703fcfa) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fix for re-render bug in the Player, which caused a forced re-render on every refresh of a video.

- [#284](https://github.com/livepeer/livepeer.js/pull/284) [`620751e`](https://github.com/livepeer/livepeer.js/commit/620751efbf1108ce207e5b83f67e28f9e7dd263e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added better logs for failure on `create` in Studio provider.

- Updated dependencies [[`1db99c7`](https://github.com/livepeer/livepeer.js/commit/1db99c782fd1f367d303668c18acdca1c10cda5b), [`25c1bb6`](https://github.com/livepeer/livepeer.js/commit/25c1bb6d572a237cc73ff7d3528673f1e703fcfa), [`620751e`](https://github.com/livepeer/livepeer.js/commit/620751efbf1108ce207e5b83f67e28f9e7dd263e)]:
  - @livepeer/core-react@1.2.4

## 1.2.4-next.1

### Patch Changes

- [#279](https://github.com/livepeer/livepeer.js/pull/279) [`1db99c7`](https://github.com/livepeer/livepeer.js/commit/1db99c782fd1f367d303668c18acdca1c10cda5b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** tuned the button APIs to be easier to customize for custom controls.

- Updated dependencies [[`1db99c7`](https://github.com/livepeer/livepeer.js/commit/1db99c782fd1f367d303668c18acdca1c10cda5b)]:
  - @livepeer/core-react@1.2.4-next.1

## 1.2.4-next.0

### Patch Changes

- [#276](https://github.com/livepeer/livepeer.js/pull/276) [`25c1bb6`](https://github.com/livepeer/livepeer.js/commit/25c1bb6d572a237cc73ff7d3528673f1e703fcfa) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fix for re-render bug in the Player, which caused a forced re-render on every refresh of a video.

- Updated dependencies [[`25c1bb6`](https://github.com/livepeer/livepeer.js/commit/25c1bb6d572a237cc73ff7d3528673f1e703fcfa)]:
  - @livepeer/core-react@1.2.4-next.0

## 1.2.3

### Patch Changes

- [#274](https://github.com/livepeer/livepeer.js/pull/274) [`aac6a02`](https://github.com/livepeer/livepeer.js/commit/aac6a02653de8361492f4b8c28725b98246159e2) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added further props for the `ViewabilityConfig` for maximum compatibility with existing FlatList implementations.

- Updated dependencies [[`aac6a02`](https://github.com/livepeer/livepeer.js/commit/aac6a02653de8361492f4b8c28725b98246159e2)]:
  - @livepeer/core-react@1.2.3

## 1.2.2

### Patch Changes

- [`99ceff1`](https://github.com/livepeer/livepeer.js/commit/99ceff19bdb22b033ba84944b903c1494dd0eb28) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed sorting of sources to use the width generated from the playback info endpoint.

- Updated dependencies [[`99ceff1`](https://github.com/livepeer/livepeer.js/commit/99ceff19bdb22b033ba84944b903c1494dd0eb28)]:
  - @livepeer/core-react@1.2.2

## 1.2.1

### Patch Changes

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `usePlayerList` to use a React ref to avoid dynamic runtime `onViewableItemsChanged` errors.

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed uploads in React Native environments by removing chunk size for tus.

- [#270](https://github.com/livepeer/livepeer.js/pull/270) [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `getIsVolumeChangeSupported` check to not fail for negative volume values.

- Updated dependencies [[`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7), [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7), [`b11ea90`](https://github.com/livepeer/livepeer.js/commit/b11ea90bb3e488bd6d6661846313849adf389cdf), [`68f2e64`](https://github.com/livepeer/livepeer.js/commit/68f2e64241dd6917a638f9d44216531d8b3437e7)]:
  - @livepeer/core-react@1.2.1

## 1.2.0

### Minor Changes

- [#268](https://github.com/livepeer/livepeer.js/pull/268) [`a59f1d9`](https://github.com/livepeer/livepeer.js/commit/a59f1d9aed403125cb365c6246364d0a24b3a1b0) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `usePlayerList` hook which provides helpers for [`FlatList`](https://reactnative.dev/docs/0.62/flatlist) and [`FlashList`](https://shopify.github.io/flash-list/docs/) to make it simple to render the `Player` in a list. It automatically handles preloading, auto play/pause when visible, and gives sane defaults for the typical list-based use-cases.

- [#267](https://github.com/livepeer/livepeer.js/pull/267) [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added MP4 rendition prioritization to the React and React Native Player.

  This is for support of MP4 renditions returned from `playbackInfo` from the Studio provider. If an MP4 rendition exists for an Asset, it will be prioritized over HLS, since this has been introduced as a performance improvement over HLS for short-form video.

  The MP4 renditions will be chosen with the following algorithm: the device screen width and multiplied by a static multiplier (currently set to x2.5). This value is then compared to the rendition widths, and the renditions are prioritized based on the distance between these values. This results in a choice of a rendition which is close to the screen size without visual quality issues. For instance, a device with a 1280 pixel width would compute `1280px * 2.5 = 3200px`, and then sort the MP4 renditions by which are closest to this value.

### Patch Changes

- [#267](https://github.com/livepeer/livepeer.js/pull/267) [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed types for React Native to integrate easier with [ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) from Expo.

- [#267](https://github.com/livepeer/livepeer.js/pull/267) [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added `pageUrl`, `protocol`, `preloadTime`, and `autoplay` to metrics to track performance of video load under specific conditions.

- Updated dependencies [[`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c), [`85e4c05`](https://github.com/livepeer/livepeer.js/commit/85e4c0563802d737bda5d2b76cd36e069da1c61c)]:
  - @livepeer/core-react@1.2.0

## 1.1.5

### Patch Changes

- [#265](https://github.com/livepeer/livepeer.js/pull/265) [`318c082`](https://github.com/livepeer/livepeer.js/commit/318c0824a62cffa69c92ba4eb6c45afbb9920958) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** change the metrics reporting port for staging to use 443.

- Updated dependencies [[`318c082`](https://github.com/livepeer/livepeer.js/commit/318c0824a62cffa69c92ba4eb6c45afbb9920958)]:
  - @livepeer/core-react@1.1.5

## 1.1.4

### Patch Changes

- [#259](https://github.com/livepeer/livepeer.js/pull/259) [`9568500`](https://github.com/livepeer/livepeer.js/commit/95685009dcb4a2d86b2def2325ade9ddd6d13d1b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added Time to First Frame, Autoplay, and User Agent to metrics reporting. Fixed bugs with play time metrics reporting.

- Updated dependencies [[`9568500`](https://github.com/livepeer/livepeer.js/commit/95685009dcb4a2d86b2def2325ade9ddd6d13d1b)]:
  - @livepeer/core-react@1.1.4

## 1.1.3

### Patch Changes

- [#255](https://github.com/livepeer/livepeer.js/pull/255) [`0e5cbc9`](https://github.com/livepeer/livepeer.js/commit/0e5cbc98116332260178de3aa188db53b9f5f22c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed Node.js issue with `File` not being defined globally.

- Updated dependencies [[`0e5cbc9`](https://github.com/livepeer/livepeer.js/commit/0e5cbc98116332260178de3aa188db53b9f5f22c)]:
  - @livepeer/core-react@1.1.3

## 1.1.2

### Patch Changes

- [`a8a2c58`](https://github.com/livepeer/livepeer.js/commit/a8a2c582da2eb49ef33fca27587129ce1c1bfaa6) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** downgraded packages due to versioning conflicts and upgraded `zustand`.

- Updated dependencies [[`a8a2c58`](https://github.com/livepeer/livepeer.js/commit/a8a2c582da2eb49ef33fca27587129ce1c1bfaa6)]:
  - @livepeer/core-react@1.1.2

## 1.1.1

### Patch Changes

- [#248](https://github.com/livepeer/livepeer.js/pull/248) [`5a1c060`](https://github.com/livepeer/livepeer.js/commit/5a1c0606fc3ab1703a74ca02b18acfa93937d684) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed version headers to reference the correct package names.

- [#251](https://github.com/livepeer/livepeer.js/pull/251) [`686fb51`](https://github.com/livepeer/livepeer.js/commit/686fb5178a5746210cc16f1efb77f2c1273f4527) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** updated dependencies to latest versions.

- Updated dependencies [[`5a1c060`](https://github.com/livepeer/livepeer.js/commit/5a1c0606fc3ab1703a74ca02b18acfa93937d684), [`89de148`](https://github.com/livepeer/livepeer.js/commit/89de148ea4e9037c0375142db89b9ffea46e96d2), [`686fb51`](https://github.com/livepeer/livepeer.js/commit/686fb5178a5746210cc16f1efb77f2c1273f4527)]:
  - @livepeer/core-react@1.1.1

## 1.1.1-next.0

### Patch Changes

- Updated dependencies [[`89de148`](https://github.com/livepeer/livepeer.js/commit/89de148ea4e9037c0375142db89b9ffea46e96d2)]:
  - @livepeer/core-react@1.1.1-next.0

## 1.1.0

### Minor Changes

- [#240](https://github.com/livepeer/livepeer.js/pull/240) [`c4cb597`](https://github.com/livepeer/livepeer.js/commit/c4cb59762a31c865bb8ada9a4176caa614f6be7a) Thanks [@clacladev](https://github.com/clacladev)! - **Fix:** added clearer Player error handling instead of an infinite loading spinner. The Player now shows error states for gated streams which do not have a proper JWT and streams which are currently offline.

### Patch Changes

- Updated dependencies [[`c4cb597`](https://github.com/livepeer/livepeer.js/commit/c4cb59762a31c865bb8ada9a4176caa614f6be7a)]:
  - @livepeer/core-react@1.1.0

## 1.0.0

### Major Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** Added `@livepeer/react-native` package with all hooks from `@livepeer/core-react`, and `Player` based on `expo-av` and controls on `react-native-svg`.

  This also includes metrics reporting for the Player and theming across the components.

### Minor Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved the web logic out of `livepeer` into `@livepeer/core` to prevent polyfills from conflicting with React Native.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the peer dependency on `ethers` and `typechain` in favor of exporting const ABIs which can be used with tools like [abitype](https://github.com/wagmi-dev/abitype).

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** added `@livepeer/core-react` package which includes all cross-environment hooks, utilities, and types. These are exported as `usePlayer`, `useControlsContainer`, etc.

### Patch Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Chore:** updated `@livepeer/core-react` package.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** added `mediaElementRef` to Player for compatibility with external libraries.

- [`85dc1f7`](https://github.com/livepeer/livepeer.js/commit/85dc1f7faa35ad36c7209b17a081b62ceefba798) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `priority` boolean to not reset when video is not shown on screen.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed dStorage fallback to only use IPFS when `playbackId` does not exist.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** changed the default `objectFit` for the Player to be `contain` instead of `cover`.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed IPFS auto-playback with `src`.

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with slider thumb not showing in correct position, add React Native video customization props, and fixed Player getting stuck in "play" after exit of fullscreen.

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `priority` boolean to Player to enable lazy loading for content.

- [`04f6025`](https://github.com/livepeer/livepeer.js/commit/04f6025c7c19f95f8a18b660e5f8f1b777596df3) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** minor fix for volume not being set correctly.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `loading` color override to ThemeConfig.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added further theming overrides to progress and volume sliders.

- [#213](https://github.com/livepeer/livepeer.js/pull/213) [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed player to display hours correctly and added version headers to API requests for debugging errors.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature**: added native file URI uploading for React Native, default volume config for the Player, and fixed the slider thumb to not extend past the left boundary.

- [`f8ca8fa`](https://github.com/livepeer/livepeer.js/commit/f8ca8faa53b8248cf651a0306a448ff2ce823a7c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** removed the default border radius on mobile and web.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `showUploadingIndicator` for displaying the uploading text when `autoUrlUpload` is enabled, and renamed`shouldShowLoadingSpinner`to`showLoadingSpinner`.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with IPFS auto-playback and mime type checking in browser.

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed core-react to use callback refs to ensure that the consuming code gets the updated ref on mount.

- [#223](https://github.com/livepeer/livepeer.js/pull/223) [`451d304`](https://github.com/livepeer/livepeer.js/commit/451d3045b17938ebe3037d371cf949904285f48b) Thanks [@Ahmed-Aghadi](https://github.com/Ahmed-Aghadi)! - **Fix:** added missing `usePlaybackInfo` export to React/React Native.

- Updated dependencies [[`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`85dc1f7`](https://github.com/livepeer/livepeer.js/commit/85dc1f7faa35ad36c7209b17a081b62ceefba798), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807), [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52), [`451d304`](https://github.com/livepeer/livepeer.js/commit/451d3045b17938ebe3037d371cf949904285f48b)]:
  - @livepeer/core-react@1.0.0

## 1.0.0-next.17

### Minor Changes

- [#212](https://github.com/livepeer/livepeer.js/pull/212) [`da28e70`](https://github.com/livepeer/livepeer.js/commit/da28e7037a50e4a3ac3711581cc762f516e5f31a) Thanks [@clacladev](https://github.com/clacladev)! - **Fix:** added clearer Player error handling instead of an infinite loading spinner. The Player now shows error states for gated streams which do not have a proper JWT and streams which are currently offline.

### Patch Changes

- [`04f6025`](https://github.com/livepeer/livepeer.js/commit/04f6025c7c19f95f8a18b660e5f8f1b777596df3) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** minor fix for volume not being set correctly.

- [#223](https://github.com/livepeer/livepeer.js/pull/223) [`451d304`](https://github.com/livepeer/livepeer.js/commit/451d3045b17938ebe3037d371cf949904285f48b) Thanks [@Ahmed-Aghadi](https://github.com/Ahmed-Aghadi)! - **Fix:** added missing `usePlaybackInfo` export to React/React Native.

- Updated dependencies [[`da28e70`](https://github.com/livepeer/livepeer.js/commit/da28e7037a50e4a3ac3711581cc762f516e5f31a), [`451d304`](https://github.com/livepeer/livepeer.js/commit/451d3045b17938ebe3037d371cf949904285f48b)]:
  - @livepeer/core-react@1.0.0-next.17

## 1.0.0-next.16

### Patch Changes

- [`85dc1f7`](https://github.com/livepeer/livepeer.js/commit/85dc1f7faa35ad36c7209b17a081b62ceefba798) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed `priority` boolean to not reset when video is not shown on screen.

- Updated dependencies [[`85dc1f7`](https://github.com/livepeer/livepeer.js/commit/85dc1f7faa35ad36c7209b17a081b62ceefba798)]:
  - @livepeer/core-react@1.0.0-next.16

## 1.0.0-next.15

### Patch Changes

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with slider thumb not showing in correct position, add React Native video customization props, and fixed Player getting stuck in "play" after exit of fullscreen.

- [#218](https://github.com/livepeer/livepeer.js/pull/218) [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `priority` boolean to Player to enable lazy loading for content.

- Updated dependencies [[`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807), [`07ef48e`](https://github.com/livepeer/livepeer.js/commit/07ef48ea3703bfc9fe715f8583bd91585d63e807)]:
  - @livepeer/core-react@1.0.0-next.15

## 1.0.0-next.14

### Patch Changes

- [#213](https://github.com/livepeer/livepeer.js/pull/213) [`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed player to display hours correctly and added version headers to API requests for debugging errors.

- Updated dependencies [[`7f5202d`](https://github.com/livepeer/livepeer.js/commit/7f5202dec42b14dd77546823c8e3c9dd7fe3983b)]:
  - @livepeer/core-react@1.0.0-next.14

## 1.0.0-next.13

### Patch Changes

- [#204](https://github.com/livepeer/livepeer.js/pull/204) [`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature**: added native file URI uploading for React Native, default volume config for the Player, and fixed the slider thumb to not extend past the left boundary.

- [`f8ca8fa`](https://github.com/livepeer/livepeer.js/commit/f8ca8faa53b8248cf651a0306a448ff2ce823a7c) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** removed the default border radius on mobile and web.

- Updated dependencies [[`9ce1fa4`](https://github.com/livepeer/livepeer.js/commit/9ce1fa460985d4301c06df88698e7e3e746c4d52)]:
  - @livepeer/core-react@1.0.0-next.13

## 1.0.0-next.12

### Patch Changes

- [#197](https://github.com/livepeer/livepeer.js/pull/197) [`748ddfa`](https://github.com/livepeer/livepeer.js/commit/748ddfa8ffc458c0a91e536a74a1933e57909745) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** changed the default `objectFit` for the Player to be `contain` instead of `cover`.

- Updated dependencies [[`748ddfa`](https://github.com/livepeer/livepeer.js/commit/748ddfa8ffc458c0a91e536a74a1933e57909745)]:
  - @livepeer/core-react@1.0.0-next.12

## 1.0.0-next.11

### Patch Changes

- [#195](https://github.com/livepeer/livepeer.js/pull/195) [`e866579`](https://github.com/livepeer/livepeer.js/commit/e86657964e2dd9d141d7d06023207ae88d5c4169) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `loading` color override to ThemeConfig.

- Updated dependencies [[`e866579`](https://github.com/livepeer/livepeer.js/commit/e86657964e2dd9d141d7d06023207ae88d5c4169)]:
  - @livepeer/core-react@1.0.0-next.11

## 1.0.0-next.10

### Patch Changes

- [#193](https://github.com/livepeer/livepeer.js/pull/193) [`fa5d2c6`](https://github.com/livepeer/livepeer.js/commit/fa5d2c62bd1a45ae8a12052973e9ae097ce6b0f2) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added `showUploadingIndicator` for displaying the uploading text when `autoUrlUpload` is enabled, and renamed`shouldShowLoadingSpinner`to`showLoadingSpinner`.

- Updated dependencies [[`fa5d2c6`](https://github.com/livepeer/livepeer.js/commit/fa5d2c62bd1a45ae8a12052973e9ae097ce6b0f2)]:
  - @livepeer/core-react@1.0.0-next.10

## 1.0.0-next.9

### Patch Changes

- [`d4b4264`](https://github.com/livepeer/livepeer.js/commit/d4b42644fdbf8d4d50e74798bdc0df6e2ceee9b4) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed IPFS auto-playback with `src`.

- Updated dependencies [[`d4b4264`](https://github.com/livepeer/livepeer.js/commit/d4b42644fdbf8d4d50e74798bdc0df6e2ceee9b4)]:
  - @livepeer/core-react@1.0.0-next.9

## 1.0.0-next.8

### Patch Changes

- [`3cada35`](https://github.com/livepeer/livepeer.js/commit/3cada350006426a006c6722f28623e25a1fda2b4) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed dStorage fallback to only use IPFS when `playbackId` does not exist.

- Updated dependencies [[`3cada35`](https://github.com/livepeer/livepeer.js/commit/3cada350006426a006c6722f28623e25a1fda2b4)]:
  - @livepeer/core-react@1.0.0-next.8

## 1.0.0-next.7

### Patch Changes

- [#189](https://github.com/livepeer/livepeer.js/pull/189) [`0f6bb63`](https://github.com/livepeer/livepeer.js/commit/0f6bb636f96ded681f9d02947f4ff022bab2a7cd) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed regression with IPFS auto-playback and mime type checking in browser.

- Updated dependencies [[`0f6bb63`](https://github.com/livepeer/livepeer.js/commit/0f6bb636f96ded681f9d02947f4ff022bab2a7cd)]:
  - @livepeer/core-react@1.0.0-next.7

## 1.0.0-next.6

### Patch Changes

- [#187](https://github.com/livepeer/livepeer.js/pull/187) [`44adf29`](https://github.com/livepeer/livepeer.js/commit/44adf2940ae3621038d87f1444b18398a57d399e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** added further theming overrides to progress and volume sliders.

- Updated dependencies [[`44adf29`](https://github.com/livepeer/livepeer.js/commit/44adf2940ae3621038d87f1444b18398a57d399e)]:
  - @livepeer/core-react@1.0.0-next.6

## 1.0.0-next.5

### Minor Changes

- [#182](https://github.com/livepeer/livepeer.js/pull/182) [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** moved the web logic out of `livepeer` into `@livepeer/core` to prevent polyfills from conflicting with React Native.

- [#182](https://github.com/livepeer/livepeer.js/pull/182) [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912) Thanks [@0xcadams](https://github.com/0xcadams)! - **Breaking:** removed the peer dependency on `ethers` and `typechain` in favor of exporting const ABIs which can be used with tools like [abitype](https://github.com/wagmi-dev/abitype).

### Patch Changes

- Updated dependencies [[`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912), [`16b1307`](https://github.com/livepeer/livepeer.js/commit/16b1307471bccaf645e623631ca6695ac0218912)]:
  - @livepeer/core-react@1.0.0-next.5

## 1.0.0-next.4

### Patch Changes

- [`e656367`](https://github.com/livepeer/livepeer.js/commit/e6563674369549a5335a511009165698748bc67e) Thanks [@0xcadams](https://github.com/0xcadams)! - **Fix:** fixed core-react to use callback refs to ensure that the consuming code gets the updated ref on mount.

- Updated dependencies [[`e656367`](https://github.com/livepeer/livepeer.js/commit/e6563674369549a5335a511009165698748bc67e)]:
  - @livepeer/core-react@1.0.0-next.4

## 1.0.0-next.3

### Patch Changes

- [#179](https://github.com/livepeer/livepeer.js/pull/179) [`a04136e`](https://github.com/livepeer/livepeer.js/commit/a04136efd4d315e6122b6a307c21ee400564cbbb) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Chore:** updated `@livepeer/core-react` package.

- Updated dependencies [[`a04136e`](https://github.com/livepeer/livepeer.js/commit/a04136efd4d315e6122b6a307c21ee400564cbbb)]:
  - @livepeer/core-react@1.0.0-next.3

## 1.0.0-next.2

### Patch Changes

- [#177](https://github.com/livepeer/livepeer.js/pull/177) [`8b0d1b3`](https://github.com/livepeer/livepeer.js/commit/8b0d1b33ff8e769ed6dd57d02b27bad475b4340a) Thanks [@github-actions](https://github.com/apps/github-actions)! - **Fix:** added `mediaElementRef` to Player for compatibility with external libraries.

## 1.0.0-next.1

### Patch Changes

- Updated dependencies [[`f2b5ed2`](https://github.com/livepeer/livepeer.js/commit/f2b5ed28bdbaf327609a845745637da0e010696c)]:
  - livepeer@2.0.0-next.1
  - @livepeer/core-react@1.0.0-next.1

## 1.0.0-next.0

### Major Changes

- [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f) Thanks [@0xcadams](https://github.com/0xcadams)! - **Feature:** Added `@livepeer/react-native` package with all hooks from `@livepeer/core-react`, and `Player` based on `expo-av` and controls on `react-native-svg`.

  This also includes metrics reporting for the Player and theming across the components.

### Minor Changes

- [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f) Thanks [@0xcadams](https://github.com/0xcadams)! - **Refactor:** added `@livepeer/core-react` package which includes all cross-environment hooks, utilities, and types. These are exported as `usePlayer`, `useControlsContainer`, etc.

### Patch Changes

- Updated dependencies [[`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f), [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f), [`cc4f4e8`](https://github.com/livepeer/livepeer.js/commit/cc4f4e87d48cbefaabcfa6dd867544a43584657f)]:
  - livepeer@1.5.0-next.0
  - @livepeer/core-react@0.1.0-next.0
