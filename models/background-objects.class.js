class BackgroundObjects extends MoveableObject {
    x = 0;
    y = 0;
    width = 720;
    height = 480;
    speed = 1;
    layer;

    constructor(path, x, layer) {
        super();
        this.loadImage(path);
        this.x = x;
        this.layer = layer;
    }
}
