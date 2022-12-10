class MoveableObject extends DrawableObject {
    otherDirection = false;
    energy = 100;
    poison = 0;
    coins = 0;
    lastHurt = 0;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };

    playAnimation(imgArray) {
        let m = this.currentImage % imgArray.length;
        this.img = this.imageCache[m];
        this.currentImage++;
    }

    moveLeft(speed) {
        this.x -= speed;
    }

    moveRight(speed) {
        this.x += speed;
    }

    moveUp(speed) {
        this.y -= speed;
    }

    moveDown(speed) {
        this.y += speed;
    }

    isColliding(obj) {
        return (
            this.x + this.width - this.offset.right >= obj.x + obj.offset.left &&
            this.x + this.offset.left <= obj.x + obj.width - obj.offset.right &&
            this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top &&
            this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom
        ); //&&
        //obj.onCollisionCourse // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    decreaseEnergy() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHurt = new Date().getTime();
        }
    }

    increasePoison() {
        this.poison += 20;
        if (this.poison >= 100) {
            this.poison = 100;
        }
    }

    decreasePoison() {
        this.poison -= 20;
        if (this.poison <= 0) {
            this.poison = 0;
        }
    }

    increaseCoin() {
        this.coins += 10;
        if (this.coins >= 100) {
            this.coins = 100;
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHurt;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }
}
