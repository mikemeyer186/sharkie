class JellyFish extends MoveableObject {
    height = 70;
    width = 70;
    speed = 0.6;
    offset = {
        top: 30,
        bottom: 30,
        left: 25,
        right: 25,
    };
    images_swimming = [
        'img/enemys/jelly-fish/swim/pink_1.png',
        'img/enemys/jelly-fish/swim/pink_2.png',
        'img/enemys/jelly-fish/swim/pink_3.png',
        'img/enemys/jelly-fish/swim/pink_4.png',
    ];

    constructor(x) {
        super();
        this.x = x;
        this.y = 40 + Math.random() * 410;
        this.loadImage(this.images_swimming[0]);
        this.loadImages(this.images_swimming);
        this.animate();
        this.down = true;
    }

    animate() {
        this.swimAnimation();
        this.moveAnimation();
    }

    swimAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.images_swimming);
        }, 1000 / 10);
    }

    moveAnimation() {
        setStoppableInterval(() => {
            if (this.y + this.height >= 450) {
                this.up = true;
                this.down = false;
            } else if (this.y <= 50) {
                this.up = false;
                this.down = true;
            }
            this.moveUpAndDown(this.speed);
        }, 1000 / 60);
    }

    deadAnimation() {
        if (this.up) {
            this.up = false;
            this.down = true;
        } else {
            this.up = true;
            this.down = false;
        }
    }
}
