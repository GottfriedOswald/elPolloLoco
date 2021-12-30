class HealthBarEndboss extends StatusBar{
    
    BAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png'
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