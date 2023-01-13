class DrawableObject {
    x = 0;
    y = 0;
    img;
    width = 250;
    height = 250;
    imageCache = [];
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawRectangle(ctx) {
        if (
            this instanceof Sharkie ||
            this instanceof PufferFish ||
            this instanceof Endboss ||
            this instanceof Poison ||
            this instanceof Coin ||
            this instanceof JellyFish ||
            this instanceof Barrier
        ) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImages(imgArray) {
        imgArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}
