class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    sharkie = new Sharkie();
    level = level1;
    lifeBar = new LifeBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setControls();
        this.checkCollisions();
        this.checkCollisionsPoison();
        this.checkCollisionsCoins();
    }

    setControls() {
        this.sharkie.control = this.keyboard;
        this.sharkie.camera_x = this.camera_x;
        this.sharkie.level = this.level;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.sharkie.isColliding(enemy)) {
                    this.sharkie.decreaseEnergy();
                    this.lifeBar.setStatusBar(this.sharkie.energy);
                }
            });
        }, 200);
    }

    checkCollisionsPoison() {
        setInterval(() => {
            this.level.poison.forEach((poison, index) => {
                if (this.sharkie.isColliding(poison)) {
                    this.sharkie.increasePoison();
                    this.poisonBar.setStatusBar(this.sharkie.poison);
                    this.level.poison.splice(index, 1);
                }
            });
        }, 200);
    }

    checkCollisionsCoins() {
        setInterval(() => {
            this.level.coins.forEach((coin, index) => {
                if (this.sharkie.isColliding(coin)) {
                    this.sharkie.increaseCoin();
                    this.coinBar.setStatusBar(this.sharkie.coins);
                    this.level.coins.splice(index, 1);
                }
            });
        }, 200);
    }

    draw() {
        let self = this;

        this.ctx.translate(this.sharkie.camera_x, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToCanvas(this.level.background);
        this.addObjectsToCanvas(this.level.coins);
        this.addObjectsToCanvas(this.level.poison);
        this.addToCanvas(this.level.light);
        this.addObjectsToCanvas(this.level.enemies);

        this.ctx.translate(-this.sharkie.camera_x, 0);
        this.addToCanvas(this.lifeBar);
        this.addToCanvas(this.coinBar);
        this.addToCanvas(this.poisonBar);
        this.ctx.translate(this.sharkie.camera_x, 0);

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

        object.draw(this.ctx);
        object.drawRectangle(this.ctx);

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
