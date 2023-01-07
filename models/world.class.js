class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    sharkie = new Sharkie();
    endboss = new Endboss();
    level = level1;
    lifeBar = new LifeBar();
    lifeBarBoss = new LifeBarBoss();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    poisonBubbles = [];
    availableBubbles = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setControls();
        this.activeInterval();
    }

    setControls() {
        this.sharkie.control = this.keyboard;
        this.sharkie.camera_x = this.camera_x;
        this.sharkie.level = this.level;
    }

    activeInterval() {
        setStoppableInterval(() => {
            this.checkCollisions();
            this.checkCollisionsPoison();
            this.checkCollisionsCoins();
            this.checkCollisionsEndboss();
            this.checkBubbling();
            this.checkEndbossArea();
            this.checkBossBubbles();
        }, 50);
    }

    checkEndbossArea() {
        if (this.sharkie.x >= 1450) {
            this.endboss.endbossIntro = true;
            this.lifeBarBoss.endbossArea = true;
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.sharkie.isColliding(enemy)) {
                playSharkieHurtAudio();
                this.sharkie.decreaseEnergy();
                this.lifeBar.setStatusBar(this.sharkie.energy);
            }
        });
    }

    checkCollisionsEndboss() {
        if (this.sharkie.isColliding(this.endboss)) {
            playSharkieHurtAudio();
            this.sharkie.decreaseEnergy();
            this.lifeBar.setStatusBar(this.sharkie.energy);
        }
    }

    checkBossBubbles() {
        this.poisonBubbles.forEach((bubble, index) => {
            if (this.endboss.isColliding(bubble)) {
                this.endboss.decreaseEnergyBoss();
                this.poisonBubbles.splice(index, 1);
                this.lifeBarBoss.setStatusBar(this.endboss.bossLife);
            }
        });
    }

    checkCollisionsPoison() {
        this.level.poison.forEach((poison, index) => {
            if (this.sharkie.isColliding(poison)) {
                playPoisonPickupAudio();
                this.sharkie.increasePoison();
                this.poisonBar.setStatusBar(this.sharkie.poison);
                this.level.poison.splice(index, 1);
                this.availableBubbles += 1;
            }
        });
    }

    checkBubbling() {
        if (this.keyboard.Space) {
            this.sharkie.idleTime = 0;
            if (this.availableBubbles > 0) {
                let poisonBubble = new ThrowableObject(this.sharkie.x, this.sharkie.y);
                this.poisonBubbles.push(poisonBubble);
                poisonBubble.poisonBubbling();
                playPoisonBubbleAudio();
                this.sharkie.decreasePoison();
                this.poisonBar.setStatusBar(this.sharkie.poison);
                this.availableBubbles -= 1;
            }
        }
    }

    checkCollisionsCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.sharkie.isColliding(coin)) {
                playCoinPickupAudio();
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
        this.addToCanvas(this.lifeBarBoss);
        this.addToCanvas(this.coinBar);
        this.addToCanvas(this.poisonBar);
        this.ctx.translate(this.sharkie.camera_x, 0);

        this.addToCanvas(this.sharkie);
        this.addToCanvas(this.endboss);
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
