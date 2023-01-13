class CoinBar extends StatusBar {
    x = 260;

    images = [
        'img/statusbar/coins/coin_0.png',
        'img/statusbar/coins/coin_20.png',
        'img/statusbar/coins/coin_40.png',
        'img/statusbar/coins/coin_60.png',
        'img/statusbar/coins/coin_80.png',
        'img/statusbar/coins/coin_100.png',
    ];

    constructor() {
        super();
        this.loadImage('../img/statusbar/coins/coin_0.png');
        this.loadImages(this.images);
        this.setStatusBar(0);
    }
}
