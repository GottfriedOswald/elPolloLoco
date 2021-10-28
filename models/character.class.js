class Character extends MovableObject {

    height = 240;
    width = 122;
    intervalTime = 75;

    // Array mit Bildern die in Folge das Laufen des Characters animieren
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    world;



    constructor(imgUrl, x, y) {
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_WALKING);

        this.x = x;
        this.y = y;
        this.walkanimation();
    }

    walkanimation() {
        setInterval(() => {
            if (this.world.keyboardInWorld.RIGHT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path]
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