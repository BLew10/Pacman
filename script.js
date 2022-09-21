var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 3, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 2, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]

var pacmanInfo = {
    'row': 1,
    'col': 1,
    'score': 0
}



var score = document.querySelector('#score');

// function rotatePacman() {
//     document.getElementById('pacman').classList.add = "rotate-90";
// }

function displayWorld() {
    var content = '';
    for (var i = 0; i < world.length; i++) {
        content += `\n<div class="row">`
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] === 3) {
                content += `\n\t<div class="pacman"></div>`
            }
            else if (world[i][j] === 2) {
                content += `\n\t<div class="brick"></div>`
            } else if (world[i][j] === 1) {
                content += `\n\t<div class="coin"></div>`
            } else if (world[i][j] === 0) {
                content += `\n\t<div class="empty"></div>`
            }
        }
        content += `\n</div>`
    }
    document.querySelector('#world').innerHTML = content;
}
displayWorld();
var pacman = document.querySelector('.pacman');

function changeScore() {
    score.innerHTML = pacmanInfo.score;
}



document.onkeydown = function (e) {
    displayWorld();
    if (e.key === "ArrowDown" && world[pacmanInfo.row + 1][pacmanInfo.col] !== 2) {
        if (world[pacmanInfo.row + 1][pacmanInfo.col] === 1) {
            pacmanInfo.score++;
        }
        pacmanInfo.row += 1;
        pacman.style.transform = 'rotate(270deg)'
        world[pacmanInfo.row][pacmanInfo.col] = 3; //moves pacman to the space below
        world[pacmanInfo.row - 1][pacmanInfo.col] = 0; // eats coin
    } else if (e.key === "ArrowUp" && world[pacmanInfo.row - 1][pacmanInfo.col] !== 2) {
        if (world[pacmanInfo.row - 1][pacmanInfo.col] === 1) {
            pacmanInfo.score++;
        }
        pacmanInfo.row -= 1;
        world[pacmanInfo.row][pacmanInfo.col] = 3;
        world[pacmanInfo.row + 1][pacmanInfo.col] = 0;
    } else if (e.key === "ArrowRight" && world[pacmanInfo.row][pacmanInfo.col + 1] !== 2) {
        if (world[pacmanInfo.row][pacmanInfo.col + 1] === 1) {
            pacmanInfo.score++;
        }
        pacmanInfo.col += 1;
        world[pacmanInfo.row][pacmanInfo.col] = 3;
        world[pacmanInfo.row][pacmanInfo.col - 1] = 0;
    } else if (e.key === "ArrowLeft" && world[pacmanInfo.row][pacmanInfo.col - 1] !== 2) {
        if (world[pacmanInfo.row][pacmanInfo.col - 1] === 1) {
            pacmanInfo.score++;
        }
        pacmanInfo.col -= 1;
        world[pacmanInfo.row][pacmanInfo.col] = 3;
        world[pacmanInfo.row][pacmanInfo.col + 1] = 0;
    }
    changeScore()
    displayWorld();
}
