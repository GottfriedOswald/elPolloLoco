class CoinBar extends StatusBar {

    BAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/20_  copia.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/40_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/60_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png'
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