class ThrowableObject extends MoveableObject {
    width = 40;
    height = 40;
    speed = 1;
    image = '../img/sharkie/bubbling/poison_bubble.png';

    constructor(x, y) {
        super();
        this.x = x + 180;
        this.y = y + 140;
        this.loadImage(this.image);
    }

    poisonBubbling() {
        setStoppableInterval(() => {
            this.moveRight(this.speed);
        }, 1000 / 60);
    }
}
