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
    isCollidingWithBarrier = false;

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
        this.sharkie.world = this;
    }

    activeInterval() {
        setStoppableInterval(() => {
            this.checkCollisions();
            this.checkBarrierCollision();
            this.checkBarrierSide();
            this.checkCollisionsPoison();
            this.checkCollisionsCoins();
            this.checkCollisionsEndboss();
            this.checkBubbling();
            this.checkEndbossArea();
            this.checkBossBubbles();
            this.checkSlapping();
        }, 50);
    }

    checkEndbossArea() {
        if (this.sharkie.x >= 2450) {
            this.endboss.endbossIntro = true;
            this.lifeBarBoss.endbossArea = true;
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.sharkie.isColliding(enemy) && !this.sharkie.isSlapping()) {
                playSharkieHurtAudio();
                this.sharkie.decreaseEnergy();
                this.lifeBar.setStatusBar(this.sharkie.energy);
            }
        });
    }

    checkBarrierCollision() {
        this.level.barriers.forEach((barrier) => {
            if (this.sharkie.isColliding(barrier)) {
                this.isCollidingWithBarrier = true;
            } else {
                this.isCollidingWithBarrier = false;
            }
        });
    }

    checkBarrierSide() {
        this.level.barriers.forEach((barrier) => {
            if (this.sharkie.isColliding(barrier) && this.sharkie.isCollidingBarrierRight(barrier)) {
                this.sharkie.collisionBarrierRight = true;
            } else if (this.sharkie.isColliding(barrier) && this.sharkie.isCollidingBarrierLeft(barrier)) {
                this.sharkie.collisionBarrierLeft = true;
            } else if (this.sharkie.isColliding(barrier) && this.sharkie.isCollidingBarrierTop(barrier)) {
                this.sharkie.collisionBarrierTop = true;
            } else if (this.sharkie.isColliding(barrier) && this.sharkie.isCollidingBarrierBottom(barrier)) {
                this.sharkie.collisionBarrierBottom = true;
            } else if (!this.isCollidingWithBarrier) {
                this.sharkie.collisionBarrierLeft = false;
                this.sharkie.collisionBarrierRight = false;
                this.sharkie.collisionBarrierTop = false;
                this.sharkie.collisionBarrierBottom = false;
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
            if (this.availableBubbles > 0 && this.sharkie.isBubbleTime()) {
                this.sharkie.bubbleTime = new Date().getTime();
                let poisonBubble = new ThrowableObject(this.sharkie.x, this.sharkie.y);
                this.poisonBubbles.push(poisonBubble);
                poisonBubble.poisonBubbling();
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

    checkSlapping() {
        this.level.enemies.forEach((enemy) => {
            if (this.sharkie.isNearToSharkie(enemy) && this.keyboard.slapKey && !this.sharkie.isHurt()) {
                enemy.deadAnimation(this.sharkie.otherDirection);
            }
        });
    }

    draw() {
        let self = this;

        this.ctx.translate(this.sharkie.camera_x, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToCanvas(this.level.background);
        this.addObjectsToCanvas(this.level.barriers);
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
