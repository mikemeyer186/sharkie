class Level {
    enemies;
    light;
    background;
    poison;
    levelEnd_x = 3900;

    constructor(light, enemies, background, poison) {
        this.light = light;
        this.enemies = enemies;
        this.background = background;
        this.poison = poison;
    }
}
