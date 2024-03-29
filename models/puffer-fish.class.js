class PufferFish extends MoveableObject {
    height = 70;
    width = 70;
    speed = 0.2;
    offset = {
        top: 25,
        bottom: 35,
        left: 25,
        right: 25,
    };
    images_swimming = [
        'img/enemys/puffer-fish/swim/green_swim1.png',
        'img/enemys/puffer-fish/swim/green_swim2.png',
        'img/enemys/puffer-fish/swim/green_swim3.png',
        'img/enemys/puffer-fish/swim/green_swim4.png',
        'img/enemys/puffer-fish/swim/green_swim5.png',
    ];
    images_dead = ['img/enemys/puffer-fish/dead/1.png'];

    constructor(x) {
        super();
        this.loadImage(this.images_swimming[0]);
        this.loadImages(this.images_swimming);
        this.x = x;
        this.y = 40 + Math.random() * 350;
        this.speed = this.speed + Math.random() * 0.5;
        this.animate();
    }

    /**
     * animating puffer fisches
     */
    animate() {
        this.swimAnimation();
        this.moveAnimation();
    }

    /**
     * swimming animation
     */
    swimAnimation() {
        setStoppableInterval(() => {
            this.playAnimation(this.images_swimming);
        }, 1000 / 10);
    }

    /**
     * moving animation
     */
    moveAnimation() {
        setStoppableInterval(() => {
            this.moveLeft(this.speed);
        }, 1000 / 60);
    }

    /**
     * animation when puffer fishes are dead
     * @param {boolean} otherDirection - direction of sharkie
     */
    deadAnimation(otherDirection) {
        setStoppableInterval(() => {
            this.img.src = this.images_dead[0];
            this.speed = 0;
            this.moveDeadFish(otherDirection);
        }, 1);
    }

    /**
     * moving dead fish out of canvas
     * @param {boolean} otherDirection - direction of sharkie
     */
    moveDeadFish(otherDirection) {
        if (!otherDirection) {
            this.moveRight(1);
        } else {
            this.moveRight(-1);
        }
        this.moveUp(0.5);
    }
}
