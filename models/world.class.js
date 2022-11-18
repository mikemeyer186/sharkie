class World {
    sharkie = new Sharkie();
    enemies = [new PufferFish(), new PufferFish(), new PufferFish()];
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
        this.ctx.drawImage(this.sharkie.img, this.sharkie.x, this.sharkie.y, this.sharkie.width, this.sharkie.height);
        this.enemies.forEach((enemy) => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        requestAnimationFrame(() => {
            self.draw();
        });
    }
}
