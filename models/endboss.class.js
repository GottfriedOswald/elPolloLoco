class Endboss extends MovableObject {


    loosingEnergyPerHit = 8;
    intervalTime = 300;
    speed = 10;
    speedfaktor = 0.25;
    endboss_world;
    getHitSound = new Audio('audio/big-chicken-hit.mp3');
    offsetRight = 10;
    offsetLeft = 10;
    offsetTop = 20;
    offsetBottom = 10;



    IMAGES_CAMINATA = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png'
    ];

    IMAGES_ALERTA = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    IMAGES_ATAQUE = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];

    IMAGES_HERIDA = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];

    IMAGES_MUERTE = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_ALERTA);
        this.loadImages(this.IMAGES_CAMINATA);
        this.loadImages(this.IMAGES_ATAQUE);
        this.loadImages(this.IMAGES_HERIDA);
        this.loadImages(this.IMAGES_MUERTE);

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.walkanimation();
        // this.moveLeft(this.speed + (Math.random()*this.speedfaktor));
    }

    moveLeft(factor) {
        this.x -= this.speed * factor;
    }

    moving(factor){
        setTimeout(() => {
            this.moveLeft(factor);
        },1500);
    }

    walkanimation() {
        setInterval(() => {
            if (this.isHurt()) {
                this.playGetHitSound();
                console.log(this.x);
            } else if (this.energy < 100 && this.energy >= 80) {
                this.playAnimation(this.IMAGES_ALERTA);
                // this.moving(1);
                this.moveLeft(1);
            } else if (this.energy < 80 && this.energy >= 50) {
                this.playAnimation(this.IMAGES_ATAQUE);
                // this.moving(2);
                this.moveLeft(2);
            } else if (this.energy < 50 && this.energy > 0) {
                this.playAnimation(this.IMAGES_HERIDA);
                // this.moving(3);
                this.moveLeft(3);
            } else if (this.energy <= 0) {
                this.isDead();
                this.playAnimation(this.IMAGES_MUERTE);
                this.isDying();
                setTimeout(() => {
                    this.showGameOverImage();
                },1500);
                setTimeout(() => {
                    this.restart();
                },5000);
            } else {
                this.playAnimation(this.IMAGES_CAMINATA);
                if (this.currentImage > 998) {
                    this.currentImage = 0;
                }
            }
            this.currentImage++;
        }, this.intervalTime);
    }

}