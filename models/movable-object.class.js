class MovableObject{

    x = 0;
    y = 0;
    img;
    diff;


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){
        console.log('moving right');
    }

    moveLeft(){
        console.log('moving left');
    }

    animate(reduceX){
        setInterval(() => {
            if (this.x < (0-this.width)) {
                this.x = 780+this.width;
            }
            this.x -= reduceX;
        },1000/60);
    }
}