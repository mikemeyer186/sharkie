class Level {
    enemies;
    light;
    background;
    levelEnd_x = 3900;

    constructor(light, enemies, background) {
        this.light = light;
        this.enemies = enemies;
        this.background = background;
    }
}
