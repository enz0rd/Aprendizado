let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let player1 = {
    x: 0,
    y: 0,
}

function drawPlayer() {
    context.fillStyle = "turquoise";
    context.fillRect(player1.x, player1.y, 1, 1);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGame() {
    clearCanvas();
    drawPlayer();
}

document.addEventListener('keydown', movePlayer);

function movePlayer(event) {
    if(event.key == 'ArrowUp') {
        player1.y = player1.y - 1;
    }
    if(event.key == 'ArrowDown') {
        player1.y = player1.y + 1;
    }
    if(event.key == 'ArrowLeft') {
        player1.x = player1.x - 1;
    }
    if(event.key == 'ArrowRight') {
        player1.x = player1.x + 1;
    }
    drawGame();
}

document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
document.getElementById("drawPlayer").addEventListener("click", drawPlayer);
