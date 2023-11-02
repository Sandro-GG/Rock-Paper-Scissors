choice = ["Rock", "Paper", "Scissors"];
let player;

function promptPlayer() {
  player = prompt("Rock, Paper, or Scissors?");
  player = player[0].toUpperCase() + player.slice(1).toLowerCase();
}

let result = "draw";

function getComputerChoice() {
  const idx = Math.floor(Math.random() * 3);
  return choice[idx];
}

function playRound(playerSelection, computerSelection) {
  const win = `You Win! ${playerSelection} beats ${computerSelection}`;
  const lose = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const draw = `It's a Draw! You both picked ${playerSelection}`;

  if (playerSelection === computerSelection) {
    return draw;
  }
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
           (playerSelection === "Scissors" && computerSelection === "Paper") ||
           (playerSelection === "Paper" && computerSelection === "Rock")) {
    result = "win"
    return win;
  }
  else {
    result = "loss";
    return lose;
  }
}

function keepGoing(you, cpu, games) {
  if (you === 3 || cpu === 3 || games === 5)
    return false;
  return true;
}

function game() {
  let you = 0;
  let cpu = 0;
  let games = 0;
  while (keepGoing(you, cpu, games)) {
    result = "draw";
    promptPlayer();
    games++;
    console.log(playRound(player, getComputerChoice()));
    if (result === "win") {
      you++;
    } else if (result === "loss") {
      cpu++;
    }
    console.log(`game ${games}: you ${you} - ${cpu} computer\n`);
  }
}

game();