let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


let player1 = {
    x: 0,
    y: 0,
    pts: 0,
    color: Hexcolor(),
};

let enemies = [{
    x: 0,
    y: 0,
    color: '',
}];


function Hexcolor() {
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

setInterval(addMonk, 100);

function addMonk() {
    if(enemies.length < 100) {
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
            console.clear();
            console.log(`Points: ${player1.pts}`)
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

function ia() {
    if(enemies.length > 0) {
        const bot = proxenemy(player1);
        let event = {};
        if(player1.x > bot.x) {
            event.key = 'ArrowLeft';
        } else if(player1.x < bot.x) {
            event.key = 'ArrowRight';
        } else if(player1.y > bot.y) {
            event.key = 'ArrowUp';
        } else if(player1.y < bot.y) {
            event.key = 'ArrowDown';
        }
        movePlayer(event);
    }
}

document.addEventListener('keydown', movePlayer);

function proxenemy(player) {
    let SelectEnemy = enemies[0];
    for(let i = 1; i < enemies.length; i++) {
        const AtualEnemy = enemies[i];
        var DistanceSelected = 0;
        if(player.x > SelectEnemy.x){
            DistanceSelected = player.x - SelectEnemy.x
        } else{
            DistanceSelected = SelectEnemy.x - player.x
        }
        if(player.y > SelectEnemy.y) {
            DistanceSelected = DistanceSelected + (player.y - SelectEnemy.y)
        } else {
            DistanceSelected = DistanceSelected + (SelectEnemy.y - player.y)
        }

        var DistanceAtual = 0;
        if(player.x > AtualEnemy.x){
            DistanceAtual = player.x - AtualEnemy.x
        } else{
            DistanceAtual = AtualEnemy.x - player.x
        }
        if(player.y > AtualEnemy.y) {
            DistanceAtual = DistanceAtual + (player.y - AtualEnemy.y)
        } else {
            DistanceAtual = DistanceAtual + (AtualEnemy.y - player.y)
        }
        if(DistanceSelected > DistanceAtual) {
            SelectEnemy = AtualEnemy;
        }
    }
    return SelectEnemy
}

setInterval(ia, 30);

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
