class MoveableObject {
    x = 0;
    y = 0;
    img;
    width = 250;
    height = 250;
    imageCache = [];
    currentImage = 0;
    otherDirection = false;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawRectangle(ctx) {
        if (this instanceof Sharkie || this instanceof PufferFish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
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

    isColliding(obj) {
        return (
            this.x + this.width - this.offset.right >= obj.x + obj.offset.left &&
            this.x + this.offset.left <= obj.x + obj.width - obj.offset.right &&
            this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top &&
            this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom
        ); //&&
        //obj.onCollisionCourse // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }
}
