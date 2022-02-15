function computerPlay() {
    var moves = ["rock", "paper", "scissors"];
    var moves = moves[Math.floor(Math.random() * moves.length)];
    return moves;
}
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            return [2, "égalité"];
            break;
        case playerSelection === "rock" && computerSelection === "scissors":
            return (
                [1, "You win! " + playerSelection + " beats " + computerSelection]
            );
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            return (
                [0, "You lose! " + computerSelection + " beats " + playerSelection]
            );
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            return (
                [0, "You lose! " + playerSelection + " beats " + computerSelection]
            );
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            return (
                [1, "You win! " + computerSelection + " beats " + playerSelection]
            );
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            return (
                [1, "You win! " + playerSelection + " beats " + computerSelection]
            );
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            return (
                [0, "You lose! " + computerSelection + " beats " + playerSelection]
            );
            break;

        default:
    }
}
/*
function game() {
    let i;
    let computerCount = 0;
    let playerCount = 0;
    for (let i = 0; i <= 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        temp = playRound(playerSelection, computerSelection);
        if (temp[0] == 1) {
            playerCount++;
        } else if (temp[0] == 0) {
            computerCount++;
        } else { }
        console.log(temp[1], playerCount, computerCount);
    }
    if (playerCount > computerCount) {
        console.log("You win...");
    } else { console.log("Better luck next time!"); }



}
*/
function playerPlay(){
    const buttons = document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', () => {
          alert(item);
        });
      });
}

const buttons = document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', () => {
        alert(item.id);
    });
  });
