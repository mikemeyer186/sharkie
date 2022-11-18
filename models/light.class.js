class Light extends MoveableObject {
    x = 400;
    y = 0;
    height = 450;
    width = 720;

    constructor() {
        super();
        this.loadImage('../img/background/light/complete.png');
    }
}
