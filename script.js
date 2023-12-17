const container = document.querySelector('#container');

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener('click', () => { playRound("Rock", getComputerChoice()) });
btnPaper.addEventListener('click', () => { playRound("Paper", getComputerChoice()) });
btnScissors.addEventListener('click', () => { playRound("Scissors", getComputerChoice()) });

const result = document.querySelector('#result');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

let you = 0;
let cpu = 0;

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const idx = Math.floor(Math.random() * 3);
  return choice[idx];
}

function playRound(playerSelection, computerSelection) {
  const win = `You Win! ${playerSelection} beats ${computerSelection}.`;
  const lose = `You Lose! ${computerSelection} beats ${playerSelection}.`;
  const draw = `It's a Draw! You both picked ${playerSelection}.`;

  if (playerSelection === computerSelection) {
    result.textContent = draw;
  }
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
          (playerSelection === "Scissors" && computerSelection === "Paper") ||
          (playerSelection === "Paper" && computerSelection === "Rock")) {
    result.textContent = win;
    you++;
  }
  else {
    result.textContent = lose;
    cpu++;
  }
  score.textContent = `YOU ${you} - ${cpu} CPU`;

  if (you === 5) {
    winner.textContent = "WINNER POG";
    restartGame();
  } else if (cpu === 5) {
    winner.textContent = "LOSER HAHAHA";
    restartGame();
  }
}

function restartGame() {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;

  const restart = document.querySelector('#restart');
  const playAgain = document.createElement('button');
  
  restart.appendChild(playAgain);

  playAgain.textContent = "PLAY AGAIN";

  playAgain.addEventListener('click', () => {
    result.textContent = '';
    score.textContent = '';
    winner.textContent = '';
    you = 0;
    cpu = 0;
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    restart.removeChild(playAgain);
  });
}