class ThrowingBottle extends ThrowableObject {

    offsetRight = 0;
    offsetLeft = 0;
    offsetTop = 0;
    offsetBottom = 0;

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y - height;

        this.throwBottle();
    }

    throwBottle() {
        this.speedY = 19;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
        }, 25);
    }
}