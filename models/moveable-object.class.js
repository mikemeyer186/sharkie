class MoveableObject {
    x = 50;
    y = 100;
    img;
    width = 200;
    height = 200;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveLeft() {
        console.log('Moving left');
    }

    moveRight() {
        console.log('Moving right');
    }

    moveUp() {
        console.log('Moving up');
    }

    moveDown() {
        console.log('Moving down');
    }
}
