let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


let player1 = {
    x: 0,
    y: 0,
    pts: 0,
    color: Hexcolor(),
};

let enemies = [{
    x: 5,
    y: 5,
    color: '',
}];


function Hexcolor() {
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

setInterval(addMonk, 2000);

function addMonk() {
    if(enemies.length < 15) {
        enemies.push({
            x: Math.floor(Math.random() * (19 - 0)),
            y: Math.floor(Math.random() * (19 - 0)),
            color: Hexcolor(),
        })
    }
}

function checkCollision() {
    for(let i = 0; i < enemies.length; i++) {
        if((player1.x == enemies[i].x) && (player1.y == enemies[i].y)) {
            enemies.splice(i, 1);
            player1.pts = player1.pts + 1;
        }
    }
}

function drawPlayer() {
    context.fillStyle = player1.color
    context.fillRect(player1.x, player1.y, 1, 1);
}

function drawMonk(enemy) {
    context.fillStyle = enemy.color;
    context.fillRect(enemy.x, enemy.y, 1, 1);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGame() {
    clearCanvas();
    drawPlayer();
    for(let i = 0; i < enemies.length; i++){
        drawMonk(enemies[i]);
    }
    checkCollision();
}

document.addEventListener('keydown', movePlayer);

function movePlayer(event) {
    if(event.key == 'ArrowUp') {
        if(player1.y >= 0) {
            player1.y = player1.y - 1;
        }
    }
    if(event.key == 'ArrowDown') {
        if(player1.y <= 19) {
            player1.y = player1.y + 1;
        }
    }
    if(event.key == 'ArrowLeft') {
        if(player1.x >= 0) {
            player1.x = player1.x - 1;
        }
    }
    if(event.key == 'ArrowRight') {
        if(player1.x <= 19) {
            player1.x = player1.x + 1;
        }
    }
    if(player1.y > 19) {
        player1.y = 0;
    }
    if(player1.y < 0) {
        player1.y = 19;
    }
    if(player1.x < 0) {
        player1.x = 19;
    }
    if(player1.x > 19) {
        player1.x = 0;
    }
    drawGame();
}

document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
document.getElementById("drawPlayer").addEventListener("click", drawPlayer);
