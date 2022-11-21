let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
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
