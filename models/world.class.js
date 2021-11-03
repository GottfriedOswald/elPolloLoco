class World {

    // Variablen
    canvasToClear;
    ctx;
    keyboardInWorld;
    camera_x = 0; // Variable zum Verschieben des sichtbaren Bereichs / der Kamera / des Bildausschnitts


    // Objekte
    // wird ein Objekt der Klasse World erstellt, so werden auch weitere Objekte der der unten aufgeführten Klassen erstellt.
    character = new Character('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png', 80, 230);

    enemies = level1.enemies;

    endboss = level1.endboss;

    clouds = level1.clouds;

    landscapes = level1.landscapes;

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

        this.ctx.translate(this.camera_x,0);

        this.addObjectsToMap(this.landscapes);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        // this.addToMap(this.endboss);

        this.ctx.translate(-this.camera_x,0);

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
        if (mo.otherDirection) { //.....................................prüft ob sich "otherDirection" verändert hat
            this.ctx.save(); //.........................................speichert den aktuellen Zustand
            this.ctx.translate(mo.width, 0); //.........................verschiebt das Bild um seine eigene Breite
            this.ctx.scale(-1, 1); //...................................spiegelt das Bild um die x-Achse
            mo.x = mo.x * -1; //........................................verändert die x-Position ins Gegenteilige
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) { //.....................................prüft ob sich "otherDirection" verändert hat
            mo.x = mo.x * -1; //........................................verändert die x-Position ins Gegenteilige
            this.ctx.restore(); //......................................macht Änderung von "scale" und "translate" wieder rückgängig bzw. stellt den "save"-Zustand wieder her
        }
    }
}