class CollectableObjects extends MoveableObject {
    animateCollectables(images) {
        setInterval(() => {
            this.playAnimation(images);
        }, 1000 / 8);
    }
}
