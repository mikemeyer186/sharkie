class Light extends MoveableObject {
    x = 400;
    y = 0;
    height = 450;
    width = 720;

    constructor() {
        super();
        this.loadImage('../img/background/light/complete.png');
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.05;
        }, 1000 / 60);
    }
}
