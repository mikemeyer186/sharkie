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

    /**
     * animating images
     * @param {array} imgArray - paths of images
     */
    playAnimation(imgArray) {
        let m = this.currentImage % imgArray.length;
        let path = imgArray[m];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * moving left
     * @param {number} speed - speed of object
     */
    moveLeft(speed) {
        this.x -= speed;
    }

    /**
     * moving right
     * @param {number} speed - speed of object
     */
    moveRight(speed) {
        this.x += speed;
    }

    /**
     * moving up
     * @param {number} speed - speed of object
     */
    moveUp(speed) {
        this.y -= speed;
    }

    /**
     * moving down
     * @param {number} speed - speed of object
     */
    moveDown(speed) {
        this.y += speed;
    }

    /**
     * moving up and down
     * @param {number} speed - speed of object
     */
    moveUpAndDown(speed) {
        if (this.up) {
            this.moveUp(speed);
        }
        if (this.down) {
            this.moveDown(speed);
        }
    }

    /**
     * checking if object is collding with other object
     * @param {object} obj - checking object
     * @returns
     */
    isColliding(obj) {
        return (
            this.x + this.width - this.offset.right >= obj.x + obj.offset.left &&
            this.x + this.offset.left <= obj.x + obj.width - obj.offset.right &&
            this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top &&
            this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom
        );
    }

    /**
     * checking if object is near to another object
     * @param {object} obj - checking object
     * @returns
     */
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

    /**
     * cheking if sharkie is colliding with barrier from the left
     * @param {object} obj - barrier
     * @returns
     */
    isCollidingBarrierLeft(obj) {
        return this.x + this.width - this.offset.right >= obj.x + obj.offset.left && this.x < obj.x;
    }

    /**
     * cheking if sharkie is colliding with barrier from the right
     * @param {object} obj - barrier
     * @returns
     */
    isCollidingBarrierRight(obj) {
        return this.x + this.offset.left <= obj.x + obj.width - obj.offset.right && this.x + this.width > obj.x + obj.width;
    }

    /**
     * cheking if sharkie is colliding with barrier from the top
     * @param {object} obj - barrier
     * @returns
     */
    isCollidingBarrierTop(obj) {
        return this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top && this.y < obj.y;
    }

    /**
     * cheking if sharkie is colliding with barrier from the bottom
     * @param {object} obj - barrier
     * @returns
     */
    isCollidingBarrierBottom(obj) {
        return this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom && this.y + this.height > obj.y + obj.height;
    }

    /**
     * decreasing energy of object when hurts
     */
    decreaseEnergy() {
        this.energy -= 2;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHurt = new Date().getTime();
        }
    }

    /**
     * decreasing energy of endboss when hurts
     */
    decreaseEnergyBoss() {
        this.bossLife -= 40;
        if (this.bossLife <= 0) {
            this.bossLife = 0;
        } else {
            this.lastHurt = new Date().getTime();
        }
    }

    /**
     * increasing poison when collected
     */
    increasePoison() {
        this.poison += 20;
        if (this.poison >= 100) {
            this.poison = 100;
        }
    }

    /**
     * decreasing poison when bubbled
     */
    decreasePoison() {
        this.poison -= 20;
        if (this.poison <= 0) {
            this.poison = 0;
        }
    }

    /**
     * increasing coins when collected
     */
    increaseCoin() {
        this.coins += 10;
        if (this.coins >= 100) {
            this.coins = 100;
        }
    }

    /**
     * checking if object is dead
     * @returns
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * checking if object is hurt and returns true for 1 second
     * @returns
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHurt;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }
}
