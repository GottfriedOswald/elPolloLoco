class MovableObject{

    x = 0;
    y = 0;
    img;



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
}