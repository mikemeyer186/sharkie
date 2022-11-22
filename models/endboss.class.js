class Endboss extends MoveableObject {
    x = 3600;
    y = 40;
    height = 300;
    width = 300;
    speed = 0;
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

    constructor() {
        super();
        this.loadImage('../img/enemys/endboss/swim/1.png');
        this.loadImages(this.images_swimming);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.images_swimming);
        }, 1000 / 8);
    }
}
