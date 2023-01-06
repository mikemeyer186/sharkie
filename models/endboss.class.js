class Endboss extends MoveableObject {
    x = 1800;
    y = -400;
    i = 0;
    height = 300;
    width = 300;
    speed = 0;
    endbossIntro;
    firstContact = false;
    deadTime = 0;
    attackTime;
    lastAttack;
    offset = {
        top: 150,
        bottom: 50,
        left: 20,
        right: 20,
    };
    images_spawning = [
        '../img/enemys/endboss/intro/1.png',
        '../img/enemys/endboss/intro/2.png',
        '../img/enemys/endboss/intro/3.png',
        '../img/enemys/endboss/intro/4.png',
        '../img/enemys/endboss/intro/5.png',
        '../img/enemys/endboss/intro/6.png',
        '../img/enemys/endboss/intro/7.png',
        '../img/enemys/endboss/intro/8.png',
        '../img/enemys/endboss/intro/9.png',
        '../img/enemys/endboss/intro/10.png',
    ];
    images_swimming = [
        '../img/enemys/endboss/swim/1.png',
        '../img/enemys/endboss/swim/2.png',
        '../img/enemys/endboss/swim/3.png',
        '../img/enemys/endboss/swim/4.png',
        '../img/enemys/endboss/swim/5.png',
        '../img/enemys/endboss/swim/6.png',
        '../img/enemys/endboss/swim/7.png',
        '../img/enemys/endboss/swim/8.png',
        '../img/enemys/endboss/swim/9.png',
        '../img/enemys/endboss/swim/10.png',
        '../img/enemys/endboss/swim/11.png',
        '../img/enemys/endboss/swim/12.png',
        '../img/enemys/endboss/swim/13.png',
    ];
    images_hurt = [
        '../img/enemys/endboss/hurt/1.png',
        '../img/enemys/endboss/hurt/2.png',
        '../img/enemys/endboss/hurt/3.png',
        '../img/enemys/endboss/hurt/4.png',
    ];
    images_attack = [
        '../img/enemys/endboss/attack/1.png',
        '../img/enemys/endboss/attack/2.png',
        '../img/enemys/endboss/attack/3.png',
        '../img/enemys/endboss/attack/4.png',
        '../img/enemys/endboss/attack/5.png',
        '../img/enemys/endboss/attack/6.png',
    ];
    images_dead = [
        '../img/enemys/endboss/dead/1.png',
        '../img/enemys/endboss/dead/2.png',
        '../img/enemys/endboss/dead/3.png',
        '../img/enemys/endboss/dead/4.png',
        '../img/enemys/endboss/dead/5.png',
        '../img/enemys/endboss/dead/6.png',
    ];

    constructor() {
        super();
        this.loadImage('../img/enemys/endboss/swim/1.png');
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
            this.attackTime = new Date().getTime() + 5000;
        }
        this.i++;
        return this.i <= 10;
    }

    swimAnimation() {
        this.playAnimation(this.images_swimming);
    }

    introAnimation() {
        this.playAnimation(this.images_spawning);
    }

    hurtAnimation() {
        this.playAnimation(this.images_hurt);
    }

    deadAnimation() {
        if (this.deadTime >= 5) {
            this.loadImage(this.images_dead[5]);
        } else {
            this.playAnimation(this.images_dead);
        }
        this.y -= 3;
        this.deadTime++;
    }

    attackAnimation() {
        this.playAnimation(this.images_attack);
    }

    setAttackTime() {
        setInterval(() => {
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
