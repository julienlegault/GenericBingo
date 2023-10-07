var coloredArray = [];
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
            arrayOfPhrases.splice(randomNumber, 1);
         }
      }
   }
   cells[12].style.background="#F0522C";
   coloredArray.push(cells[12]);
}

function turnRed() {
   this.style.background="#F0522C";
   coloredArray.push(this);
   checkVictory();
}

function checkVictory() {
   if(test(0) && test(1) && test(2) && test(3) && test(4)) { greeny([0,1,2,3,4]) }
   if(test(5) && test(6) && test(7) && test(8) && test(9)) { greeny([5,6,7,8,9]) }
   if(test(10) && test(11) && test(12) && test(13) && test(14)) { greeny([10,11,12,13,14]) }
   if(test(15) && test(16) && test(17) && test(18) && test(19)) { greeny([15,16,17,18,19]) }
   if(test(20) && test(21) && test(22) && test(23) && test(24)) { greeny([20,21,22,23,24]) }
   if(test(0) && test(5) && test(10) && test(15) && test(20)) { greeny([0,5,10,15,20]) }
   if(test(1) && test(6) && test(11) && test(16) && test(21)) { greeny([1,6,11,16,21]) }
   if(test(2) && test(7) && test(12) && test(17) && test(22)) { greeny([2,7,12,17,22]) }
   if(test(3) && test(8) && test(13) && test(18) && test(23)) { greeny([3,8,13,18,23]) }
   if(test(4) && test(9) && test(14) && test(19) && test(24)) { greeny([4,9,14,19,24]) }
   if(test(0) && test(6) && test(12) && test(18) && test(24)) { greeny([0,6,12,18,24]) }
   if(test(4) && test(8) && test(12) && test(16) && test(20)) { greeny([4,8,12,16,20]) }
}

function greeny(array) {
   var cells = document.getElementById('table').getElementsByTagName('td');
   for(i=0; i<array.length;i++){
      cells[array[i]].style.background="#7EC243";
   }
}

function test(number) {
   var cells = document.getElementById('table').getElementsByTagName('td');
   return coloredArray.includes(cells[number]);
}

function savePhrases() {
   arrayOfPhrases = document.getElementById('inputBox').value.split(",");
   console.log(arrayOfPhrases);
   localStorage.setItem('arrayOfPhrases', JSON.stringify(arrayOfPhrases));
   createCells();
}