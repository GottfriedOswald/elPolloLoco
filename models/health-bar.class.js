class HealthBar extends StatusBar{

    BAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    constructor(x, y, height, width, percent) {
        super();
        this.loadImages(this.BAR_IMAGES);

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.setPercentage(percent);
    }
}