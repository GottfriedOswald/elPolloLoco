class ThrowingBottle extends ThrowableObject {

    offsetRight = 0;
    offsetLeft = 0;
    offsetTop = 0;
    offsetBottom = 0;
    loosingEnergyPerHit = 100;

    IMAGES_BOTTLE_ROTATION = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    constructor(imgUrl, x, y, height, width) {
        super().loadImage(imgUrl);
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.loadImages(this.IMAGES_SPLASH);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y - height;

        this.throwBottle();
    }

    throwBottle() {
        this.speedY = 19;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
                this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
            }, 30);
    }
}