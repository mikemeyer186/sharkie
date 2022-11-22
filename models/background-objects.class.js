class BackgroundObjects extends MoveableObject {
    x = 0;
    y = 0;
    width = 720;
    height = 480;

    constructor(path, x) {
        super();
        this.loadImage(path);
        this.x = x;
    }
}
