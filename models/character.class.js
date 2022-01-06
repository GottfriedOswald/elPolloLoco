class Character extends MovableObject {

    height = 240;
    width = 122;
    intervalTime = 75;
    world;
    speed = 7;
    loosingEnergyPerHit = 15;
    walking_sound = new Audio('audio/running_hard_surface.mp3');
    jump_sound = new Audio('audio/jump.mp3');
    getHitSound = new Audio('audio/Man_hurt-aah.mp3');
    bg_Sound = new Audio('audio/bg-music.mp3');

    offsetRight = 30;
    offsetLeft = 30;
    offsetTop = 110;
    offsetBottom = 0;


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

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ]

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y - height;

        this.walkanimation();
        this.applyGravity();
    }

    playBgSound() {
        this.bg_Sound.play();
    }

    /**
     * (E) animates walking when moving
     */
    walkanimation() {

        setInterval(() => {

            this.walking_sound.pause();
            if (!this.isDead() && this.world.keyboardInWorld.RIGHT && this.x < 2420) {
                this.moveRight();
                this.playWalkingSoundOfCharacter();
            }

            if (!this.isDead() && this.world.keyboardInWorld.LEFT && this.x > -670) {
                this.moveLeft();
                this.playWalkingSoundOfCharacter();
            }

            if (!this.isDead() && this.world.keyboardInWorld.UP && !this.isAboveGround()) {
                this.jump();
                this.playJumpSoundOfCharacter();
            }

            //....variable "camera_x" wird mit dem Character verbunden
            //....die "100" bewirkt das Pepe nicht zu sehr an den linken Rand gesetzt wird 
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.isDying();
                this.bg_Sound.pause();

                //................................
                setTimeout(() => {
                    this.showLostImage();
                },1500);
                // setTimeout(() => {
                //     this.restart();
                // },1000);
                //................................

            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.playGetHitSound();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                this.bg_Sound.play();
                if (this.world.keyboardInWorld.RIGHT || this.world.keyboardInWorld.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING); // ich übergebe die Bilder der Lauf-Animation an die Funktion
                }
            }
        }, this.intervalTime);
    }
}