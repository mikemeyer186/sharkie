class PufferFish extends MoveableObject {
    x = 650;
    height = 70;
    width = 70;
    speed = 0.2;
    images_swimming = [
        '../img/enemys/puffer-fish/swim/green_swim1.png',
        '../img/enemys/puffer-fish/swim/green_swim2.png',
        '../img/enemys/puffer-fish/swim/green_swim3.png',
        '../img/enemys/puffer-fish/swim/green_swim4.png',
        '../img/enemys/puffer-fish/swim/green_swim5.png',
    ];

    constructor() {
        super();
        this.loadImage('../img/enemys/puffer-fish/swim/green_swim1.png');
        this.loadImages(this.images_swimming);
        this.y = 0 + Math.random() * 410;
        this.speed = 0.2 + Math.random() * 0.5;
        this.animate();
        this.moveLeft(this.speed);
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.images_swimming);
        }, 1000 / 5);
    }
}
