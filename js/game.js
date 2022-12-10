let canvas;
let world;
let keyboard = new Keyboard();
let audio_background = new Audio('../audio/background.mp3');
let interact = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

document.addEventListener('keydown', (event) => {
    keyboard[`${event.code}`] = true;
    playAudio();
});

document.addEventListener('keyup', () => {
    keyboard.ArrowLeft = false;
    keyboard.ArrowRight = false;
    keyboard.ArrowUp = false;
    keyboard.ArrowDown = false;
    keyboard.Space = false;
});

function playAudio() {
    interact = true;
    if (interact == true) {
        audio_background.play();
        audio_background.addEventListener('ended', () => {
            audio_background.play();
        });
    }
}

function toggleFullscreen() {
    canvas.requestFullscreen();
}
