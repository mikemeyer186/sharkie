class World {
    sharkie = new Sharkie();
    enemies = [new PufferFish(), new PufferFish(), new PufferFish()];
    light = new Light();
    floor = new Floor();
    water = new Water();
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
        this.addToCanvas(this.water);
        this.addToCanvas(this.floor);
        this.addToCanvas(this.light);
        this.addToCanvas(this.sharkie);
        this.addObjectsToCanvas(this.enemies);

        requestAnimationFrame(() => {
            self.draw();
        });
    }

    addToCanvas(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }

    addObjectsToCanvas(objects) {
        objects.forEach((o) => {
            this.ctx.drawImage(o.img, o.x, o.y, o.width, o.height);
        });
    }
}
