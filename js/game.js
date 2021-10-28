let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');

    world = new World(canvas, keyboard); // ein Objekt der Klasse "World" wird erstellt. Und mit dem Objekt "world" auch alle anderen Objekte die in der Klasse "World" definiert (erstellt) werden.
                                // dabei wird der world das canvas und das keyboard übergeben (warum aber das keyboard, weiß ich noch nicht)

    console.log('My Character is ', world.character);
    console.log('My Chicken is ', world.enemies[0]);
    console.log('My Cloud is ', world.clouds[0]);
    console.log('My Landscape is ', world.landscapes[0]);
}

/**
 * es wird geprüft ob eine der pfeiltasten oder die leertaste gedrückt und/oder losgelassen wurde. demzufolge wird ein parameter geändert
 * 
 */
window.addEventListener('keydown',e => {
    if (e.key === "ArrowUp") {
        keyboard.UP = true;
    }
    if (e.key === "ArrowDown") {
        keyboard.DOWN = true;
    }
    if (e.key === "ArrowRight") {
        keyboard.RIGHT = true;
    }
    if (e.key === "ArrowLeft") {
        keyboard.LEFT = true;
    }
    if (e.key === " ") {
        keyboard.SPACE = true;
    }
})
window.addEventListener('keyup',e => {
    if (e.key === "ArrowUp") {
        keyboard.UP = false;
    }
    if (e.key === "ArrowDown") {
        keyboard.DOWN = false;
    }
    if (e.key === "ArrowRight") {
        keyboard.RIGHT = false;
    }
    if (e.key === "ArrowLeft") {
        keyboard.LEFT = false;
    }
    if (e.key === " ") {
        keyboard.SPACE = false;
    }
})