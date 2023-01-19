let canvas;
let world;
let startscreenImage;
let startscreenStart;
let screen;
let keyboard = new Keyboard();
let intervalIds = [];
let portraitModus;

function init() {
    screen = document.getElementById('screen');
    startscreenImage = document.getElementById('startscreen-img');
    startscreenStart = document.getElementById('startscreen-start');
    gameOverImage = document.getElementById('gameover-screen');
    winnerImage = document.getElementById('winning-screen');
    tryAgainButton = document.getElementById('try-again-btn');
    mobileBtnPanel = document.getElementById('mobile-btn-panel');
    canvas = document.getElementById('canvas');
    unmuteAllAudio();
    checkPortraitModus();
    checkPortraitEvent();
}

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

function hideStartscreen() {
    setTimeout(() => {
        startscreenImage.classList.add('d-none');
    }, 1000);
}

function toggleFullscreen() {
    let iconStart = document.getElementById('fullscreen-icon-start');
    let iconExit = document.getElementById('fullscreen-icon-exit');

    if (iconStart.classList.contains('d-none')) {
        iconStart.classList.remove('d-none');
        iconExit.classList.add('d-none');
        closeFullscreen();
    } else {
        iconStart.classList.add('d-none');
        iconExit.classList.remove('d-none');
        startFullscreen();
    }
}

function startFullscreen() {
    if (screen.requestFullscreen) {
        screen.requestFullscreen();
    } else if (screen.webkitRequestFullscreen) {
        screen.webkitRequestFullscreen();
    } else if (screen.msRequestFullscreen) {
        screen.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function stopGame() {
    intervalIds.forEach(clearInterval);
    audio_background.pause();
    audio_music.pause();
}

function showGameOver() {
    audio_level_loose.play();
    gameOverImage.classList.remove('no-opacity');
    mobileBtnPanel.classList.add('d-none');
    showTryAgain();
}

function showTryAgain() {
    setTimeout(() => {
        tryAgainButton.classList.remove('d-none');
    }, 4000);
}

function showWinningScreen() {
    audio_level_win.play();
    winnerImage.classList.remove('d-none');
    mobileBtnPanel.classList.add('d-none');
    showTryAgain();
}

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

function muteAudio() {
    muteAllAudio();
}

function unmuteAudio() {
    unmuteAllAudio();
}

function infoScreenToggle() {
    document.getElementById('info-screen').classList.toggle('d-none');
}

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

function checkPortraitModus() {
    portraitModus = window.matchMedia('(orientation: portrait)').matches;

    if (portraitModus) {
        showPortraitScreen();
    } else {
        hidePortraitScreen();
    }
}

function showPortraitScreen() {
    document.getElementById('portraitScreen').classList.remove('d-none');
    spinPortraitImage();
}

function hidePortraitScreen() {
    document.getElementById('portraitScreen').classList.add('d-none');
    document.getElementById('portraitImage').style.transform = 'none';
}

function spinPortraitImage() {
    setTimeout(() => {
        document.getElementById('portraitImage').style.transform = 'rotate(90deg)';
    }, 500);
}

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

function mobileButtonsToggle() {
    if (mobileBtnPanel.style.display == 'none') {
        mobileBtnPanel.style.display = 'block';
    } else {
        mobileBtnPanel.style.display = 'none';
    }
}

function toggleMenu() {
    document.getElementById('menu').classList.toggle('slideIn');
    document.getElementById('settings').classList.toggle('rotate');
}
