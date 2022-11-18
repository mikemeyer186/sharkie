class Water extends MoveableObject {
    x = 0;
    y = 0;
    height = 480;
    width = 720;

    constructor() {
        super();
        this.loadImage('../img/background/water/light2.png');
    }
}
