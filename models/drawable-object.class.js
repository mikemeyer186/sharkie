class DrawableObject {
    x = 0;
    y = 0;
    img;
    width = 250;
    height = 250;
    imageCache = [];
    currentImage = 0;

    /**
     * loading image of object
     * @param {string} path - path of image
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * drawing images in canvas
     * @param {object} ctx - context of drawing image
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * loading images in image cache
     * @param {array} imgArray - array of pathes of images
     */
    loadImages(imgArray) {
        imgArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}
