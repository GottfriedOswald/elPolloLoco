class World {

    // Variablen
    level = level1;
    canvasToClear;
    ctx;
    keyboardInWorld;
    camera_x = 0; // Variable zum Verschieben des sichtbaren Bereichs / der Kamera / des Bildausschnitts


    // Objekte
    // wird ein Objekt der Klasse World erstellt, so werden auch weitere Objekte der der unten aufgeführten Klassen erstellt.
    character = new Character('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png', 80, 460, 240, 122);
    throwingBottle = [];
    
    healthBar = new HealthBar(10, 0, 40, 160, 100);
    coinBar = new CoinBar(10, 30, 40, 160, 0);
    bottleBar = new BottleBar(10, 60, 40, 160, 0);

   
    enemies = level1.enemies;
    endboss = level1.endboss;

    clouds = level1.clouds;
    landscapes = level1.landscapes;

    bottles = level1.bottles;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvasToClear = canvas;
        this.keyboardInWorld = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * (E)
     * calls different functions in an interval
     * 
     * (D)
     * ruft in einem Intervall verschiedene Funktionen auf
     */
    run(){
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowingBottle();
        }, 200);
    }

    /**
     * prüft ob Leertaste gedrückt wurde
     * wenn ja, dann wird Flasche erstellt und in ein Array verschoben
     */
    checkThrowingBottle(){
        if (this.keyboardInWorld.D) {
            let bottle = new ThrowingBottle('img/7.Marcadores/Icono/Botella.png',(this.character.x)+(this.character.width-30), (this.character.y)+(this.character.height/2), 32, 31);
            this.throwingBottle.push(bottle);
        }
    }

    /**
     * (E)
     *  this function transfers the content of this world class to the world variables created in the character class.
     * 
     * (D)
     *  diese Funktion übergibt der in der Characterklasse erstellten world-variablen den Inhalt dieser Worldklasse.
     * @param {} - no parameters are passed
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * (E) this function checks whether my character object collides with one of the enemies objects
     * 
     * (D) diese Funktion prüft ob mein Character-Objekt mit einem der enemies.Objekten kollidiert
     */
    checkCollisions() {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log('you get hurt by ', enemy, 'your energy: ', this.character.energy);
                    this.healthBar.setPercentage(this.character.energy);
                }
            });
    }

    /**
     *  this function transfers the objects to canvas
     * @param {} - no parameters are passed
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvasToClear.width, this.canvasToClear.height); // canvas-Fläche wird geleert

        // "bewegliche" Positionierung von Objekten durch die "ctx.translate"-Funktion
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.landscapes);
        this.addObjectsToMap(this.clouds);
        this.ctx.translate(-this.camera_x, 0);

        // fixe Positionierung von Objekten
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);

        // "bewegliche" Positionierung von Objekten durch die "ctx.translate"-Funktion
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.bottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwingBottle);
        this.addObjectsToMap(this.enemies);
        this.ctx.translate(-this.camera_x, 0);

        // draw() wird immer wieder aufgerufen
        // "this" muss in eine neu erstellte Variable ("self") kopiert werden,
        // da in der anonymen Funktion der "requestAnimationFrame"-Funktion das "this" nicht angenommen wird
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     *  this function transfers objects from an array to the addToMap function
     * @param {*} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    };

    /**
     * this function transfers objects to the context variable which then positions them in canvas
     * 
     * Diese Funktion übergibt Objekte an die Kontextvariable, die sie dann im Canvas positioniert
     * @param {*} moveableObject 
     */
    addToMap(mo) {
        if (mo.otherDirection) { //.....................................prüft ob sich "otherDirection" verändert hat
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) { //.....................................prüft ob sich "otherDirection" verändert hat
            this.flipImageBack(mo);
        }
    }

    /**
     * this function mirrors the object when the direction of travel is changed
     * @param {object} mo 
     */
    flipImage(mo) {
        this.ctx.save(); //.........................................speichert den aktuellen Zustand
        this.ctx.translate(mo.width, 0); //.........................verschiebt das Bild um seine eigene Breite
        this.ctx.scale(-1, 1); //...................................spiegelt das Bild um die x-Achse
        mo.x = mo.x * -1; //........................................verändert die x-Position ins Gegenteilige
    }

    /**
     * this function mirrors the object back when the direction of travel is changed
     * @param {object} mo 
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1; //........................................verändert die x-Position ins Gegenteilige
        this.ctx.restore(); //......................................macht Änderung von "scale" und "translate" wieder rückgängig bzw. stellt den "save"-Zustand wieder her
    }


}