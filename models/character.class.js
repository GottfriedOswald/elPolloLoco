class Character extends MovableObject {

    height = 240;
    width = 122;
    intervalTime = 75;
    world;
    speed = 7;
    walking_sound = new Audio('audio/running_hard_surface.mp3');


    // Array mit Bildern die in Folge das Laufen des Characters animieren
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
    ];




    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y - height;

        this.walkanimation();
        this.applyGravity();
    }

    walkanimation() {

        setInterval(() => {

            this.walking_sound.pause();
            if (this.world.keyboardInWorld.RIGHT && this.x < 2420) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboardInWorld.LEFT && this.x > -670) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            if (this.isAboveGround()==false) {
                if (this.world.keyboardInWorld.UP) {
                    this.speedY = 20;
                }
            }
            

            //....variable "camera_x" wird mit dem Character verbunden
            //....die "100" bewirkt das Pepe nicht zu sehr an den linken Rand gesetzt wird 
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            }else{

            if (this.world.keyboardInWorld.RIGHT || this.world.keyboardInWorld.LEFT) {
                this.playAnimation(this.IMAGES_WALKING); // ich übergebe die Bilder der Lauf-Animation an die Funktion
            }
        }
        }, this.intervalTime);

        
    }

    jump() {

    }
}