class Chicken extends MovableObject {

    height = 0;
    width = 0;
    intervalTime = 95;
    speed = 0.25;
    speedfaktor = 1;

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

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_WALKING);

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.walkanimation();
        this.ObjectsMoveLeft(this.speed + (Math.random() * this.speedfaktor));
    }

    walkanimation() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            if (this.currentImage > 998) {
                this.currentImage = 0;
            }
            this.currentImage++;
        }, this.intervalTime);
    }
}