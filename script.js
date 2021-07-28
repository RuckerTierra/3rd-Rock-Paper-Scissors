/* Project: build a rock, paper, scissors game */
// Step 1: create elements
// Step 2: add event listener functions for when choice is selected
// Step 3: create function to store userChoice 
// Step 4: create function for CPU random choice
// Step 5: keep score for both CPU and user
// Step 6: 
// Project: in progress


/* ELEMENTS */ 
let userScore = 0;
let computerScore = 0;
const userScoreEl = document.getElementById('userScoreDisplay');
const computerScoreEl = document.getElementById('computerScoreDisplay');
const scoreBoardEl = document.querySelector("#scoreBoard");
const resultEl = document.querySelector("#winner");
const rockEl = document.querySelector('.rock'); 
const paperEl = document.querySelector('.paper');
const scissorsEl = document.querySelector('.scissors');
let userChoice;

/* FUNCTIONS */
/* random function for CPU choice */
function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


/* function for user to select choice */
function game(userChoice){
  const computerChoice = getComputerChoice();
  console.log('user choice is ' + userChoice);
  console.log('computer choice is ' + computerChoice);

// conditional statements for each outcome 
  // if user selects 'rock' possible outcomes
  if (userChoice == "rock" && computerChoice == "rock"){
    // console.log('Rock equals Rock. It\'s a draw.');
    // console.log("The score remains as is.");
    resultEl.innerHTML = "Rock equals rock. It\'s a draw. The score remains as is.";
  } else if (userChoice == "rock" && computerChoice == "paper"){
    // console.log("Paper covers rock. User loses.");
    
    resultEl.innerHTML = "Paper covers rock. User loses.";
    computerScore += 1;
    // console.log("computerScore is " + computerScore);
    computerScoreEl.innerHTML = computerScore;
  } else if (userChoice == 'rock' && computerChoice == 'scissors'){
    console.log('Rock beats scissors. User wins.');
    resultEl.innerHTML = 'Rock beats scissors. User wins.';
    userScore += 1;
    //console.log("userScore is " + userScore);
    userScoreEl.innerHTML = userScore;
  } // if user selects 'paper' possible outcomes
  else if (userChoice == 'paper' && computerChoice == 'rock'){
    // console.log('Paper covers rock. User wins.');
    resultEl.innerHTML = 'Paper covers rock. User wins.';
    userScore += 1;
    // console.log("userScore is " + userScore);
    userScoreEl.innerHTML = userScore;
  } else if (userChoice == 'paper' && computerChoice == 'paper'){
    // console.log("Paper equals paper. It\'s a draw.");
    resultEl.innerHTML = "Rock equals Rock. It\'s a draw. The score remains as is.";
    // console.log("The score remains as is.");
  } else if (userChoice == 'paper' && computerChoice == 'scissors'){
    // console.log("Scissors beats paper. User loses.");
    resultEl.innerHTML = "Scissors beats paper. User loses.";
    computerScore += 1;
    // console.log("computerScore is " + computerScore);
    computerScoreEl.innerHTML = computerScore;
  } // if user selects 'scissors' possible outcomes
  else if (userChoice == 'scissors' && computerChoice == 'rock'){
    // console.log('Rock beats scissors. User loses.');
    resultEl.innerHTML = 'Rock beats scissors. User loses.';
    computerScore += 1;
    // console.log("computerScore is " + computerScore);
    computerScoreEl.innerHTML = computerScore;
  } else if (userChoice == "scissors" && computerChoice == 'paper'){
    // console.log('Scissors beats paper. User wins.');
    resultEl.innerHTML = 'Scissors beats paper. User wins.';
    userScore += 1;
    // console.log("userScore is " + userScore);
    userScoreEl.innerHTML = userScore;
  } else {
    // console.log('Scissors equals scissors. It\'s a draw.');
    resultEl.innerHTML = "Scissors equals scissors. It\'s a draw. The score remains as is.";
    // console.log("The score remains as is.");

  }
}
// game('rock');


function main(){
  rockEl.addEventListener('click', function(){
    // console.log('you clicked on rock');
    game('rock');
  });
  paperEl.addEventListener('click', function(){
    // console.log('you clicked on paper');
    game('paper');
  })
  scissorsEl.addEventListener('click', function(){
    // console.log('you clicked on scissors');
    game('scissors');
  })
}
main();

