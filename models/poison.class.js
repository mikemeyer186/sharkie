class Poison extends CollectableObjects {
    width = 60;
    height = 60;
    offset = {
        top: 30,
        bottom: 0,
        left: 30,
        right: 10,
    };

    poison = [
        'img/collectables/poison/1.png',
        'img/collectables/poison/2.png',
        'img/collectables/poison/3.png',
        'img/collectables/poison/4.png',
        'img/collectables/poison/5.png',
        'img/collectables/poison/6.png',
        'img/collectables/poison/7.png',
        'img/collectables/poison/8.png',
    ];

    constructor(x, y) {
        super();
        this.loadImage(this.poison[0]);
        this.loadImages(this.poison);
        this.x = x;
        this.y = y;
        this.animateCollectables(this.poison);
    }
}
