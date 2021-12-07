class Bottle extends ThrowableObject{

    height = 0;
    width = 0;

    constructor(imgUrl, x, y, height, width){
        super().loadImage(imgUrl);
        this.x = x;
        this.y = y-height;
        this.height = height;
        this.width = width;
    }

}