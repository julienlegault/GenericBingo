// The cells that dictate if you have won the game
const victoryConditions = [
   [0,1,2,3,4],
   [5,6,7,8,9],
   [10,11,12,13,14],
   [15,16,17,18,19],
   [20,21,22,23,24],
   [0,5,10,15,20],
   [1,6,11,16,21],
   [2,7,12,17,22],
   [4,9,14,19,24],
   [3,8,13,18,23],
   [4,8,12,16,20],
   [0,6,12,18,24],
];

// Variables to keep track of cells and the phrases in those cells
var coloredArray = [];
var victoryArray = [];
var arrayOfPhrases = [];

// onload pulls phrase data from local storage to fill the cells
window.onload = function() {
    arrayOfPhrases = JSON.parse(localStorage.getItem('arrayOfPhrases'));
    createCells();
}

/**
 * Fills cells with random phrases, adds their onclick events, and gives them all a numbered id
 */
function createCells() {
   var cells = document.getElementById('table').getElementsByTagName('td');
   if(arrayOfPhrases != null && arrayOfPhrases.length > 0) {
      document.getElementById('inputBox').value = arrayOfPhrases.join(",");
      for(i = 0; i < cells.length; i++) {
         if(i != 12) {
            var randomNumber = Math.floor(Math.random() * arrayOfPhrases.length);
            var newText = arrayOfPhrases[randomNumber];
            cells[i].textContent = newText;
            cells[i].addEventListener('click', turnRed);
            cells[i].id = i;
            arrayOfPhrases.splice(randomNumber, 1);
         }
      }
   } else {
      for(i = 0; i < cells.length; i++) {
         if(i != 12) {
            var randomNumber = Math.floor(Math.random() * 100) + 1;
            cells[i].textContent = randomNumber;
            cells[i].addEventListener('click', turnRed);
            cells[i].id = i;
         }
      }
   }
   updateCellChecked(cells[12], 'checked');
   cells[12].id = 12;
   coloredArray.push(12);
}

/**
 * onClick event for cells
 * Checks if the cell has already been checked off and if so un-checks it
 * Checks off cells that haven't been checked off
 * @returns if the cell is already in a victory row
 */
function turnRed() {
   let cellNum = parseInt(this.id);
   if(victoryArray.includes(cellNum)){
      return;
   } else if(coloredArray.includes(cellNum)){
      updateCellChecked(this, 'unchecked');
      coloredArray.splice(coloredArray.indexOf(cellNum), 1);
   } else {
      updateCellChecked(this, 'checked');
      coloredArray.push(cellNum);
      checkVictory();
   }
}

/**
 * Switch function that checks and unchecks cells based on its checkMark param
 * @param {td object} cell The cell to be interacted with
 * @param {'unchecked', 'checked', or 'victory'} checkMark The type of check to give it
 */
function updateCellChecked(cell, checkMark){
   switch(checkMark){
      case 'unchecked':
         //cell.style.background = "#FFF";
         cell.classList.remove('x_mark');
         break;
      case 'checked':
         //cell.style.background = "#F0522C";
         cell.classList.add('x_mark');
         break;
      case 'victory':
         //cell.style.background = "#7EC243";
         cell.classList.remove('x_mark');
         cell.classList.add('o_mark');
         break;
   }
}

/**
 * Checks if any victory condition has been met and if so marks those cells with the victory mark
 */
function checkVictory() {
   for(var array of victoryConditions) {
      let victoryAchieved = true;
      for(var x of array){
         if(!coloredArray.includes(x)){
            victoryAchieved = false;
         }  
      }
      if (victoryAchieved){
         victoryArray.push(...array);
         for(var x of array){
            updateCellChecked(document.getElementById(x), 'victory');
         }
      }
   }
}

/**
 * Stores the phrases input into the box in local storage
 */
function savePhrases() {
   arrayOfPhrases = document.getElementById('inputBox').value.split(",");
   localStorage.setItem('arrayOfPhrases', JSON.stringify(arrayOfPhrases));
   createCells();
}