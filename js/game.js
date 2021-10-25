let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');

    world = new World(canvas); // ein Objekt der Klasse "World" wird erstellt. Und mit dem Objekt "world" auch alle anderen Objekte die in der Klasse "World" definiert (erstellt) werden.

    console.log('My Character is ', world.character);
    console.log('My Chicken is ', world.enemies[0]);
    console.log('My Cloud is ', world.clouds[0]);
    console.log('My Landscape is ', world.landscapes[0]);
}

