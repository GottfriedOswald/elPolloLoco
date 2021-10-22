class Cloud extends MovableObject{


    height = 0;
    width = 0;

    constructor(imgUrl,x,height,width){
        super().loadImage(imgUrl);
        this.x = x;
        this.height = height;
        this.width = width;
    };
}