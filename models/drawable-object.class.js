class DrawableObject{
    x;
    y;
    ground = 460;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     *(E)
     *  is called when creating an object
     *  gets the file path for an image
     *  converts the "img" variable into an object variable of the Image type
     *  and now saves the image in the object variable through the path.
     * 
     *(D) 
     *  wird beim Erstellen eines Objekts aufgerufen
     *  erhält den Dateipfad für ein Bild
     *  wandelt Variable "img" in eine Objektvariable vom Typ Image
     *  und speichert nun durch den Pfad das Bild in der Objektvariablen.
     * 
     * @param {String} path 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * (E)
     *  does the same as "loadImage (path)", only that an array is passed 
     *  and the images are stored in a JSON (imageCache {}) with a loop
     * 
     * (D)
     *  tut dasselbe wie "loadImage(path)", nur das ein Array übergeben wird
     *  und mit einer Schleife die Bilder in ein JSON (imageCache{}) gespeichert werden
     * 
     * @param {Array with Strings} arr 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * (E)
     *  transfers and positions the objects (pictures) on the canvas
     * 
     * (D)
     *  übergibt und positioniert die Objekte (Bilder) an die Leinwand (canvas)
     * 
     * @param {object} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    
    /**
     * (D) zeichnet einen Rahmen um die Objekte aus der Klasse Character und Chicken
     * 
     * (E) draws a frame around the objects from the Character and Chicken classes
     * 
     * @param {object} ctx 
     */
     drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}