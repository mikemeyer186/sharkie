class LifeBarBoss extends StatusBar {
    x = 540;
    y = -400;
    width = 150;
    height = 40;
    endbossArea = false;

    images = [
        '../img/statusbar/life-boss/0.png',
        '../img/statusbar/life-boss/20.png',
        '../img/statusbar/life-boss/40.png',
        '../img/statusbar/life-boss/60.png',
        '../img/statusbar/life-boss/80.png',
        '../img/statusbar/life-boss/100.png',
    ];

    constructor() {
        super();
        this.loadImage('../img/statusbar/life-boss/100.png');
        this.loadImages(this.images);
        this.setStatusBar(100);
        this.showLifeBar();
    }

    showLifeBar() {
        setInterval(() => {
            if (this.endbossArea) {
                this.y = 40;
            }
        }, 100);
    }
}
