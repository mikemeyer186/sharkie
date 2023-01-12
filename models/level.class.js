class Level {
    enemies;
    light;
    background;
    poison;
    coins;
    endboss;
    barrier;
    levelEnd_x = 3900;

    constructor(light, enemies, background, poison, coins, endboss, barrier) {
        this.light = light;
        this.enemies = enemies;
        this.background = background;
        this.poison = poison;
        this.coins = coins;
        this.endboss = endboss;
        this.barrier = barrier;
    }
}
