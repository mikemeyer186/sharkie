class PufferFish extends MoveableObject {
    height = 70;
    width = 70;
    speed = 0.2;
    offset = {
        top: 5,
        bottom: 25,
        left: 0,
        right: 5,
    };
    images_swimming = [
        '../img/enemys/puffer-fish/swim/green_swim1.png',
        '../img/enemys/puffer-fish/swim/green_swim2.png',
        '../img/enemys/puffer-fish/swim/green_swim3.png',
        '../img/enemys/puffer-fish/swim/green_swim4.png',
        '../img/enemys/puffer-fish/swim/green_swim5.png',
    ];

    constructor(x) {
        super();
        this.loadImage('../img/enemys/puffer-fish/swim/green_swim1.png');
        this.loadImages(this.images_swimming);
        this.x = x;
        this.y = 40 + Math.random() * 410;
        this.speed = 0.2 + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.images_swimming);
        }, 1000 / 5);

        setStoppableInterval(() => {
            this.moveLeft(this.speed);
        }, 1000 / 60);
    }
}
