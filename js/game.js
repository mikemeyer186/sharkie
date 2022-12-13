let canvas;
let world;
let startscreenImage;
let startscreenStart;
let screen;
let keyboard = new Keyboard();
let audio_background = new Audio('../audio/background.mp3');

function init() {
    screen = document.getElementById('screen');
    startscreenImage = document.getElementById('startscreen-img');
    startscreenStart = document.getElementById('startscreen-start');
    canvas = document.getElementById('canvas');
}

function startGame() {
    startscreenImage.classList.add('no-opacity');
    startscreenStart.classList.add('d-none');
    startLevel1();
    world = new World(canvas, keyboard);
    playAudio();
    hideStartscreen();
}

function hideStartscreen() {
    setTimeout(() => {
        startscreenImage.classList.add('d-none');
    }, 1000);
}

document.addEventListener('keydown', (event) => {
    keyboard[`${event.code}`] = true;
});

document.addEventListener('keyup', () => {
    keyboard.ArrowLeft = false;
    keyboard.ArrowRight = false;
    keyboard.ArrowUp = false;
    keyboard.ArrowDown = false;
    keyboard.Space = false;
});

function playAudio() {
    audio_background.play();
    audio_background.addEventListener('ended', () => {
        audio_background.play();
    });
}

function toggleFullscreen() {
    screen.requestFullscreen();
}
