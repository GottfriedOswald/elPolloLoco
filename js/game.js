let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My Character is ', world.character);
    console.log('My Chicken is ', world.enemies[0]);
    console.log('My Cloud is ', world.clouds[0]);
    console.log('My Landscape is ', world.landscapes[0]);
}

