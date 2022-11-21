class World {
    ctx;
    canvas;
    keyboard;
    sharkie = new Sharkie();
    enemies = [new PufferFish(), new PufferFish(), new PufferFish()];
    light = new Light();
    background = [
        new BackgroundObjects('../img/background/water/light1.png'),
        new BackgroundObjects('../img/background/fond_1/light1.png'),
        new BackgroundObjects('../img/background/fond_2/light1.png'),
        new BackgroundObjects('../img/background/floor/light1.png'),
    ];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setControls();
    }

    setControls() {
        this.sharkie.control = this.keyboard;
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
        if (object.otherDirection) {
            this.flipImage(object);
        }

        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);

        if (object.otherDirection) {
            this.flipImageReset(object);
        }
    }

    addObjectsToCanvas(objects) {
        objects.forEach((o) => {
            this.addToCanvas(o);
        });
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageReset(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }
}
