class Chicken extends MovableObject{



    height = 50;
    width = 49;

    constructor(){
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');

        this.x = (200 + Math.random()*500).toFixed(0);
        this.y = 410;
    }
}