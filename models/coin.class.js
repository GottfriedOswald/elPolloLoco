class Coin extends ThrowableObject {

    height = 0;
    width = 0;

    offsetRight = 20;
    offsetLeft = 20;
    offsetTop = 20;
    offsetBottom = 20;

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.x = x;
        this.y = y - height;
        this.height = height;
        this.width = width;
    }
}