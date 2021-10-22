class World {

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvasToClear = canvas;
        this.draw();
    }

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/1.png',(Math.random()*396).toFixed(0),216,384),
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/2.png',(Math.random()*396).toFixed(0),216,384),
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/Completo.png',0,219,780), 
    ];

    landscapes = [
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/1.png',0,264,216,384),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/2.png',390,264,216,384),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/completo.png',0,261,219,780),
    ];

    
    canvasToClear;
    ctx;

    

    draw() {
        this.ctx.clearRect(0, 0, this.canvasToClear.width, this.canvasToClear.height);

        this.addObjectsToMap(this.clouds);

        this.addObjectsToMap(this.landscapes);

        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        

        
        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(object => {
            this.addToMap(object);
        });
    };

    addToMap(moveableObject) {
        this.ctx.drawImage(moveableObject.img, moveableObject.x, moveableObject.y, moveableObject.width, moveableObject.height);
    }
}