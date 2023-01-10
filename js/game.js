let canvas;
let world;
let startscreenImage;
let startscreenStart;
let screen;
let keyboard = new Keyboard();
let intervalIds = [];

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
    screen.requestFullscreen();
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

function clickMuteAudio() {
    document.getElementById('muted-icon').classList.remove('d-none');
    document.getElementById('unmuted-icon').classList.add('d-none');
    muteAllAudio();
}

function clickUnmuteAudio() {
    document.getElementById('muted-icon').classList.add('d-none');
    document.getElementById('unmuted-icon').classList.remove('d-none');
    unmuteAllAudio();
}

function infoScreenToggle() {
    document.getElementById('info-screen').classList.toggle('d-none');
}
