class Sharkie extends MoveableObject {
    x = 80;
    y = 70;
    control;
    camera_x;
    level;
    speed = 3;
    audio_swim_up_down = new Audio('../audio/swim_up_down.mp3');
    audio_swim_left_right = new Audio('../audio/swim_left_right.mp3');
    idleTime = 0;
    offset = {
        top: 120,
        bottom: 60,
        left: 60,
        right: 40,
    };
    images_swimming = [
        '../img/sharkie/swim/1.png',
        '../img/sharkie/swim/2.png',
        '../img/sharkie/swim/3.png',
        '../img/sharkie/swim/4.png',
        '../img/sharkie/swim/5.png',
        '../img/sharkie/swim/6.png',
    ];
    images_idle = [
        '../img/sharkie/idle/1.png',
        '../img/sharkie/idle/2.png',
        '../img/sharkie/idle/3.png',
        '../img/sharkie/idle/4.png',
        '../img/sharkie/idle/5.png',
        '../img/sharkie/idle/6.png',
        '../img/sharkie/idle/7.png',
        '../img/sharkie/idle/8.png',
        '../img/sharkie/idle/9.png',
        '../img/sharkie/idle/10.png',
        '../img/sharkie/idle/11.png',
        '../img/sharkie/idle/12.png',
        '../img/sharkie/idle/13.png',
        '../img/sharkie/idle/14.png',
        '../img/sharkie/idle/15.png',
        '../img/sharkie/idle/16.png',
        '../img/sharkie/idle/17.png',
        '../img/sharkie/idle/18.png',
    ];
    images_idle_long = [
        '../img/sharkie/idle_long/1.png',
        '../img/sharkie/idle_long/2.png',
        '../img/sharkie/idle_long/3.png',
        '../img/sharkie/idle_long/4.png',
        '../img/sharkie/idle_long/5.png',
        '../img/sharkie/idle_long/6.png',
        '../img/sharkie/idle_long/7.png',
        '../img/sharkie/idle_long/8.png',
        '../img/sharkie/idle_long/9.png',
        '../img/sharkie/idle_long/10.png',
        '../img/sharkie/idle_long/11.png',
        '../img/sharkie/idle_long/12.png',
        '../img/sharkie/idle_long/13.png',
        '../img/sharkie/idle_long/14.png',
    ];
    images_idle_sleeping = [
        '../img/sharkie/idle_long/11.png',
        '../img/sharkie/idle_long/12.png',
        '../img/sharkie/idle_long/13.png',
        '../img/sharkie/idle_long/14.png',
    ];
    images_hurt = [
        '../img/sharkie/hurt/1.png',
        '../img/sharkie/hurt/2.png',
        '../img/sharkie/hurt/3.png',
        '../img/sharkie/hurt/4.png',
        '../img/sharkie/hurt/5.png',
    ];
    images_dead = [
        '../img/sharkie/dead/1.png',
        '../img/sharkie/dead/2.png',
        '../img/sharkie/dead/3.png',
        '../img/sharkie/dead/4.png',
        '../img/sharkie/dead/5.png',
        '../img/sharkie/dead/6.png',
        '../img/sharkie/dead/7.png',
        '../img/sharkie/dead/8.png',
        '../img/sharkie/dead/9.png',
        '../img/sharkie/dead/10.png',
        '../img/sharkie/dead/11.png',
        '../img/sharkie/dead/12.png',
    ];

    constructor() {
        super();
        this.audio_swim_left_right.volume = 0.2;
        this.loadImage('../img/sharkie/swim/1.png');
        this.animate();
        this.setIdleTime();
    }

    animate() {
        setInterval(() => {
            if (this.isSwimming()) {
                this.swimAnimation();
            } else if (this.isDead()) {
                this.deadAnimation();
            } else if (this.isHurt()) {
                this.hurtAnimation();
            } else if (this.isIdleLong()) {
                this.longIdleAnimation();
            } else {
                this.idleAnimation();
            }
        }, 1000 / 10);

        setInterval(() => {
            this.audioPause();

            if (keyboard.ArrowRight && this.x < this.level.levelEnd_x) {
                this.moveRight(this.speed);
                this.otherDirection = false;
                this.audio_swim_left_right.play();
            }
            if (keyboard.ArrowLeft && this.x > -600) {
                this.moveLeft(this.speed);
                this.otherDirection = true;
                this.audio_swim_left_right.play();
            }
            if (keyboard.ArrowUp && this.y > -110) {
                this.moveUp(this.speed);
                this.audio_swim_up_down.play();
            }
            if (keyboard.ArrowDown && this.y < 250) {
                this.moveDown(this.speed);
                this.audio_swim_up_down.play();
            }
            this.camera_x = -this.x + 80;
        }, 1000 / 60);
    }

    audioPause() {
        this.audio_swim_up_down.pause();
        this.audio_swim_left_right.pause();
    }

    setIdleTime() {
        setInterval(() => {
            this.idleTime++;
        }, 1000);
    }

    isIdleLong() {
        //console.log(this.idleTime);
        return this.idleTime >= 5;
    }

    longIdleAnimation() {
        this.imageCache = [];
        if (this.idleTime >= 6) {
            this.sleepAnimation();
        } else {
            this.loadImages(this.images_idle_long);
            this.playAnimation(this.images_idle_long);
        }
    }

    sleepAnimation() {
        this.imageCache = [];
        this.loadImages(this.images_idle_sleeping);
        this.playAnimation(this.images_idle_sleeping);
        if (this.y < 250) {
            this.y += 1;
        }
    }

    idleAnimation() {
        this.imageCache = [];
        this.loadImages(this.images_idle);
        this.playAnimation(this.images_idle);
    }

    swimAnimation() {
        this.imageCache = [];
        this.loadImages(this.images_swimming);
        this.playAnimation(this.images_swimming);
        this.idleTime = 0;
    }

    hurtAnimation() {
        this.imageCache = [];
        this.loadImages(this.images_hurt);
        this.playAnimation(this.images_hurt);
        this.idleTime = 0;
    }

    deadAnimation() {
        this.imageCache = [];
        this.loadImages(this.images_dead);
        this.playAnimation(this.images_dead);
        this.idleTime = 0;
        this.y -= 5;
    }

    isSwimming() {
        return keyboard.ArrowRight || keyboard.ArrowLeft || keyboard.ArrowUp || keyboard.ArrowDown;
    }
}
