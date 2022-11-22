class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    sharkie = new Sharkie();
    enemies = level1.enemies;
    light = level1.light;
    background = level1.background;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setControls();
    }

    setControls() {
        this.sharkie.control = this.keyboard;
        this.sharkie.camera_x = this.camera_x;
    }

    draw() {
        let self = this;

        this.ctx.translate(this.sharkie.camera_x, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToCanvas(this.background);
        this.addToCanvas(this.light);
        this.addObjectsToCanvas(this.enemies);
        this.addToCanvas(this.sharkie);
        this.ctx.translate(-this.sharkie.camera_x, 0);

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
