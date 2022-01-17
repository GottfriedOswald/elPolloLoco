let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');

    // ein Objekt der Klasse "World" wird erstellt. Und mit dem Objekt "world" auch alle anderen Objekte die in der Klasse "World" definiert (erstellt) werden.
    // dabei wird der world das canvas und das keyboard übergeben.
    world = new World(canvas, keyboard);
}


document.getElementById('btnMoveLeft').addEventListener("touchstart", () =>{
    keyboard.LEFT = true;
});
document.getElementById('btnMoveLeft').addEventListener('touchend', ()=>{
    keyboard.LEFT = false;
});
document.getElementById('btnMoveRight').addEventListener('touchstart', ()=>{
    keyboard.RIGHT = true;
});
document.getElementById('btnMoveRight').addEventListener('touchend', ()=>{
    keyboard.RIGHT = false;
});
document.getElementById('btnThrowBottle').addEventListener('touchstart', ()=>{
    keyboard.D = true;
});
document.getElementById('btnThrowBottle').addEventListener('touchend', ()=>{
    keyboard.D = false;
});
document.getElementById('btnJump').addEventListener('touchstart', ()=>{
    keyboard.UP = true;
});
document.getElementById('btnJump').addEventListener('touchend', ()=>{
    keyboard.UP = false;
});

/**
 * es wird geprüft ob eine der pfeiltasten oder die leertaste gedrückt und/oder losgelassen wurde. demzufolge wird ein parameter geändert
 * 
 */
window.addEventListener('keydown', e => {
    console.log(e);
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
    if (e.code === "KeyD") {
        keyboard.D = true;
        setTimeout(() => {
            keyboard.D = false;
        },101);
    }
});

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
    if (e.code === "KeyD") {
        keyboard.D = false;
    }
});

window.addEventListener('keypress', logKey => {
    // console.log(logKey);
    if (logKey.code === "KeyH") {
        showHelpdesk();
    }
});

window.addEventListener('keypress', logKey => {
    // console.log(logKey);
    if (logKey.code === "KeyM") {
        this.musicOnOff();
    }
});

function musicOnOff(){
    if (keyboard.M == false) {
        keyboard.M = true;
    }else{
        keyboard.M = false;
    }
}

function showHelpdesk() {
    let hv = document.getElementById('helpview');
    if (hv.classList.contains('d-none')) {
        hv.classList.remove('d-none');
    }else{
        hv.classList.add('d-none');
    }
    
}

function startGame() {
    document.getElementById('startImage').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('startBtn').classList.add('d-none');
    document.getElementById('startBtnMobile').classList.add('d-none');
    document.getElementById('resetBtn').classList.remove('d-none');
    init();
}

function resetGame() {
    location.reload();
}