let phrasesBlockOne = ["Avec", "Quelle que soit", "Tant que durera"];
let phrasesBlockTwo = ["l'humanité", "la vie", "la situation"];
let phrasesBlockTree = ["les choses vont", "la crise va", "les déplacement vont"];
let phrasesBlockFour = ["progresser", "s’ameliorer", "changer"];


var divSentences = document.getElementById("showSentences");
var number = 3;
function getRandomSentences() {
      function generateRandomNumber(num) {
            var result = Math.floor((Math.random() * num));
            return result;
      }
      for(var i = 0; i < 3; i++) {
            var text = phrasesBlockOne[generateRandomNumber(number)] + " " + phrasesBlockTwo[generateRandomNumber(number)] + " " + phrasesBlockTree[generateRandomNumber(number)]  + " " + phrasesBlockFour[generateRandomNumber(number)];
            var newQuote = document.createElement("p");
            divSentences.appendChild(newQuote);
            newQuote.setAttribute("id", "quote"+i);  
            document.getElementById("quote"+i).innerText = text;
      }
}


 
 
 
 
