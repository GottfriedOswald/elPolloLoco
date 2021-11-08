class MovableObject {

    x;
    y;
    ground = 460;
    img;
    imageCache = {};
    currentImage = 0;
    otherDirection = false; // Variable zum spiegeln des Characters
    speedY = 0; // Variable für Fallgeschwindigkeit
    acceleration = 1.2; // Variable für Beschleunigung

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y = this.y - this.speedY; //..............speedY wird von y abgezogen, aber da der Anfangswert 0 ist wird nichts abgezogen
                this.speedY = this.speedY - this.acceleration; //..hier wird speedY negiert und somit wird im nächsten Durchlauf speedY zu y dazu gezählt da Minus minus Minus Plus gibt (-) - (-) = (+)
            }
        }, 1000 / 60)
    }

    /**
     * this function checks whether Pepe is floating in the air
     * @returns Integer, Koordinate in Y
     */
    isAboveGround() {
        return this.y < (this.ground - this.height);
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('moving right');
    }

    moveLeft(speed) {
        setInterval(() => {
            if (this.x < (0 - this.width)) {
                this.x = 780 + this.width;
            }
            this.x -= speed;
        }, 1000 / 60);
    }

    /**
     * this function loads a sequence of images
     * 
     * @param {String} imagesForAnimation [path for image]
     */
    playAnimation(imagesForAnimation) {
        let i = this.currentImage % imagesForAnimation.length;
        let path = imagesForAnimation[i];
        this.img = this.imageCache[path]
        this.currentImage++;
    }
}