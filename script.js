/* Project: build a Pokemon rock, paper, scissors game */
// Step 1: create elements & assign value
// Step 2: create function to loop through pokemons on click
// Step 3: 
// Step 4: 
// Step 5: 


/* ELEMENTS */ 
// var choicesEl = document.querySelector('.select-screen').querySelectorAll('.choices');
var selectionEl = document.querySelectorAll('.selection');
var gameState = {
  userSelection: "",
  rivalSelection: ""
};


/* FUNCTIONS */
// console.log(selectionsEl);
var i = 0;
while (i < selectionEl.length){
  selectionEl[i].onclick = function(){
  var selectionName = this.dataset.selection;
  console.log(`i pressed the ` + selectionName);
  gameState.selection = selectionName;

  cpuPick();
  console.log(gameState);
  }
  i++;
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function cpuPick(){
  selectionEl[randomNumber(0, 3)].dataset.selection;
  gameState.rivalselection = selectionEl[randomNumber(0, 3)].dataset.selection;
}