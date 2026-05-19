 
    function playGame(userChoice) {
      const choices = ["Rock", "Paper", "Scissors"];

      const randomIndex = Math.floor(Math.random() * 3);
      const computerChoice = choices[randomIndex];

      let result = "";

      if (userChoice === computerChoice) {
        result = "It's a Draw!";
      } 
      else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
      ) {
        result = "You Win! ";
      } 
      else {
        result = "Computer Wins! ";
      }

      document.getElementById("choices").innerHTML =
        `You chose <b>${userChoice}</b><br>Computer chose <b>${computerChoice}</b>`;

      document.getElementById("result").innerHTML = result;
    }
  