class Chicken extends MovableObject {

    height = 0;
    width = 0;
    intervalTime = 95;
    speed = 0.5;
    speedfaktor = 1.5;
    loosingEnergyPerHit = 50;
    getHitSound = new Audio('audio/small-chicken-hit.mp3');

    offsetRight = -10;
    offsetLeft = 0;
    offsetTop = 0;
    offsetBottom = 0;

    // Array mit Bildern die in Folge das Laufen des Characters animieren
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    IMAGE_MUERTE = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_MUERTE);

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.walkanimation();
        this.ObjectsMoveLeft(this.speed + (Math.random() * this.speedfaktor));
    }

    walkanimation() {
        setInterval(() => {
            if (this.isHurt()) {
                this.playGetHitSound();
            } else if (this.energy <= 0) {
                this.playAnimation(this.IMAGE_MUERTE);
                this.isDying();
            } else {
                this.playAnimation(this.IMAGES_WALKING);
                if (this.currentImage > 998) {
                    this.currentImage = 0;
                }
                this.currentImage++;
            }
        }, this.intervalTime);
    }
}