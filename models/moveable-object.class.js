class MoveableObject extends DrawableObject {
    otherDirection = false;
    up = false;
    down = false;
    energy = 100;
    bossLife = 100;
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
        let path = imgArray[m];
        this.img = this.imageCache[path];
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

    moveUpAndDown(speed) {
        if (this.up) {
            this.moveUp(speed);
        }
        if (this.down) {
            this.moveDown(speed);
        }
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

    isNearToSharkie(obj) {
        let roomX = 10;
        let roomY = 2;
        return (
            this.x + this.width - this.offset.right + roomX >= obj.x + obj.offset.left - roomX &&
            this.x + this.offset.left - roomX <= obj.x + obj.width - obj.offset.right + roomX &&
            this.y + this.height - this.offset.bottom + roomY >= obj.y + obj.offset.top - roomY &&
            this.y + this.offset.top - roomY <= obj.y + obj.height - obj.offset.bottom + roomY
        );
    }

    isCollidingBarrierLeft(obj) {
        return this.x + this.width - this.offset.right >= obj.x + obj.offset.left && this.x < obj.x;
    }

    isCollidingBarrierRight(obj) {
        return this.x + this.offset.left <= obj.x + obj.width - obj.offset.right && this.x + this.width > obj.x + obj.width;
    }

    isCollidingBarrierTop(obj) {
        return this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top && this.y < obj.y;
    }

    isCollidingBarrierBottom(obj) {
        return this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom && this.y > obj.y + obj.height;
    }

    decreaseEnergy() {
        this.energy -= 2;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHurt = new Date().getTime();
        }
    }

    decreaseEnergyBoss() {
        this.bossLife -= 40;
        if (this.bossLife <= 0) {
            this.bossLife = 0;
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
