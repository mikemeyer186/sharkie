class Floor extends MoveableObject {
    x = 0;
    y = 180;
    height = 300;
    width = 720;

    constructor() {
        super();
        this.loadImage('../img/background/floor/light1.png');
    }
}
