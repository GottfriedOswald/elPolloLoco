class MovableObject{

    x = 0;
    y = 0;
    img;
    imageCache = {};
    currentImage = 0;
    otherDirection = false; // Variable zum spiegeln des Characters

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

    moveLeft(speed){
        setInterval(() => {
            if (this.x < (0-this.width)) {
                this.x = 780+this.width;
            }
            this.x -= speed;
        },1000/60);
    }

    playAnimation(){
        let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path]
    }
}