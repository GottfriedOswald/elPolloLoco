class Character extends MovableObject {

    height = 240;
    width = 122;
    intervalTime = 75;
    world;
    speed = 7;

    // Array mit Bildern die in Folge das Laufen des Characters animieren
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];




    constructor(imgUrl, x, y) {
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_WALKING);

        this.x = x;
        this.y = y;
        this.walkanimation();
    }

    walkanimation() {

        setInterval(() => {
            if (this.world.keyboardInWorld.RIGHT && this.x < 2420) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboardInWorld.LEFT && this.x > -670) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            //....variable "camera_x" wird mit dem Character verbunden
            //....die "100" bewirkt das Pepe nicht zu sehr an den linken Rand gesetzt wird 
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboardInWorld.RIGHT || this.world.keyboardInWorld.LEFT) {
                this.playAnimation();
                if (this.currentImage > 998) {
                    this.currentImage = 0;
                }
                this.currentImage++;
            }
        }, this.intervalTime);
    }

    jump() {

    }
}