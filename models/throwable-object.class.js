class ThrowableObject extends MoveableObject {
    width = 40;
    height = 40;
    speed = 3;
    delayTime = 600;
    delayY = 1000;
    image = 'img/sharkie/bubbling/poison_bubble.png';

    constructor(x, y) {
        super();
        this.x = x + 180;
        this.y = y + 140 + this.delayY;
        this.loadImage(this.image);
    }

    /**
     * animating poison bubble
     */
    poisonBubbling() {
        playPoisonBubbleAudio();
        this.checkdirection();
        this.moveBubble();
    }

    /**
     * checking direction of sharkie
     */
    checkdirection() {
        if (world.sharkie.otherDirection) {
            this.speed = -this.speed;
            this.x = this.x - 150;
        }
    }

    /**
     * moving poison bubble
     */
    moveBubble() {
        setTimeout(() => {
            setStoppableInterval(() => {
                this.moveRight(this.speed);
            }, 1000 / 60);
            this.y = this.y - this.delayY;
        }, this.delayTime);
    }
}
