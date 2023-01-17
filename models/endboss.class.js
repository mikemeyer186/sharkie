class Endboss extends MoveableObject {
    x = 3520;
    y = -400;
    i = 0;
    height = 300;
    width = 300;
    speed = 1;
    endbossIntro;
    firstContact = false;
    deadTime = 0;
    attackTime;
    lastAttack;
    offset = {
        top: 170,
        bottom: 50,
        left: 50,
        right: 50,
    };
    images_spawning = [
        'img/enemys/endboss/intro/1.png',
        'img/enemys/endboss/intro/2.png',
        'img/enemys/endboss/intro/3.png',
        'img/enemys/endboss/intro/4.png',
        'img/enemys/endboss/intro/5.png',
        'img/enemys/endboss/intro/6.png',
        'img/enemys/endboss/intro/7.png',
        'img/enemys/endboss/intro/8.png',
        'img/enemys/endboss/intro/9.png',
        'img/enemys/endboss/intro/10.png',
    ];
    images_swimming = [
        'img/enemys/endboss/swim/swim_1.png',
        'img/enemys/endboss/swim/swim_2.png',
        'img/enemys/endboss/swim/swim_3.png',
        'img/enemys/endboss/swim/swim_4.png',
        'img/enemys/endboss/swim/swim_5.png',
        'img/enemys/endboss/swim/swim_6.png',
        'img/enemys/endboss/swim/swim_7.png',
        'img/enemys/endboss/swim/swim_8.png',
        'img/enemys/endboss/swim/swim_9.png',
        'img/enemys/endboss/swim/swim_10.png',
        'img/enemys/endboss/swim/swim_11.png',
        'img/enemys/endboss/swim/swim_12.png',
        'img/enemys/endboss/swim/swim_13.png',
    ];
    images_hurt = [
        'img/enemys/endboss/hurt/1.png',
        'img/enemys/endboss/hurt/2.png',
        'img/enemys/endboss/hurt/3.png',
        'img/enemys/endboss/hurt/4.png',
    ];
    images_attack = [
        'img/enemys/endboss/attack/1.png',
        'img/enemys/endboss/attack/2.png',
        'img/enemys/endboss/attack/3.png',
        'img/enemys/endboss/attack/4.png',
        'img/enemys/endboss/attack/5.png',
        'img/enemys/endboss/attack/6.png',
    ];
    images_dead = [
        'img/enemys/endboss/dead/1.png',
        'img/enemys/endboss/dead/2.png',
        'img/enemys/endboss/dead/3.png',
        'img/enemys/endboss/dead/4.png',
        'img/enemys/endboss/dead/5.png',
        'img/enemys/endboss/dead/6.png',
    ];

    constructor() {
        super();
        this.loadImage(this.images_swimming[0]);
        this.loadImages(this.images_spawning);
        this.loadImages(this.images_swimming);
        this.loadImages(this.images_hurt);
        this.loadImages(this.images_attack);
        this.loadImages(this.images_dead);
        this.animate();
        this.setAttackTime();
    }

    animate() {
        setStoppableInterval(() => {
            if (this.bossIntro()) {
                this.introAnimation();
            } else if (this.isHurt()) {
                this.hurtAnimation();
            } else if (this.bossLife == 0) {
                this.deadAnimation();
            } else if (this.isAttacking()) {
                this.attackAnimation();
                this.moveLeft(this.speed + 15);
            } else {
                this.swimAnimation();
            }
        }, 1000 / 8);
    }

    bossIntro() {
        if (this.endbossIntro && !this.firstContact) {
            this.i = 0;
            this.y = 40;
            this.firstContact = true;
            this.currentImage = 0;
            this.attackTime = new Date().getTime() + 1000;
            this.down = true;
            this.movingAnimation();
            playEndbossAudio();
            stopBackgroundAudio();
        }
        this.i++;
        return this.i <= 10;
    }

    swimAnimation() {
        this.playAnimation(this.images_swimming);
    }

    movingAnimation() {
        setStoppableInterval(() => {
            if (this.y + this.height == 500) {
                this.up = true;
                this.down = false;
            } else if (this.y == -40) {
                this.up = false;
                this.down = true;
            }
            this.moveUpAndDown(this.speed);
        }, 1000 / 60);
    }

    introAnimation() {
        this.playAnimation(this.images_spawning);
    }

    hurtAnimation() {
        playEndbossHurtAudio();
        this.playAnimation(this.images_hurt);
    }

    deadAnimation() {
        if (this.deadTime >= 5) {
            this.loadImage(this.images_dead[5]);
            showWinningScreen();
            stopGame();
            stopEndbossAudio();
        } else {
            playEndbossDeadAudio();
            this.playAnimation(this.images_dead);
        }
        this.y -= 3;
        this.deadTime++;
    }

    attackAnimation() {
        this.playAnimation(this.images_attack);
        playEndbossAttackAudio();
    }

    setAttackTime() {
        setStoppableInterval(() => {
            let time1 = new Date().getTime();
            if (this.attackTime <= time1) {
                this.lastAttack = new Date().getTime();
                this.attackTime = new Date().getTime() + 5000;
            }
        }, 1000);
    }

    isAttacking() {
        let timePassed = new Date().getTime() - this.lastAttack;
        timePassed = timePassed / 1000;
        return timePassed < 2;
    }
}
