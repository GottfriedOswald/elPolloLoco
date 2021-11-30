class ThrowableObject extends MovableObject{
    /**
    geerbte Variablen und Funktionen aus drawable-objekt.class.js
   
    x;
    y;
    ground = 460;
    img;
    imageCache = {};
    currentImage = 0;

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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    geerbte Variablen und Funktionen aus movable-objekt.class.js

    otherDirection = false;...........Variable zum spiegeln des Characters
    speedY = 0;.......................Variable für Fallgeschwindigkeit
    acceleration = 1.2;...............Variable für Beschleunigung
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y = this.y - this.speedY; //..................speedY wird von y abgezogen, aber da der Anfangswert 0 ist wird nichts abgezogen
                this.speedY = this.speedY - this.acceleration; //..hier wird speedY negiert und somit wird im nächsten Durchlauf speedY zu y dazu gezählt da Minus minus Minus Plus gibt (-) - (-) = (+)
            }
        }, 1000 / 60)
    }

    isAboveGround() {
        return this.y < (this.ground - this.height);
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    ObjectsMoveLeft(speed) {
        setInterval(() => {
            if (this.x < (-780 - this.width)) {
                this.x = 2700 + this.width;
            }
            this.x -= speed;
        }, 1000 / 60);
    }

    playWalkingSoundOfCharacter() {
        if (!this.isAboveGround()) {
            this.walking_sound.play();
        }
    }

    playJumpSoundOfCharacter() {
        this.jump_sound.play();
    }

    playAnimation(imagesForAnimation) {
        let i = this.currentImage % imagesForAnimation.length;
        let path = imagesForAnimation[i];
        this.img = this.imageCache[path]
        this.currentImage++;
    }

    jump() {
        this.speedY = 25;
    }

    isColliding(mo){
        return this.x + (this.width-30) > mo.x &&
            this.y + this.height > mo.y &&
            this.x-40 < mo.x &&
            this.y < mo.y + mo.height
    }

    hit(){
        this.energy -= 0.002;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed /= 1000;
        return timepassed < 1;
    }

    isDead(){
        return this.energy == 0;
    }
 */
  
    speedX = 0;

    // throw(){
    //     setInterval(() => {
    //         if () {
                
    //         }
    //     }, 1000 / 60);
    // }
}