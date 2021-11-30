class ThrowingBottle extends ThrowableObject{

    constructor(imgUrl, x, y, height, width){
        super().loadImage(imgUrl);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y - height;
    }
}