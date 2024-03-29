class BarrierBig extends MoveableObject {
    offset = {
        top: 50,
        bottom: 10,
        left: 50,
        right: 50,
    };
    images_barrier = ['img/background/barrier/2.png'];

    constructor(x, y, width, height) {
        super();
        this.loadImage(this.images_barrier[0]);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
