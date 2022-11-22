class MoveableObject {
    x = 0;
    y = 0;
    img;
    width = 250;
    height = 250;
    imageCache = [];
    currentImage = 0;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imgArray) {
        imgArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache.push(img);
        });
    }

    moveLeft(speed) {
        setInterval(() => {
            this.x -= speed;
        }, 1000 / 60);
    }

    moveRight(speed) {
        setInterval(() => {
            this.x += speed;
        }, 1000 / 60);
    }

    moveUp(speed) {
        setInterval(() => {
            this.y -= speed;
        }, 1000 / 60);
    }

    moveDown(speed) {
        setInterval(() => {
            this.y += speed;
        }, 1000 / 60);
    }
}
