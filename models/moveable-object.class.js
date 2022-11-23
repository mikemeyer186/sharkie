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

    playAnimation(imgArray) {
        let m = this.currentImage % imgArray.length;
        this.img = this.imageCache[m];
        this.currentImage++;
    }

    moveLeft(speed) {
        this.x -= speed;
    }

    moveRight(speed) {
        this.x += speed;
    }

    moveUp(speed) {
        this.y -= speed;
    }

    moveDown(speed) {
        this.y += speed;
    }
}
