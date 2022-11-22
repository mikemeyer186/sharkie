class Sharkie extends MoveableObject {
    x = 80;
    y = 70;
    control;
    camera_x;
    speed = 3;
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
            if (keyboard.ArrowRight || keyboard.ArrowLeft) {
                let m = this.currentImage % this.images_swimming.length;
                this.img = this.imageCache[m];
                this.currentImage++;
            }
        }, 1000 / 10);

        setInterval(() => {
            if (keyboard.ArrowRight) {
                this.otherDirection = false;
                this.x += this.speed;
            }
            if (keyboard.ArrowLeft) {
                this.otherDirection = true;
                this.x -= this.speed;
            }
            if (keyboard.ArrowUp) {
                this.y -= this.speed;
            }
            if (keyboard.ArrowDown) {
                this.y += this.speed;
            }
            this.camera_x = -this.x + 80;
        }, 1000 / 60);
    }
}
