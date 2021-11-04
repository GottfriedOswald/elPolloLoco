class Endboss extends MovableObject {
    intervalTime = 300;
    speed = 0.15;
    speedfaktor = 1;

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    constructor(imgUrl, x, y, height, width){
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_WALKING);

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.walkanimation();
        // this.moveLeft(this.speed + (Math.random()*this.speedfaktor));
    }

    walkanimation(){
        setInterval(() => {
            this.playAnimation();
            if (this.currentImage > 998) {
                this.currentImage = 0;
            }
            this.currentImage++;
        },this.intervalTime);
    }

}