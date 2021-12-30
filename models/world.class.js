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
    throwingBottles = [];
    collectedBottles = 0; // Zähler für gesammelte Flaschen

    healthBar = new HealthBar(10, 0, 40, 160, 100);
    coinBar = new CoinBar(10, 30, 40, 160, 0);
    bottleBar = new BottleBar(10, 60, 40, 160, 0);
    healthBarEndboss = new HealthBarEndboss(600, 0, 40, 160, 100);


    enemies = level1.enemies;
    endboss = level1.enemies[level1.enemies.lenght -1];

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
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowingBottle();
            this.checkCollisionsWithBottles();
            this.checkCollisionsWithThrowingBottlesToEnemy();
        }, 100);
        setInterval(() => {
            this.checkCollisionsWithThrowingBottlesToEnemy();
        }, 50);
    }

    /**
     *  mit den geworfenen Flaschen den Feind treffen
     */
    checkCollisionsWithThrowingBottlesToEnemy(){
            this.enemies.forEach((enemy)=>{
                this.throwingBottles.forEach((throwingBottle) => {
                    if (throwingBottle.isColliding(enemy) && enemy instanceof Endboss) {
                        let endboss = this.level.enemies[this.level.enemies.length - 1];
                        enemy.hit();
                        console.log("Endboss getroffen, Energie von " + endboss + " ist " + endboss.energy);
                        this.healthBarEndboss.setPercentage(endboss.energy);
                    }else if (throwingBottle.isColliding(enemy)) {
                        enemy.hit();
                        console.log("Huhn getroffen, Energie von " + enemy + " ist " + enemy.energy);
                    }
                })
            });
    }

    /**
     * wenn Pepe mit Flasche kollidiert und Anzahl gesammelter Flaschen kleiner als 10 ist
     * dann sammelt er Flasche ein.
     */
    checkCollisionsWithBottles(){
            this.bottles.forEach((botella) => {
                if (this.character.isColliding(botella) && this.collectedBottles < 10) {
                    this.bottles.splice(this.bottles.indexOf(botella), 1);
                    this.collectedBottles++;
                    console.log(this.collectedBottles + " Flasche gesammelt")
                    this.bottleBar.setPercentage(this.collectedBottles * 10);
                }
            });
    }

    /**
     * prüft ob Taste "d" gedrückt wurde
     * wenn ja, dann wird Flasche erstellt und in ein Array verschoben
     */
    checkThrowingBottle() {
        if (this.keyboardInWorld.D && this.collectedBottles < 100) { // hier noch auf "this.collectedBottles > 0" ändern
            let bottle = new ThrowingBottle('img/7.Marcadores/Icono/Botella.png', (this.character.x) + (this.character.width - 30), (this.character.y) + (this.character.height / 2), 52, 51);
            this.throwingBottles.push(bottle);
            if (this.collectedBottles > 0) {
                this.collectedBottles--;
                this.bottleBar.setPercentage(this.collectedBottles * 10);
            }
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
            if (this.character.isColliding(enemy) && !enemy.isDead()) {
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
        this.addToMap(this.healthBarEndboss);

        // "bewegliche" Positionierung von Objekten durch die "ctx.translate"-Funktion
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.bottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwingBottles);
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
        // mo.drawFrame(this.ctx);

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