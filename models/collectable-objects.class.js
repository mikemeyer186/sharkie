class CollectableObjects extends MoveableObject {
    animateCollectables(images) {
        setStoppableInterval(() => {
            this.playAnimation(images);
        }, 1000 / 8);
    }
}
