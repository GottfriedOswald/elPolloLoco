class World {

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvasToClear = canvas;
        this.draw();
    }

    character = new Character();
    enemies = [
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',(200 + Math.random()*500).toFixed(0),410,49,50),
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',(200 + Math.random()*500).toFixed(0),410,49,50),
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',(200 + Math.random()*500).toFixed(0),410,49,50),
    ];

    clouds = [
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/1.png',(Math.random()*396).toFixed(0),216,384),
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/2.png',(Math.random()*396).toFixed(0),216,384),
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/Completo.png',0,219,780), 
    ];

    landscapes = [
        // new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/1.png',0,264,216,384),
        // new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/2.png',390,264,216,384),
        new Landscape('img/5.Fondo/Capas/5.cielo_780-438px.jpg',0,0,480,780),
        new Landscape('img/5.Fondo/Capas/3.Fondo3/3.Fondo3_small/Completo.png',0,161,319,790),
        new Landscape('img/5.Fondo/Capas/2.Fondo2/2.Fondo2_small/completo.png',0,161,319,790),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/completo.png',0,161,319,790),
        
    ];

    
    canvasToClear;
    ctx;

    

    draw() {
        this.ctx.clearRect(0, 0, this.canvasToClear.width, this.canvasToClear.height);
        this.addObjectsToMap(this.landscapes);
        this.addObjectsToMap(this.clouds);

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