class Endboss extends MovableObject {
    intervalTime = 55;
    speed = 0.15;
    speedfaktor = 1;

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
    ];

    constructor(imgUrl, x, y, height, width){
        super().loadImage(imgUrl);
        // this.loadImages(this.IMAGES_WALKING);

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        // this.walkanimation();
        // this.moveLeft(this.speed + (Math.random()*this.speedfaktor));
    }

    // walkanimation(){
    //     setInterval(() => {
    //         let i = this.currentImage % this.IMAGES_WALKING.length;
    //         let path = this.IMAGES_WALKING[i];
    //         this.img = this.imageCache[path]
    //         if (this.currentImage > 998) {
    //             this.currentImage = 0;
    //         }
    //         this.currentImage++;
    //     },this.intervalTime);
    // }

}