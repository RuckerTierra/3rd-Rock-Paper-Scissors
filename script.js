/* Project: build a rock, paper, scissors game */
// Step 1: create elements
// Step 2: 
// Step 3: 
// Step 4: 
// Step 5: 


/* ELEMENTS */ 
const userScore = 0;
const computerScore = 0;
const userScore_scan = document.getElementById('user-score');
const userComputer_scan = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector("#scoreBoard");
const resultEl = document.querySelector("#winner");
const rockEl = document.querySelector('.rock'); 
const paperEl = document.querySelector('.paper');
const scissorsEl = document.querySelector('.scissors');


rockEl.addEventListener('click', function(){
  console.log('you clicked on rock');
  game('rock');
})
paperEl.addEventListener('click', function(){
  console.log('you clicked on paper');
  game('rock');
})
scissorsEl.addEventListener('click', function(){
  console.log('you clicked on scissors');

})




/* FUNCTIONS */
function game(){
  var player;
}












// function displayWinner(){
//   if (your choice is winner){
//     // console.log("You won");
//   } else if (SPC is winner) {
//     // console.log("You lost");
//   } else {
//     // console.log("It's tie!");
//   }
// }