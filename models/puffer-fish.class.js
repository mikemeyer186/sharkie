class PufferFish extends MoveableObject {
    constructor() {
        super();
        this.loadImage('../img/enemys/puffer-fish/swim/green_swim1.png');

        this.x = 650;
        this.y = 0 + Math.random() * 410;
        this.height = 70;
        this.width = 70;
    }
}
