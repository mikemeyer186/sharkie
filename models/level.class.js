class Level {
    enemies;
    light;
    background;
    poison;
    coins;
    levelEnd_x = 3900;

    constructor(light, enemies, background, poison, coins) {
        this.light = light;
        this.enemies = enemies;
        this.background = background;
        this.poison = poison;
        this.coins = coins;
    }
}
