class Sharkie extends MoveableObject {
    images_swimming = [
        '../img/sharkie/swim/1.png',
        '../img/sharkie/swim/2.png',
        '../img/sharkie/swim/3.png',
        '../img/sharkie/swim/4.png',
        '../img/sharkie/swim/5.png',
        '../img/sharkie/swim/6.png',
    ];

    constructor() {
        super();
        this.loadImage('../img/sharkie/swim/1.png');
        this.loadImages(this.images_swimming);
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
