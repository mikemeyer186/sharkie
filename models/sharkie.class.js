class Sharkie extends MoveableObject {
    x = 80;
    y = 70;
    control;
    camera_x;
    level;
    speed = 3;
    audio_swim_up_down = new Audio('../audio/swim_up_down.mp3');
    audio_swim_left_right = new Audio('../audio/swim_left_right.mp3');
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
        this.audio_swim_left_right.volume = 0.2;
        this.loadImage('../img/sharkie/swim/1.png');
        this.loadImages(this.images_swimming);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (keyboard.ArrowRight || keyboard.ArrowLeft) {
                this.playAnimation(this.images_swimming);
            }
        }, 1000 / 10);

        setInterval(() => {
            this.audioPause();

            if (keyboard.ArrowRight && this.x < this.level.levelEnd_x) {
                this.moveRight(this.speed);
                this.otherDirection = false;
                this.audio_swim_left_right.play();
            }
            if (keyboard.ArrowLeft && this.x > -600) {
                this.moveLeft(this.speed);
                this.otherDirection = true;
                this.audio_swim_left_right.play();
            }
            if (keyboard.ArrowUp && this.y > -110) {
                this.moveUp(this.speed);
                this.audio_swim_up_down.play();
            }
            if (keyboard.ArrowDown && this.y < 250) {
                this.moveDown(this.speed);
                this.audio_swim_up_down.play();
            }
            this.camera_x = -this.x + 80;
        }, 1000 / 60);
    }

    audioPause() {
        this.audio_swim_up_down.pause();
        this.audio_swim_left_right.pause();
    }
}
