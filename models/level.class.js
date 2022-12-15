class Level {
    enemies;
    light;
    background;
    poison;
    coins;
    endboss;
    levelEnd_x = 3900;

    constructor(light, enemies, background, poison, coins, endboss) {
        this.light = light;
        this.enemies = enemies;
        this.background = background;
        this.poison = poison;
        this.coins = coins;
        this.endboss = endboss;
    }
}
