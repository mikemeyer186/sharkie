class StatusBar extends DrawableObject {
    x = 20;
    y = 0;
    width = 200;
    height = 50;

    /**
     * setting right image of statusbar with index of array
     * @param {number} percentage - percentage of status bar
     */
    setStatusBar(percentage) {
        let index = this.returnImgIndex(percentage);
        this.img.src = this.images[index];
    }

    /**
     * returning index of image of status bar
     * @param {number} percentage  - percentage of status bar
     * @returns
     */
    returnImgIndex(percentage) {
        if (percentage <= 100 && percentage > 81) {
            return 5;
        } else if (percentage <= 80 && percentage > 61) {
            return 4;
        } else if (percentage <= 60 && percentage > 41) {
            return 3;
        } else if (percentage <= 40 && percentage > 21) {
            return 2;
        } else if (percentage <= 20 && percentage > 1) {
            return 1;
        } else {
            return 0;
        }
    }
}
