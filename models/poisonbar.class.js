class PoisonBar extends StatusBar {
    x = 490;
    images = [
        '../img/statusbar/poison/poison_0.png',
        '../img/statusbar/poison/poison_20.png',
        '../img/statusbar/poison/poison_40.png',
        '../img/statusbar/poison/poison_60.png',
        '../img/statusbar/poison/poison_80.png',
        '../img/statusbar/poison/poison_100.png',
    ];

    constructor() {
        super();
        this.loadImage('../img/statusbar/poison/poison_0.png');
        this.loadImages(this.images);
        this.setStatusBar(0);
    }
}
