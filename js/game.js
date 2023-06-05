let canvas;
let world;
let startscreenImage;
let startscreenStart;
let screen;
let keyboard = new Keyboard();
let intervalIds = [];
let portraitModus;
let gameDataLoaded = 0;
let gameDataTotal = preloadingImages.length + preloadingAudio.length;
let gameDataProgress = 0;
let gameDateLoadingComplete = false;

/**
 * initial function when page loads
 */
function init() {
    screen = document.getElementById('screen');
    startscreenImage = document.getElementById('startscreen-img');
    startscreenStart = document.getElementById('startscreen-start');
    loadingProgress = document.getElementById('loading-progress');
    gameOverImage = document.getElementById('gameover-screen');
    winnerImage = document.getElementById('winning-screen');
    tryAgainButton = document.getElementById('try-again-btn');
    mobileBtnPanel = document.getElementById('mobile-btn-panel');
    canvas = document.getElementById('canvas');
    unmuteAllAudio();
    checkPortraitModus();
    checkPortraitEvent();
    preloadImages();
}

/**
 * preloading all images
 */
function preloadImages() {
    let images = preloadingImages;
    for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];
        img.onload = () => {
            gameDataLoaded++;
            gameDataProgress = ((gameDataLoaded / gameDataTotal) * 100).toFixed(0);
            progressBarAnimation(gameDataProgress);
            if (gameDataLoaded == images.length) {
                preloadAudio();
            }
        };
    }
}

/**
 * preloading all audios
 */
function preloadAudio() {
    let audios = preloadingAudio;
    for (let i = 0; i < audios.length; i++) {
        let audio = new Audio(audios[i]);
        audio.src = audios[i];
        audio.load();
        gameDataLoaded++;
        gameDataProgress = ((gameDataLoaded / gameDataTotal) * 100).toFixed(0);
        progressBarAnimation(gameDataProgress);

        if (gameDataLoaded == gameDataTotal) {
            gameDateLoadingComplete = true;
            showStartButton();
        }
    }
}

/**
 * showing start button after loading
 */
function showStartButton() {
    setTimeout(() => {
        startscreenStart.classList.remove('d-none');
        loadingProgress.classList.add('d-none');
    }, 2000);
}

/**
 * animating the progressbar
 * @param {numer} gameDataProgress - progress of loading
 */
function progressBarAnimation(gameDataProgress) {
    let progressBar = document.getElementById('loading-progress-bar');
    let progressBarText = document.getElementById('loading-progress-percent');
    let width = gameDataProgress;
    progressBar.style.width = width + '%';
    progressBarText.innerHTML = width + '%';
}

/**
 * starting the game
 */
function startGame() {
    startscreenImage.classList.add('no-opacity');
    startscreenStart.classList.add('d-none');
    gameOverImage.classList.add('no-opacity');
    tryAgainButton.classList.add('d-none');
    winnerImage.classList.add('d-none');
    mobileBtnPanel.classList.remove('d-none');
    startLevel1();
    playBackgroundAudio();
    hideStartscreen();
    world = new World(canvas, keyboard);
}

/**
 * eventlistener when page loads for hiding the adressbar on mobile devices
 */
document.addEventListener('load', () => {
    setTimeout(function () {
        document.scrollTo(0, 1);
    }, 1);
});

/**
 * eventlisteners when fullscreen mode changes
 */
document.addEventListener('fullscreenchange', changeFullscreenIcon);
document.addEventListener('webkitfullscreenchange', changeFullscreenIcon);
document.addEventListener('mozfullscreenchange', changeFullscreenIcon);
document.addEventListener('MSFullscreenChange', changeFullscreenIcon);

/**
 * changing fullscreen icon in menu when fullscreen mode changes
 */
function changeFullscreenIcon() {
    let iconStart = document.getElementById('fullscreen-icon-start');
    let iconExit = document.getElementById('fullscreen-icon-exit');

    if (iconStart.classList.contains('d-none')) {
        iconStart.classList.remove('d-none');
        iconExit.classList.add('d-none');
    } else {
        iconStart.classList.add('d-none');
        iconExit.classList.remove('d-none');
    }
}

/**
 * hiding the startscreen when game starts
 */
function hideStartscreen() {
    setTimeout(() => {
        startscreenImage.classList.add('d-none');
    }, 1000);
}

/**
 * toggling the fullscreen mode
 */
function toggleFullscreen() {
    let iconStart = document.getElementById('fullscreen-icon-start');

    if (iconStart.classList.contains('d-none')) {
        closeFullscreen();
    } else {
        startFullscreen();
    }
}

/**
 * starting the fullscreen mode
 */
function startFullscreen() {
    if (screen.requestFullscreen) {
        screen.requestFullscreen();
    } else if (screen.webkitRequestFullscreen) {
        screen.webkitRequestFullscreen();
    } else if (screen.msRequestFullscreen) {
        screen.msRequestFullscreen();
    }
}

/**
 * exiting the fullscreen mode
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (screen.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

/**
 * function to create an array with all stoppable intervals
 * @param {function} fn - function of interval
 * @param {number} time - time of interval
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

/**
 * stopping all intervals and pausing the audio
 */
function stopGame() {
    intervalIds.forEach(clearInterval);
    audio_background.pause();
    audio_music.pause();
}

/**
 * showing game over screen
 */
function showGameOver() {
    audio_level_loose.play();
    gameOverImage.classList.remove('no-opacity');
    mobileBtnPanel.classList.add('d-none');
    showTryAgain();
}

/**
 * showing try again screen
 */
function showTryAgain() {
    setTimeout(() => {
        tryAgainButton.classList.remove('d-none');
    }, 3000);
}

/**
 * showing winning screen
 */
function showWinningScreen() {
    audio_level_win.play();
    winnerImage.classList.remove('d-none');
    mobileBtnPanel.classList.add('d-none');
    showTryAgain();
}

/**
 * toggling the audio mute/unmute in menu
 */
function toggleMuteAudio() {
    let iconOn = document.getElementById('unmuted-icon');
    let iconOff = document.getElementById('muted-icon');

    if (iconOn.classList.contains('d-none')) {
        iconOn.classList.remove('d-none');
        iconOff.classList.add('d-none');
        unmuteAudio();
    } else {
        iconOn.classList.add('d-none');
        iconOff.classList.remove('d-none');
        muteAudio();
    }
}

/**
 * muting audio
 */
function muteAudio() {
    muteAllAudio();
}

/**
 * unmuting audio
 */
function unmuteAudio() {
    unmuteAllAudio();
}

/**
 * showing info screen
 */
function infoScreenToggle() {
    document.getElementById('info-screen').classList.toggle('d-none');
}

/**
 * checking if device is in portrait mode when mode changed (event)
 */
function checkPortraitEvent() {
    window.matchMedia('(orientation: portrait)').addEventListener('change', (e) => {
        let portrait = e.matches;
        if (portrait) {
            portraitModus = true;
            showPortraitScreen();
        } else {
            portraitModus = false;
            hidePortraitScreen();
        }
    });
}

/**
 * checking if device is in portait mode when page loads
 */
function checkPortraitModus() {
    portraitModus = window.matchMedia('(orientation: portrait)').matches;

    if (portraitModus) {
        showPortraitScreen();
    } else {
        hidePortraitScreen();
    }
}

/**
 * showing portrait mode screen
 */
function showPortraitScreen() {
    document.getElementById('portraitScreen').classList.remove('d-none');
    spinPortraitImage();
}

/**
 * hiding portrait mode screen
 */
function hidePortraitScreen() {
    document.getElementById('portraitScreen').classList.add('d-none');
    document.getElementById('portraitImage').style.transform = 'none';
}

/**
 * rotating the image in portrait screen
 */
function spinPortraitImage() {
    setTimeout(() => {
        document.getElementById('portraitImage').style.transform = 'rotate(90deg)';
    }, 500);
}

/**
 * toggling the mobile panel icon in menu and triggering next function
 */
function toggleMobilePanel() {
    let iconOn = document.getElementById('controller-icon-on');
    let iconOff = document.getElementById('controller-icon-off');

    if (iconOn.classList.contains('d-none')) {
        iconOn.classList.remove('d-none');
        iconOff.classList.add('d-none');
    } else {
        iconOn.classList.add('d-none');
        iconOff.classList.remove('d-none');
    }
    mobileButtonsToggle();
}

/**
 * toggling mobile buttons in game
 */
function mobileButtonsToggle() {
    if (mobileBtnPanel.style.display == 'none') {
        mobileBtnPanel.style.display = 'block';
    } else {
        mobileBtnPanel.style.display = 'none';
    }
}

/**
 * toggling the settings menu
 */
function toggleMenu() {
    document.getElementById('menu').classList.toggle('slideIn');
    document.getElementById('settings').classList.toggle('rotate');
}
