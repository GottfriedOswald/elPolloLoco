class Cloud extends MovableObject{


    height = 0;
    width = 0;
    speed = 0.05;
    speedfaktor = 0.1;

    constructor(imgUrl,x,height,width){
        super().loadImage(imgUrl);
        this.x = x;
        this.height = height;
        this.width = width;
        this.moveLeft(this.speed + (Math.random()*this.speedfaktor));
    };
}