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
    poisonBubbles = [];
    availableBubbles = 0;
    audio_coin_pickup = new Audio('../audio/coin_pickup.mp3');
    audio_poison_pickup = new Audio('../audio/poison_pickup.mp3');
    audio_sharkie_hit = new Audio('../audio/sharkie_hit.mp3');
    audio_poison_bubble = new Audio('../audio/poison_bubble.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setControls();
        this.activeInterval();
        this.audio_coin_pickup.volume = 0.3;
        this.audio_poison_pickup.volume = 0.7;
        this.audio_sharkie_hit.volume = 0.3;
        this.audio_poison_bubble.volume = 0.8;
    }

    setControls() {
        this.sharkie.control = this.keyboard;
        this.sharkie.camera_x = this.camera_x;
        this.sharkie.level = this.level;
    }

    activeInterval() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollisionsPoison();
            this.checkCollisionsCoins();
            this.checkBubbling();
        }, 50);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.sharkie.isColliding(enemy)) {
                this.audio_sharkie_hit.play();
                this.sharkie.decreaseEnergy();
                this.lifeBar.setStatusBar(this.sharkie.energy);
            }
        });
    }

    checkCollisionsPoison() {
        this.level.poison.forEach((poison, index) => {
            if (this.sharkie.isColliding(poison)) {
                this.audio_poison_pickup.play();
                this.sharkie.increasePoison();
                this.poisonBar.setStatusBar(this.sharkie.poison);
                this.level.poison.splice(index, 1);
                this.availableBubbles += 1;
            }
        });
    }

    checkBubbling() {
        if (this.keyboard.Space) {
            if (this.availableBubbles > 0) {
                let poisonBubble = new ThrowableObject(this.sharkie.x, this.sharkie.y);
                this.poisonBubbles.push(poisonBubble);
                poisonBubble.poisonBubbling();
                this.audio_poison_bubble.play();
                this.sharkie.decreasePoison();
                this.poisonBar.setStatusBar(this.sharkie.poison);
                this.availableBubbles -= 1;
            }
        }
    }

    checkCollisionsCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.sharkie.isColliding(coin)) {
                this.audio_coin_pickup.play();
                this.sharkie.increaseCoin();
                this.coinBar.setStatusBar(this.sharkie.coins);
                this.level.coins.splice(index, 1);
            }
        });
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
        this.addObjectsToCanvas(this.poisonBubbles);
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
