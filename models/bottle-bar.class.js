class BottleBar extends StatusBar{

    BAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
    ];

    constructor(x, y, height, width, percent){
        super();
        this.loadImages(this.BAR_IMAGES);

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.setPercentage(percent);
    }
}