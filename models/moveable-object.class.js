class MoveableObject {
    x = 50;
    y = 100;
    img;
    width = 250;
    height = 250;
    imageCache = [];

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imgArray) {
        imgArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache.push(img);
            console.log(this.imageCache);
        });
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
