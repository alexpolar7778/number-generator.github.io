let userName = prompt("Введіть своє ім'я:");
document.getElementById("user-name").innerText = userName ? userName : "Гравець";

let userScore = 0;
let computerScore = 0;

document.getElementById("message").innerText = "";

document.getElementById("generate").addEventListener("click", () => {
  let userNumber = Math.floor(Math.random() * 10) + 1;
  let computerNumber = Math.floor(Math.random() * 10) + 1;

  document.getElementById("user-number").innerText = userNumber;
  document.getElementById("computer-number").innerText = computerNumber;

  if (userNumber > computerNumber) {
    userScore++;
    document.getElementById("user-score").innerText = userScore;
  } else if (computerNumber > userNumber) {
    computerScore++;
    document.getElementById("computer-score").innerText = computerScore;
  }

  if (userScore === 3 || computerScore === 3) {
    let winnerName = userName ? userName : "Гравець";

    let winnerMessage = userScore === 3 
      ? `${winnerName} перемагає з рахунком ${userScore} : ${computerScore}!`
      : `Комп'ютер перемагає з рахунком ${computerScore} : ${userScore}!`;

    document.getElementById("message").innerText = winnerMessage;
    setTimeout(resetGame, 8000);
  }
});

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("user-number").innerText = "-";
  document.getElementById("computer-number").innerText = "-";
  document.getElementById("message").innerText = "";
}