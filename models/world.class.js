class World {
    sharkie = new Sharkie();
    enemies = [new PufferFish(), new PufferFish(), new PufferFish()];
    light = new Light();
    background = [
        new BackgroundObjects('../img/background/water/light1.png'),
        new BackgroundObjects('../img/background/fond_1/light1.png'),
        new BackgroundObjects('../img/background/fond_2/light1.png'),
        new BackgroundObjects('../img/background/floor/light1.png'),
    ];
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        let self = this;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToCanvas(this.background);
        this.addToCanvas(this.light);
        this.addObjectsToCanvas(this.enemies);
        this.addToCanvas(this.sharkie);

        requestAnimationFrame(() => {
            self.draw();
        });
    }

    addToCanvas(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }

    addObjectsToCanvas(objects) {
        objects.forEach((o) => {
            this.addToCanvas(o);
        });
    }
}
