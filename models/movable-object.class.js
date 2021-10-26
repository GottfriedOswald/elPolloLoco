class MovableObject{

    x = 0;
    y = 0;
    img;
    imageCache = {};




    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }
    
    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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