class StatusBar extends DrawableObject {
/**
    geerbte Variablen und Funktionen aus drawable-objekt.class.js
   
    x;
    y;
    ground = 460;
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
 */
    world;
    percentage = 100;
    height = 0;
    width = 0;

    HEALTH_IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    COIN_IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_.png'
    ];



    constructor(x, y, height, width, percent) {
        super();
        this.loadImages(this.HEALTH_IMAGES);
        this.loadImages(this.COIN_IMAGES);

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.setPercentage(percent);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // -> 0 ... 5
        let path = this.HEALTH_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    }

    
}