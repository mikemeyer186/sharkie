class Level {
    enemies;
    light;
    background;
    levelEnd_x = 3600;

    constructor(light, enemies, background) {
        this.light = light;
        this.enemies = enemies;
        this.background = background;
    }
}
