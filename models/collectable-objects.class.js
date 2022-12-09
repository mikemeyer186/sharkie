class CollectableObjects extends MoveableObject {
    x = 100;
    y = 380;
    width = 60;
    height = 60;

    poison = [
        '../img/collectables/poison/1.png',
        '../img/collectables/poison/2.png',
        '../img/collectables/poison/3.png',
        '../img/collectables/poison/4.png',
        '../img/collectables/poison/5.png',
        '../img/collectables/poison/6.png',
        '../img/collectables/poison/7.png',
        '../img/collectables/poison/8.png',
    ];

    constructor(x) {
        super();
        this.loadImage(this.poison[0]);
        this.loadImages(this.poison);
        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.poison);
        }, 1000 / 10);
    }
}
