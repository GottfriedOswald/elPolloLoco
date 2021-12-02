class ThrowingBottle extends ThrowableObject {

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y - height;

        this.throwBottle();
    }

    throwBottle() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
        }, 25);
    }
}