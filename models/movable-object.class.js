class MovableObject extends DrawableObject {

    otherDirection = false; //...........Variable zum spiegeln des Characters
    speedY = 0; //.......................Variable für Fallgeschwindigkeit
    acceleration = 1.3; //...............Variable für Beschleunigung
    acceleration_dying = 3; //...........Beschleunigung beim Sterben
    // energy = 100;
    lastHit = 0;
    loosingEnergyPerHit = 0;

    setX_PositionOfCharacter(x_PositionOfCharacter) {
        this.x_PositionOfCharacter = x_PositionOfCharacter;
    }

    /**
     * this function simulates gravity for the object
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y = this.y - this.speedY; //..................speedY wird von y abgezogen, aber da der Anfangswert 0 ist wird nichts abgezogen
                this.speedY = this.speedY - this.acceleration; //..hier wird speedY negiert und somit wird im nächsten Durchlauf speedY zu y dazu gezählt da Minus minus Minus Plus gibt (-) - (-) = (+)
            }
        }, 1000 / 60)
    }

    /**
     * this function checks whether Pepe is floating in the air
     * @returns Integer, Koordinate in Y
     */
    isAboveGround() {
        if (this instanceof ThrowingBottle) {
            return true;
        } else {
            return this.y < (this.ground - this.height);
        }
    }

    /**
     * Character move right while right arrow key is pressed
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    /**
     * (E) this function positions the object all the way to the right
     * as soon as you leave the playing field on the left
     * 
     * (D) diese Funktion positioniert das Objekt wieder ganz nach rechts,
     * sobald das Spielfeld auf der linken Seite verlassen wird
     * 
     * @param {point number} speed 
     */
    ObjectsMoveLeft(speed) {
        setInterval(() => {
            if (this.x < (-780 - this.width)) {
                this.x = 3000 + this.width;
                this.energy = 100;
            }
            this.x -= speed;
        }, 1000 / 60);
    }

    playWalkingSoundOfCharacter() {
        if (!this.isAboveGround()) {
            this.walking_sound.volume = 0.15;
            this.walking_sound.play();
        }
    }

    playJumpSoundOfCharacter() {
        this.jump_sound.volume = 0.15;
        this.jump_sound.play();
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

    jump() {
        this.speedY = 25;
    }

    /**
     * (D) prüft ob sich Koordinatenwerte der Objektrahmen überschneiden und gibt entsprechend einen Wahrheitswert zurück
     * 
     * (E) checks whether coordinate values of the object frames overlap and returns a boolean accordingly
     * 
     * @param {object} mo 
     * @returns boolean
     */
    isColliding(mo) {
        return this.x + (this.width - this.offsetRight) > mo.x + mo.offsetLeft &&
            this.y + this.height > mo.y + mo.offsetTop &&
            this.x + this.offsetLeft < mo.x + (mo.width - mo.offsetRight) &&
            this.y + this.offsetTop < mo.y + (mo.height - mo.offsetBottom)
    }

    /**
     * (E) reduces the energy points in the event of a collision and saves the time of the last collision
     * 
     * (D) verringert bei Kollision die Energiepunkte und speichert den Zeitpunkt der letzten Kollision
     */
    hit() {
        this.energy -= this.loosingEnergyPerHit;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed /= 1000;
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }

    isDying() {
        setTimeout(() => {
            setInterval(() => {
                this.y -= this.speedY;
                this.speedY -= this.acceleration_dying;
                // console.log(this.x, this.y);
            }, 35);
        }, 500);

    }

    playGetHitSound() {
        this.getHitSound.volume = 0.15;
        this.getHitSound.play();
    }

    showLostImage() {
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('youLostImage').classList.remove('d-none');
    }

    showGameOverImage() {
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('gameOverImage').classList.remove('d-none');
    }

    restart() {
        location.reload();
    }
}