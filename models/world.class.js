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

    /**
     * giving variables to object "sharkie"
     */
    setControls() {
        this.sharkie.control = this.keyboard;
        this.sharkie.camera_x = this.camera_x;
        this.sharkie.level = this.level;
        this.sharkie.world = this;
    }

    /**
     * initial interval
     */
    activeInterval() {
        setStoppableInterval(() => {
            this.checkCollisions();
            this.checkBarrierCollision();
            this.checkNoBarrierCollision();
            this.checkCollisionsPoison();
            this.checkCollisionsCoins();
            this.checkCollisionsEndboss();
            this.checkBubbling();
            this.checkEndbossArea();
            this.checkBossBubbles();
            this.checkSlapping();
        }, 50);
    }

    /**
     * checking if sharkie is in endboss area
     */
    checkEndbossArea() {
        if (this.sharkie.x >= 3170) {
            this.endboss.endbossIntro = true;
            this.lifeBarBoss.endbossArea = true;
        }
    }

    /**
     * checking collisions with enemies
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.sharkie.isColliding(enemy) && !this.sharkie.isSlapping()) {
                playSharkieHurtAudio();
                this.sharkie.decreaseEnergy();
                this.lifeBar.setStatusBar(this.sharkie.energy);
            }
        });
    }

    /**
     * checking collisions with barriers
     */
    checkBarrierCollision() {
        this.level.barriers.forEach((barrier) => {
            if (this.sharkie.isColliding(barrier)) {
                this.sharkie.collisionBarrier = true;
                this.sharkie.collisionBarrierObject = barrier;
            }
        });
    }

    /**
     * checking if there is no collision with barriers
     */
    checkNoBarrierCollision() {
        if (this.sharkie.collisionBarrier) {
            if (!this.sharkie.isColliding(this.sharkie.collisionBarrierObject)) {
                this.sharkie.collisionBarrier = false;
            }
        }
    }

    /**
     * checking collision with endboss
     */
    checkCollisionsEndboss() {
        if (this.sharkie.isColliding(this.endboss)) {
            playSharkieHurtAudio();
            this.sharkie.decreaseEnergy();
            this.lifeBar.setStatusBar(this.sharkie.energy);
        }
    }

    /**
     * checking if poison bubbles hits endboss
     */
    checkBossBubbles() {
        this.poisonBubbles.forEach((bubble, index) => {
            if (this.endboss.isColliding(bubble)) {
                this.endboss.decreaseEnergyBoss();
                this.poisonBubbles.splice(index, 1);
                this.lifeBarBoss.setStatusBar(this.endboss.bossLife);
            }
        });
    }

    /**
     * checking if sharkie collects poison bottles
     */
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

    /**
     * checking if sharkie is bubbling
     */
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

    /**
     * checking if sharkie is collecting coins
     */
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

    /**
     * chekcing if sharkie is slapping
     */
    checkSlapping() {
        this.level.enemies.forEach((enemy) => {
            if (this.sharkie.isNearToSharkie(enemy) && this.keyboard.slapKey && !this.sharkie.isHurt()) {
                enemy.deadAnimation(this.sharkie.otherDirection);
                this.keyboard.slapKey = false;
            }
        });
    }

    /**
     * drawing objects in canvas
     */
    draw() {
        let self = this;
        this.ctx.translate(this.sharkie.camera_x, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBackgroundObjects();
        this.drawMovingObjects();
        this.drawingFixedObjects();
        this.ctx.translate(-this.sharkie.camera_x, 0);

        requestAnimationFrame(() => {
            self.draw();
        });
    }

    /**
     * drawing moving objects
     */
    drawMovingObjects() {
        this.addObjectsToCanvas(this.level.barriers);
        this.addObjectsToCanvas(this.level.coins);
        this.addObjectsToCanvas(this.level.poison);
        this.addObjectsToCanvas(this.level.enemies);
        this.addToCanvas(this.sharkie);
        this.addToCanvas(this.endboss);
        this.addObjectsToCanvas(this.poisonBubbles);
    }

    /**
     * drawing background objects
     */
    drawBackgroundObjects() {
        this.level.background.forEach((object, index) => {
            this.ctx.translate(-this.sharkie.camera_x, 0);
            this.ctx.translate(this.sharkie.camera_x / this.level.background[index].layer, 0);
            this.addToCanvas(this.level.background[index]);
            this.ctx.translate(-this.sharkie.camera_x / this.level.background[index].layer, 0);
            this.ctx.translate(this.sharkie.camera_x, 0);
        });
    }

    /**
     * drawing fixed objects
     */
    drawingFixedObjects() {
        this.ctx.translate(-this.sharkie.camera_x, 0);
        this.addToCanvas(this.lifeBar);
        this.addToCanvas(this.lifeBarBoss);
        this.addToCanvas(this.coinBar);
        this.addToCanvas(this.poisonBar);
        this.ctx.translate(this.sharkie.camera_x, 0);
    }

    /**
     * adding one object to canvas
     * @param {object} object - drawing object
     */
    addToCanvas(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }

        object.draw(this.ctx);

        if (object.otherDirection) {
            this.flipImageReset(object);
        }
    }

    /**
     * adding multiple objects to canvas
     * @param {object} objects - drawing objects
     */
    addObjectsToCanvas(objects) {
        objects.forEach((o) => {
            this.addToCanvas(o);
        });
    }

    /**
     * flipping image to left if moved to other direction
     * @param {object} object - drawing object
     */
    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    /**
     * resetting flipped image back to normal
     * @param {object} object - drawing object
     */
    flipImageReset(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }
}
