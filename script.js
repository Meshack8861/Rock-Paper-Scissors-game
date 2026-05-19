/*
Executes a full round of Rock, Paper, Scissors when a user clicks a choice button.
 */
function playGame(userChoice) {
  const choices = ["Rock", "Paper", "Scissors"];

  // Generate a random integer index between 0 and 2, then pick the corresponding option for the computer
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
 
  let result = "";

  // Both player and computer select the exact same move
  if (userChoice === computerChoice) {
    result = "It's a Draw!";
  } 
  // Evaluate all possible combinations where the player wins
  else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You Win! ";
  } 
  // If it's not a tie and the user didn't win, the computer wins by default
  else {
    result = "Computer Wins! ";
  }

  
  document.getElementById("choices").innerHTML =
    `You chose <b>${userChoice}</b><br>Computer chose <b>${computerChoice}</b>`;

  // Target the result placeholder to display the final win/loss/draw status
  document.getElementById("result").innerHTML = result;
}
