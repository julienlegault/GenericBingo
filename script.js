var coloredArray = [];
var arrayOfPhrases = ['Chris “daddy legault” stays silent for three minutes', 'Diane laughs awkwardly/ uncomfortably',
   'Diane “nice color on it” in reference to black eye and Chris laughs in fake humor',
   'Diane brings up Monique’s boyfriend',
   'Monique and Julien look at each other like “wtf did mom just say”',
   'Topic of discussion: Jobs',
   'Topic of discussion: Four Cs',
   'Topic of discussion: Weather',
   'Topic of discussion: Trump injecting bleach',
   'Topic of discussion: Cooking they have done recently',
   'Topic of discussion: How crazy the dogs must be',
   'Monique has nam flashbacks about mom’s cooking',
   'Diane mentions hair dye',
   'Chris goes to the bathroom and comes back with grapes',
   'Chris stands for a weird amount of time behind the chair',
   'Chris puts his hands in his pockets while leaning back to laugh',
   'Diane brings up Audrie going to school next year',
   'One of the Legaults bring up the difference between those who like warm/cold',
   'Serve Seafood',
   'Give us more than what we need in the bag',
   'Someone asks if we’ve gotten sick of each other',
   'They look like they are going crazy/ going to murder each other',
   'Diane brings up shooting squirrels because that\'s the only thing that\'s happened to them',
   'Chris pokes at the fire for a while and then adds log',
   'They bring up your grandparents',
   'They bring up Easter zoom',
   'Monique and Audrie talk about medical stuff',
   'Diane brings up how Harvard is doing something dumb',
   'Diane brings up the work she is able to give her assistant',
   'They complain about something missing from the grocery store',
   'Monique hates online classes',
   'Awkward silence for 5 minutes',
   'Joke about domestic abuse'
   ];

window.onload = function() {
   var cells = document.getElementById('table').getElementsByTagName('td');
      for(i = 0; i < cells.length; i++) {
         if(i != 12) {
				var randomNumber = Math.floor(Math.random() * arrayOfPhrases.length);
				var newText = arrayOfPhrases[randomNumber];
				cells[i].textContent = newText;
            cells[i].addEventListener('click', turnRed);
				arrayOfPhrases.splice(randomNumber, 1);
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
