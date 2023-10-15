var coloredArray = [];
var victoryArray = [];
var arrayOfPhrases = [];

window.onload = function() {
    arrayOfPhrases = JSON.parse(localStorage.getItem('arrayOfPhrases'));
    document.getElementById('inputBox').value = arrayOfPhrases.join(",");
    createCells();
}

function createCells() {
   var cells = document.getElementById('table').getElementsByTagName('td');
   if(arrayOfPhrases.length > 0) {
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
   }
   updateBackgroundColor(cells[12], 'red');
   cells[12].id = 12;
   coloredArray.push(12);
}

function turnRed() {
   let cellNum = parseInt(this.id);
   if(victoryArray.includes(cellNum)){
      return;
   } else if(coloredArray.includes(cellNum)){
      updateBackgroundColor(this, 'white');
      coloredArray.splice(coloredArray.indexOf(cellNum), 1);
   } else {
      updateBackgroundColor(this, 'red');
      coloredArray.push(cellNum);
      checkVictory();
   }
}

function updateBackgroundColor(cell, color){
   switch(color){
      case 'white':
         cell.style.background = "#FFF";
         break;
      case 'red':
         cell.style.background = "#F0522C";
         break;
      case 'green':
         cell.style.background = "#7EC243";
         break;
   }
}

function checkVictory() {
   if(test([0,1,2,3,4])) { greeny([0,1,2,3,4]) }
   if(test([5,6,7,8,9])) { greeny([5,6,7,8,9]) }
   if(test([10,11,12,13,14])) { greeny([10,11,12,13,14]) }
   if(test([15,16,17,18,19])) { greeny([15,16,17,18,19]) }
   if(test([20,21,22,23,24])) { greeny([20,21,22,23,24]) }
   if(test([0,5,10,15,20])) { greeny([0,5,10,15,20]) }
   if(test([1,6,11,16,21])) { greeny([1,6,11,16,21]) }
   if(test([2,7,12,17,22])) { greeny([2,7,12,17,22]) }
   if(test([3,8,13,18,23])) { greeny([3,8,13,18,23]) }
   if(test([4,9,14,19,24])) { greeny([4,9,14,19,24]) }
   if(test([0,6,12,18,24])) { greeny([0,6,12,18,24]) }
   if(test([4,8,12,16,20])) { greeny([4,8,12,16,20]) }
}

function greeny(array) {
   victoryArray.push(...array);
   for(var x of array){
      updateBackgroundColor(document.getElementById(x), 'green');
   }
}

function test(array) {
   for(var x of array){
      if(!coloredArray.includes(x)){
         return false;
      }  
   }
   return true;
}

function savePhrases() {
   arrayOfPhrases = document.getElementById('inputBox').value.split(",");
   console.log(arrayOfPhrases);
   localStorage.setItem('arrayOfPhrases', JSON.stringify(arrayOfPhrases));
   createCells();
}