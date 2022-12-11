let canvas;
let world;
let startscreen;
let keyboard = new Keyboard();
let audio_background = new Audio('../audio/background.mp3');

function init() {
    startscreen = document.getElementById('startscreen');
    canvas = document.getElementById('canvas');
}

function startGame() {
    startscreen.classList.add('no-opacity');
    startLevel1();
    world = new World(canvas, keyboard);
    playAudio();
    hideStartscreen();
}

function hideStartscreen() {
    setTimeout(() => {
        startscreen.classList.add('d-none');
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
    startscreen.requestFullscreen();
    canvas.requestFullscreen();
}
