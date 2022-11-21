class PufferFish extends MoveableObject {
    x = 650;
    height = 70;
    width = 70;
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
        this.animate();
    }

    animate() {
        setInterval(() => {
            let m = this.currentImage % this.images_swimming.length;
            this.img = this.imageCache[m];
            this.currentImage++;
        }, 1000 / 5);
    }
}
