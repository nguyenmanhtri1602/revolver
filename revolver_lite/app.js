let innityAppsCountry = 'MY';
let isVideoLoaded = false;

function innityAppsBannerLoaded() {
  initVideo();
}

function invitationLandToSlideNumber(number, isAutomation) {
  if (isAutomation === true) {
    innityAppsTriggerTimerStart('frame' + parseInt(number) + '_default');
  } else {
    innityAppsTriggerTimerStart('frame' + parseInt(number));
  }
  
  if (number === 3) {
    innityAppsPlayVideo();
  } else {
    innityAppsPauseVideo();
  }
}

function initVideo() {
  if (isVideoLoaded === true) {
    return;
  }

  innityAppsEmbedAutoplayVideo();
  isVideoLoaded = true;
}

// ========== Video template required code ==========
let innityAppsFallbackPlayer = null;
let innityAppsVideoPlayer = null;
let innityAppsVisibilityHidden = 'hidden';

function innityAppsEmbedAutoplayVideo() {
  if (document.getElementById('video_container') === null) {
    return;
  }

  innityAppsVideoPlayer = new InnityAppsMobileAutoPlayVideo(
    'video_container',
    'video1',
    {
      //webm: 'video1.webm',
      mp4: 'video1.mp4',
      //mpg: 'video1.mpg',
      poster: adStudioVideoPosterName,
      autoplay: false,
      loop: false,
      forceFallback: false,
      country: innityAppsCountry,
      // For fallback player.
      fullscreen: true,
      canvaswidth: '320',
      canvasheight: '180',
      midctatext: 'Learn More',
      playstatectatext: 'Learn More',
      urls: innityAppsVideoClickTag
    },
    'video1.png' // this is fallback video poster.
  );

  innityAppsFallbackPlayer = innityAppsVideoPlayer.getFallbackPlayer();
  if (innityAppsFallbackPlayer !== null) {
    innityAppsRunFallbackVideo();
  }

  innityAppsVisibilityBinding();
}

function innityAppsPauseVideo() {
  if (innityAppsVideoPlayer === null) {
    return;
  }

  if (innityAppsFallbackPlayer !== null) {
    innityAppsFallbackPlayer.pausePreview();
    return;
  }

  innityAppsVideoPlayer.pauseVideo();
}

function innityAppsPlayVideo() {
  if (innityAppsVideoPlayer === null) {
    return;
  }

  if (innityAppsFallbackPlayer !== null) {
    innityAppsFallbackPlayer.playPreview();
    return;
  }

  innityAppsVideoPlayer.playVideo();
}

function innityAppsRunFallbackVideo() {
//    fallbackPlayer.noLoop(); // Preview will not loop after ended.
//    fallbackPlayer.noAutoplay(); // Preview will not autoplay.
//    fallbackPlayer.remainPreviewAfterClick(); // Preview will remain there after clicked.
//    fallbackPlayer.setClickCallback(whenFallbackAutoplayIsClicked);
//    fallbackPlayer.addListener('load', fallbackVideoOnLoad);
//    fallbackPlayer.addListener('play', fallbackVideoPlayed);
//    fallbackPlayer.addListener('ended', whenPreviewEnded);
//    fallbackPlayer.setVideoEndedCallback(whenHTMLVideoPlayedEnded);
//    fallbackPlayer.fullscreenCallBack(checkVideoFullScreenStatus);
  innityAppsFallbackPlayer.startEngine(); // This is always required!!!!!
}

function innityAppsVisibilityBinding() {
  var visibilityChangeEvent = 'visibilitychange';
  if (typeof (document.msHidden) !== 'undefined') {
    innityAppsVisibilityHidden = 'msHidden';
    visibilityChangeEvent = 'msvisibilitychange';
  } else if (typeof (document.webkitHidden) !== 'undefined') {
    innityAppsVisibilityHidden = 'webkitHidden';
    visibilityChangeEvent = 'webkitvisibilitychange';
  }

  document.addEventListener(visibilityChangeEvent, innityAppsVisibilityChange, false);
}

function innityAppsVisibilityChange() {
  if (innityAppsFallbackPlayer !== null) {
    return;
  }

  if (document[innityAppsVisibilityHidden] === true) {
    // When browser is hidden or in background.
    innityAppsVideoPlayer.pauseVideo();
  } else {
    // When browser is active or focus.
//        videoPlayer.playVideo();
  }
}
// ========== Video template required code ==========

/**
 * Device orientation event callback. <br />
 * Callback only when isOrientationEnable is set to TRUE in CoreEngine.js <br />
 * e.alpha <br />
 * e.beta <br />
 * e.gamma
 * @param {object} e
 */
function deviceOrientation(e) {
  console.log(e.alpha, e.beta, e.gamma);
}
/**
 * Orientation change event callback. <br />
 * Callback only when isOrientationEnable is set to TRUE in CoreEngine.js <br />
 * e.eventType
 * @param {object} e
 */
function orientationChange(e) {
  console.log(e.eventType);
}