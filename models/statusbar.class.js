class StatusBar extends DrawableObject {
    images_life = [
        '../img/statusbar/life/life_0.png',
        '../img/statusbar/life/life_20.png',
        '../img/statusbar/life/life_40.png',
        '../img/statusbar/life/life_60.png',
        '../img/statusbar/life/life_80.png',
        '../img/statusbar/life/life_100.png',
    ];

    lifeStatus = 100;

    constructor() {
        super();
        this.loadImages(this.images_life);
        this.x = 100;
        this.y = 100;
        this.setLifeStatus(100);
    }

    setLifeStatus(percentage) {
        let index = this.returnImgIndex(percentage);
        this.img = this.images_life[index]; /// Wo ist der Fehler??? Bild kann nicht geladen werden!
    }

    returnImgIndex(percentage) {
        if (percentage <= 100 && percentage > 81) {
            return 5;
        } else if (percentage <= 80 && percentage > 61) {
            return 4;
        } else if (percentage <= 60 && percentage > 41) {
            return 3;
        } else if (percentage <= 40 && percentage > 21) {
            return 2;
        } else if (percentage <= 20 && percentage > 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
