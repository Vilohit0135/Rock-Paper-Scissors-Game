      const score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        }

      

        updateScore()


      function playGame(playerMove) {
        const computerMove12 = pickComputerMove();
        let results = "";

        if (playerMove === "Scissors") {
          if (computerMove12 === "Rock") {
            results = "You lose!";
          } else if (computerMove12 === "Paper") {
            results = "You win!";
          } else if (computerMove12 === "Scissors") {
            results = "Tie";
          }

          console.log(results);
        } else if (playerMove === "Paper") {
          if (computerMove12 === "Rock") {
            results = "You win!";
          } else if (computerMove12 === "Paper") {
            results = "Tie";
          } else if (computerMove12 === "Scissors") {
            results = "You lose!";
          }

          console.log(results);
        } else if (playerMove === "Rock") {
          if (computerMove12 === "Rock") {
            results = "Tie";
          } else if (computerMove12 === "Paper") {
            results = "You lose!";
          } else if (computerMove12 === "Scissors") {
            results = "You win!";
          }

          console.log(results);

     
        }

        if (results === "You win!") {
        score.wins += 1;
        } else if (results === "You lose!") {
        score.losses += 1;
        } else if (results === "Tie") {
        score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));


        updateScore()

        document.querySelector('.js-results').innerHTML = results
        document.querySelector('.js-moves').innerHTML = `      You <img class="move-icon" src="imgs/${playerMove}-emoji.png" alt="">
       <img class="move-icon" src="imgs/${computerMove12}-emoji.png" alt=""> Computer`
       
       
        /*alert(`You picked ${playerMove}, computer picked ${computerMove12}. ${results}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
`); */
      }

      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = "";
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "Rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "Paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "Scissors";
        }
        return computerMove;
      }

      function updateScore(){
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
      }