class LifeBar extends StatusBar {
    images = [
        'img/statusbar/life/life_0.png',
        'img/statusbar/life/life_20.png',
        'img/statusbar/life/life_40.png',
        'img/statusbar/life/life_60.png',
        'img/statusbar/life/life_80.png',
        'img/statusbar/life/life_100.png',
    ];

    constructor() {
        super();
        this.loadImage(this.images[5]);
        this.loadImages(this.images);
        this.setStatusBar(100);
    }
}
