class Coin extends CollectableObjects {
    width = 40;
    height = 40;
    offset = {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
    };

    coins = [
        '../img/collectables/coins/1.png',
        '../img/collectables/coins/2.png',
        '../img/collectables/coins/3.png',
        '../img/collectables/coins/4.png',
    ];

    constructor(x, y) {
        super();
        this.loadImage(this.coins[0]);
        this.loadImages(this.coins);
        this.x = x;
        this.y = y;
        this.animateCollectables(this.coins);
    }
}
