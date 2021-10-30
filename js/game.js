let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');

    // ein Objekt der Klasse "World" wird erstellt. Und mit dem Objekt "world" auch alle anderen Objekte die in der Klasse "World" definiert (erstellt) werden.
    // dabei wird der world das canvas und das keyboard übergeben.
    world = new World(canvas, keyboard);
}

/**
 * es wird geprüft ob eine der pfeiltasten oder die leertaste gedrückt und/oder losgelassen wurde. demzufolge wird ein parameter geändert
 * 
 */
window.addEventListener('keydown', e => {
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
window.addEventListener('keyup', e => {
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