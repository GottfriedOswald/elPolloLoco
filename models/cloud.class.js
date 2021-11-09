class Cloud extends MovableObject{

    y = 0;
    height = 0;
    width = 0;
    speed = 0.05;
    speedfaktor = 0.1;

    constructor(imgUrl,x,height,width){
        super().loadImage(imgUrl);
        this.x = x;
        this.y;
        this.height = height;
        this.width = width;
        this.ObjectsMoveLeft(this.speed + (Math.random()*this.speedfaktor));
    };
}