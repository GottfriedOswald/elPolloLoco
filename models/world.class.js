class World {

    // Variablen
    canvasToClear;
    ctx;
    keyboardInWorld;


    // Objekte
    // wird ein Objekt der Klasse World erstellt, so werden auch weitere Objekte der der unten aufgeführten Klassen erstellt.
    character = new Character('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png', 80, 230);

    enemies = [
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png', (200 + Math.random() * 500).toFixed(0), 410, 49, 50),
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png', (200 + Math.random() * 500).toFixed(0), 410, 49, 50),
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png', (200 + Math.random() * 500).toFixed(0), 410, 49, 50),
    ];

    clouds = [
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/1.png', (Math.random() * 396).toFixed(0), 216, 384),
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/2.png', (Math.random() * 396).toFixed(0), 216, 384),
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/Completo.png', 0, 219, 780),
    ];

    landscapes = [
        // new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/1.png',0,264,216,384),
        // new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/2.png',390,264,216,384),
        new Landscape('img/5.Fondo/Capas/5.cielo_780-438px.jpg', 0, 0, 480, 780),
        new Landscape('img/5.Fondo/Capas/3.Fondo3/3.Fondo3_small/Completo.png', 0, 161, 319, 790),
        new Landscape('img/5.Fondo/Capas/2.Fondo2/2.Fondo2_small/completo.png', 0, 161, 319, 790),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/completo.png', 0, 161, 319, 790),

    ];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvasToClear = canvas;
        this.keyboardInWorld = keyboard;
        this.draw();
        this.setWorld();
    }

    /**
     *  diese Funktion übergibt der in der Characterklasse erstellten world-variablen den Inhalt dieser Worldklasse.
     * @param {} - no parameters are passed
     */
    setWorld() {
        this.character.world = this;
    }



    /**
     *  diese Funktion übergibt die Objekte an canvas
     * @param {} - no parameters are passed
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvasToClear.width, this.canvasToClear.height); // canvas-Fläche wird geleert

        this.addObjectsToMap(this.landscapes);
        this.addObjectsToMap(this.clouds);

        this.addToMap(this.character);

        this.addObjectsToMap(this.enemies);



        // draw() wird immer wieder aufgerufen
        // "this" muss in eine neu erstellte Variable ("self") kopiert werden da in der anonymen Funktion der "requestAnimationFrame"-Funktion das "this" nicht angenommen wird
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     *  diese Funktion übergibt Objekte aus einem Array weiter an die addToMap-Funktion
     * @param {*} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    };

    /**
     * diese Funktion übergibt Objekte an die Context-Variable die diese dann in canvas positioniert
     * @param {*} moveableObject 
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}