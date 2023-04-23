import React, { useState } from "react";

const choices = ["rock", "paper", "scissors"];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [winner, setWinner] = useState(null);

  function handleChoice(choice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === "rock" && computerChoice === "scissors") {
      setScore((score) => ({ player: score.player + 1, computer: score.computer }));
    } else if (choice === "paper" && computerChoice === "rock") {
      setScore((score) => ({ player: score.player + 1, computer: score.computer }));
    } else if (choice === "scissors" && computerChoice === "paper") {
      setScore((score) => ({ player: score.player + 1, computer: score.computer }));
    } else if (choice === computerChoice) {
      setScore((score) => ({ player: score.player, computer: score.computer }));
    } else {
      setScore((score) => ({ player: score.player, computer: score.computer + 1 }));
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setScore({ player: 0, computer: 0 });
    setWinner(null);
  }

  function determineWinner() {
    if (score.player === 2) {
      setWinner("player");
    } else if (score.computer === 2) {
      setWinner("computer");
    }
  }

  React.useEffect(() => {
    determineWinner();
  }, [score]);

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      {winner ? (
        <div>
          <h2>Game over! {winner} wins!</h2>
          <button onClick={resetGame}>Play again?</button>
        </div>
      ) : (
        <div>
          <p>Player score: {score.player}</p>
          <p>Computer score: {score.computer}</p>
          <div>
            {choices.map((choice) => (
              <button key={choice} onClick={() => handleChoice(choice)}>
                {choice}
              </button>
            ))}
          </div>
          <p>Player chose: {playerChoice}</p>
          <p>Computer chose: {computerChoice}</p>
        </div>
      )}
    </div>
  );
}

export default App;
