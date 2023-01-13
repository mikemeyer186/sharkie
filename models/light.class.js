class Light extends MoveableObject {
    x = 400;
    y = 0;
    height = 450;
    width = 720;
    speed = 0.05;

    constructor() {
        super();
        this.loadImage('img/background/light/complete.png');
        this.moveLeft(this.speed);
    }
}
