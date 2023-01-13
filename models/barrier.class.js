class Barrier extends MoveableObject {
    offset = {
        top: 10,
        bottom: 10,
        left: 50,
        right: 50,
    };
    images_barrier = ['../img/background/barrier/1.png', '../img/background/barrier/2.png', '../img/background/barrier/3.png'];

    constructor(x, y, width, height, style) {
        super();
        this.loadImage(this.images_barrier[style]);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
