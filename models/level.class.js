class Level {
    enemies;
    background;
    poison;
    coins;
    endboss;
    barriers;
    levelEnd_x = 3900;

    constructor(enemies, background, poison, coins, endboss, barriers) {
        this.enemies = enemies;
        this.background = background;
        this.poison = poison;
        this.coins = coins;
        this.endboss = endboss;
        this.barriers = barriers;
    }
}
