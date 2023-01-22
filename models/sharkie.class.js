class Sharkie extends MoveableObject {
    x = 800;
    y = 70;
    control;
    camera_x;
    level;
    world;
    speed = 3;
    idleTime = 0;
    deadTime = 0;
    bubbleTime;
    shotTime;
    slapTime;
    collisionBarrier = false;
    collisionBarrierObject;
    collisionBarrierLeft = false;
    collisionBarrierRight = false;
    collisionBarrierTop = false;
    collisionBarrierBottom = false;
    offset = {
        top: 120,
        bottom: 60,
        left: 60,
        right: 40,
    };
    images_swimming = [
        'img/sharkie/swim/1.png',
        'img/sharkie/swim/2.png',
        'img/sharkie/swim/3.png',
        'img/sharkie/swim/4.png',
        'img/sharkie/swim/5.png',
        'img/sharkie/swim/6.png',
    ];
    images_idle = [
        'img/sharkie/idle/1.png',
        'img/sharkie/idle/2.png',
        'img/sharkie/idle/3.png',
        'img/sharkie/idle/4.png',
        'img/sharkie/idle/5.png',
        'img/sharkie/idle/6.png',
        'img/sharkie/idle/7.png',
        'img/sharkie/idle/8.png',
        'img/sharkie/idle/9.png',
        'img/sharkie/idle/10.png',
        'img/sharkie/idle/11.png',
        'img/sharkie/idle/12.png',
        'img/sharkie/idle/13.png',
        'img/sharkie/idle/14.png',
        'img/sharkie/idle/15.png',
        'img/sharkie/idle/16.png',
        'img/sharkie/idle/17.png',
        'img/sharkie/idle/18.png',
    ];
    images_idle_long = [
        'img/sharkie/idle_long/1.png',
        'img/sharkie/idle_long/2.png',
        'img/sharkie/idle_long/3.png',
        'img/sharkie/idle_long/4.png',
        'img/sharkie/idle_long/5.png',
        'img/sharkie/idle_long/6.png',
        'img/sharkie/idle_long/7.png',
        'img/sharkie/idle_long/8.png',
        'img/sharkie/idle_long/9.png',
        'img/sharkie/idle_long/10.png',
        'img/sharkie/idle_long/11.png',
        'img/sharkie/idle_long/12.png',
        'img/sharkie/idle_long/13.png',
        'img/sharkie/idle_long/14.png',
    ];
    images_idle_sleeping = [
        'img/sharkie/idle_long/11.png',
        'img/sharkie/idle_long/12.png',
        'img/sharkie/idle_long/13.png',
        'img/sharkie/idle_long/14.png',
    ];
    images_hurt = ['img/sharkie/hurt/1.png', 'img/sharkie/hurt/2.png', 'img/sharkie/hurt/3.png', 'img/sharkie/hurt/4.png', 'img/sharkie/hurt/5.png'];
    images_dead = [
        'img/sharkie/dead/1.png',
        'img/sharkie/dead/2.png',
        'img/sharkie/dead/3.png',
        'img/sharkie/dead/4.png',
        'img/sharkie/dead/5.png',
        'img/sharkie/dead/6.png',
        'img/sharkie/dead/7.png',
        'img/sharkie/dead/8.png',
        'img/sharkie/dead/9.png',
        'img/sharkie/dead/10.png',
        'img/sharkie/dead/11.png',
        'img/sharkie/dead/12.png',
    ];
    images_bubbling = [
        'img/sharkie/bubbling/1.png',
        'img/sharkie/bubbling/2.png',
        'img/sharkie/bubbling/3.png',
        'img/sharkie/bubbling/4.png',
        'img/sharkie/bubbling/5.png',
        'img/sharkie/bubbling/6.png',
        'img/sharkie/bubbling/7.png',
        'img/sharkie/bubbling/8.png',
    ];
    images_slapping = [
        'img/sharkie/attack/1.png',
        'img/sharkie/attack/2.png',
        'img/sharkie/attack/3.png',
        'img/sharkie/attack/4.png',
        'img/sharkie/attack/5.png',
        'img/sharkie/attack/6.png',
        'img/sharkie/attack/7.png',
        'img/sharkie/attack/8.png',
    ];

    constructor() {
        super();
        this.loadImage(this.images_swimming[0]);
        this.loadImages(this.images_idle_long);
        this.loadImages(this.images_idle_sleeping);
        this.loadImages(this.images_idle);
        this.loadImages(this.images_swimming);
        this.loadImages(this.images_hurt);
        this.loadImages(this.images_dead);
        this.loadImages(this.images_bubbling);
        this.loadImages(this.images_slapping);
        this.animate();
        this.setIdleTime();
        this.bubbleTime = new Date().getTime();
    }

    /**
     * animating sharkie
     */
    animate() {
        this.sharkieAnimation();
        this.sharkieMovement();
    }

    /**
     * moving sharkie
     */
    sharkieMovement() {
        setStoppableInterval(() => {
            pauseSharkieSwimAudio();
            this.barrierCollision();
            this.checkSwimmingRight();
            this.checkSwimmingLeft();
            this.checkSwimmingUp();
            this.checkSwimmingDown();
            this.camera_x = -this.x + 80;
        }, 1000 / 60);
    }

    /**
     * checking if sharkie swims to the right
     */
    checkSwimmingRight() {
        if (this.control.ArrowRight && this.x < this.level.levelEnd_x && !this.collisionBarrierLeft) {
            this.moveRight(this.speed);
            this.otherDirection = false;
            playSharkieSwimLeftRightAudio();
        }
    }

    /**
     * checking if sharkie swims to the left
     */
    checkSwimmingLeft() {
        if (this.control.ArrowLeft && this.x > -600 && !this.collisionBarrierRight) {
            this.moveLeft(this.speed);
            this.otherDirection = true;
            playSharkieSwimLeftRightAudio();
        }
    }

    /**
     * checking if sharkie swims up
     */
    checkSwimmingUp() {
        if (this.control.ArrowUp && this.y > -70 && !this.collisionBarrierBottom) {
            this.moveUp(this.speed);
            playSharkieSwimUpDownAudio();
        }
    }
    /**
     * checking if sharkie swims down
     */
    checkSwimmingDown() {
        if (this.control.ArrowDown && this.y < 250 && !this.collisionBarrierTop) {
            this.moveDown(this.speed);
            playSharkieSwimUpDownAudio();
        }
    }

    /**
     * animating sharkie for special events
     */
    sharkieAnimation() {
        setStoppableInterval(() => {
            if (this.isSwimming()) {
                this.swimAnimation();
            } else if (this.isDead()) {
                this.deadAnimation();
            } else if (this.isHurt()) {
                this.hurtAnimation();
            } else if (this.isIdleLong() && !this.isBubbling() && !this.isSlapping()) {
                this.longIdleAnimation();
            } else if (this.isBubbling()) {
                this.bubbleAnimation();
            } else if (this.isSlapping()) {
                this.slapAnimation();
            } else {
                this.idleAnimation();
            }
        }, 1000 / 10);
    }

    /**
     * checking barrier collision
     */
    barrierCollision() {
        if (this.collisionBarrier) {
            if (this.isCollidingBarrierRight(this.collisionBarrierObject)) {
                this.collisionBarrierRight = true;
            }
            if (this.isCollidingBarrierLeft(this.collisionBarrierObject)) {
                this.collisionBarrierLeft = true;
            }
            if (this.isCollidingBarrierTop(this.collisionBarrierObject)) {
                this.collisionBarrierTop = true;
            }
            if (this.isCollidingBarrierBottom(this.collisionBarrierObject)) {
                this.collisionBarrierBottom = true;
            }
        } else {
            this.settingCollisionBooleansFalse();
        }
    }

    /**
     * setting collision booleans to false
     */
    settingCollisionBooleansFalse() {
        this.collisionBarrierRight = false;
        this.collisionBarrierLeft = false;
        this.collisionBarrierTop = false;
        this.collisionBarrierBottom = false;
    }

    /**
     * setting idle time
     */
    setIdleTime() {
        setInterval(() => {
            this.idleTime++;
        }, 1000);
    }

    /**
     * setting long idle time
     * @returns
     */
    isIdleLong() {
        return this.idleTime >= 5;
    }

    /**
     * animating when sharkie is idle long
     */
    longIdleAnimation() {
        if (this.idleTime >= 6) {
            this.sleepAnimation();
        } else {
            this.playAnimation(this.images_idle_long);
        }
    }

    /**
     * animating when sharkie sleeps
     */
    sleepAnimation() {
        this.playAnimation(this.images_idle_sleeping);
        if (this.y < 250 && !this.collisionBarrierTop) {
            this.y += 1;
        }
    }

    /**
     * animating when sharkie is idle
     */
    idleAnimation() {
        this.playAnimation(this.images_idle);
    }

    /**
     * animating when sharkie swims
     */
    swimAnimation() {
        this.playAnimation(this.images_swimming);
        this.idleTime = 0;
    }

    /**
     * animating when sharkie is hurt
     */
    hurtAnimation() {
        this.playAnimation(this.images_hurt);
        this.idleTime = 0;
    }

    /**
     * animating when sharkie is dead
     */
    deadAnimation() {
        if (this.deadTime >= 10) {
            this.loadImage(this.images_dead[11]);
            stopGame();
            showGameOver();
            stopEndbossAudio();
        } else {
            this.playAnimation(this.images_dead);
        }
        this.y -= 5;
        this.idleTime = 0;
        this.deadTime++;
    }

    /**
     * animating when sharkie makes a bubble
     */
    bubbleAnimation() {
        this.playAnimation(this.images_bubbling);
        this.idleTime = 0;
    }

    /**
     * animating when sharkie is slapping
     */
    slapAnimation() {
        this.playAnimation(this.images_slapping);
        playSharkieSlapAudio();
    }

    /**
     * checking if sharkie is moved
     * @returns
     */
    isSwimming() {
        if (!this.isHurt()) {
            return keyboard.ArrowRight || keyboard.ArrowLeft || keyboard.ArrowUp || keyboard.ArrowDown;
        }
    }

    /**
     * setting bubbling time
     * @returns - true for 700ms
     */
    isBubbling() {
        let timeNow = new Date().getTime();
        let difference;
        if (keyboard.Space) {
            this.shotTime = new Date().getTime() + 700;
            this.currentImage = 0;
            this.idleTime = 0;
        }
        difference = this.shotTime - timeNow;
        return difference > 0;
    }

    /**
     * setting slap time
     * @returns - true for 1 second
     */
    isSlapping() {
        let timeNow = new Date().getTime();
        let difference;
        if (keyboard.KeyD) {
            this.slapTime = new Date().getTime() + 1000;
            this.currentImage = 0;
            this.idleTime = 0;
        }
        difference = this.slapTime - timeNow;
        return difference > 0;
    }

    /**
     * set bubble time that only every 1 second sharkie can make a bubble
     * @returns - true for 1 second
     */
    isBubbleTime() {
        let newTime = new Date().getTime();
        let difference = newTime - this.bubbleTime;
        return difference > 1000;
    }
}
