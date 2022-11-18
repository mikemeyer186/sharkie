class MoveableObject {
    x = 50;
    y = 100;
    img;
    width = 250;
    height = 250;

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
