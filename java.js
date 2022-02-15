const buttons = document.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", () => {
        handleclick(item.id);
        console.log(item.id);
    });
});
const score = document.getElementById("score");

let i = 0;
let computerCount = 0;
let playerCount = 0;

score.innerText = playerCount + " - " + computerCount;

function handleclick(playerSelection) {
    if (playerCount + computerCount >= 5) {
        if (playerCount > computerCount) {
            score.innerText = "You win...";
            return;
        } else if (playerCount < computerCount) {
            score.innerText = "Better luck next time!";
            return;
        } else if (playerCount == computerCount) {
            score.innerText = "A draw that suck.....";
            return;
        }
    } else {
        temp = playRound(playerSelection, computerPlay());
        if (temp[0] == 1) {
            playerCount++;
        } else if (temp[0] == 0) {
            computerCount++;
        } else {
            playerCount++;
            computerCount++;
        }
        score.innerText = playerCount + " - " + computerCount;
        if (playerCount + computerCount >= 5) {
            handleclick(playerSelection);
        }
    }
}

function computerPlay() {
    var moves = ["rock", "penguin", "salmon"];
    var moves = moves[Math.floor(Math.random() * moves.length)];
    return moves;
}
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            return [2, "égalité"];
            break;
        case playerSelection === "salmon" && computerSelection === "rock":
            return [1, "You win! " + playerSelection + " beats " + computerSelection];
            break;
        case playerSelection === "penguin" && computerSelection === "rock":
            return [
                0,
                "You lose! " + computerSelection + " beats " + playerSelection,
            ];
            break;
        case playerSelection === "rock" && computerSelection === "salmon":
            return [
                0,
                "You lose! " + computerSelection + " beats " + playerSelection,
            ];
            break;
        case playerSelection === "penguin" && computerSelection === "salmon":
            return [1, "You win! " + playerSelection + " beats " + computerSelection];
            break;
        case playerSelection === "rock" && computerSelection === "penguin":
            return [1, "You win! " + playerSelection + " beats " + computerSelection];
            break;
        case playerSelection === "salmon" && computerSelection === "penguin":
            return [
                0,
                "You lose! " + computerSelection + " beats " + playerSelection,
            ];
            break;

        default:
    }
}
