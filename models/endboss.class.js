class Endboss extends MoveableObject {
    x = 3600;
    y = 40;
    height = 300;
    width = 300;
    speed = 0;
    endbossIntro;
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

    constructor() {
        super();
        this.loadImage('../img/enemys/endboss/swim/1.png');
        this.animate();
    }

    animate() {
        let i = 0;

        setInterval(() => {
            if (endbossIntro) {
                i = 0;
            }

            if (i < 10) {
                this.imageCache = [];
                this.loadImages(this.images_spawning);
                this.playAnimation(this.images_spawning);
            } else {
                this.imageCache = [];
                this.loadImages(this.images_swimming);
                this.playAnimation(this.images_swimming);
            }
            i++;
        }, 1000 / 8);
    }
}
