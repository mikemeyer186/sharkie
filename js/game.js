let canvas;
let ctx;
let character = new MoveableObject();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.src = '../img/sharkie/swim/1.png';
}
