let level1;

function startLevel1() {
    level1 = new Level(
        new Light(),
        [new PufferFish(), new PufferFish(), new PufferFish(), new Endboss()],
        [
            new BackgroundObjects('../img/background/water/light2.png', -720),
            new BackgroundObjects('../img/background/fond_1/light2.png', -720),
            new BackgroundObjects('../img/background/fond_2/light2.png', -720),
            new BackgroundObjects('../img/background/floor/light2.png', -720),
            new BackgroundObjects('../img/background/water/light1.png', 0),
            new BackgroundObjects('../img/background/fond_1/light1.png', 0),
            new BackgroundObjects('../img/background/fond_2/light1.png', 0),
            new BackgroundObjects('../img/background/floor/light1.png', 0),
            new BackgroundObjects('../img/background/water/light2.png', 720),
            new BackgroundObjects('../img/background/fond_1/light2.png', 720),
            new BackgroundObjects('../img/background/fond_2/light2.png', 720),
            new BackgroundObjects('../img/background/floor/light2.png', 720),
            new BackgroundObjects('../img/background/water/light1.png', 720 * 2),
            new BackgroundObjects('../img/background/fond_1/light1.png', 720 * 2),
            new BackgroundObjects('../img/background/fond_2/light1.png', 720 * 2),
            new BackgroundObjects('../img/background/floor/light1.png', 720 * 2),
            new BackgroundObjects('../img/background/water/light2.png', 720 * 3),
            new BackgroundObjects('../img/background/fond_1/light2.png', 720 * 3),
            new BackgroundObjects('../img/background/fond_2/light2.png', 720 * 3),
            new BackgroundObjects('../img/background/floor/light2.png', 720 * 3),
            new BackgroundObjects('../img/background/water/light1.png', 720 * 4),
            new BackgroundObjects('../img/background/fond_1/light1.png', 720 * 4),
            new BackgroundObjects('../img/background/fond_2/light1.png', 720 * 4),
            new BackgroundObjects('../img/background/floor/light1.png', 720 * 4),
            new BackgroundObjects('../img/background/water/light2.png', 720 * 5),
            new BackgroundObjects('../img/background/fond_1/light2.png', 720 * 5),
            new BackgroundObjects('../img/background/fond_2/light2.png', 720 * 5),
            new BackgroundObjects('../img/background/floor/light2.png', 720 * 5),
            new BackgroundObjects('../img/background/water/light1.png', 720 * 6),
            new BackgroundObjects('../img/background/fond_1/light1.png', 720 * 6),
            new BackgroundObjects('../img/background/fond_2/light1.png', 720 * 6),
            new BackgroundObjects('../img/background/floor/light1.png', 720 * 6),
        ],
        [new Poison(-360, 380), new Poison(300, 380), new Poison(500, 380), new Poison(700, 380), new Poison(1000, 380), new Poison(1200, 380)],
        [
            new Coin(-420, 400),
            new Coin(-395, 365),
            new Coin(-350, 345),
            new Coin(-305, 365),
            new Coin(-280, 400),
            new Coin(400, 200),
            new Coin(700, 50),
            new Coin(1000, 200),
            new Coin(1300, 400),
            new Coin(1600, 70),
        ]
    );
}
