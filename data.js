let phrasesBlockOne = ["Avec", "Quelle que soit", "Tant que durera"];
let phrasesBlockTwo = ["l'humanité", "la vie", "la situation actuelle"];
let phrasesBlockTree = ["les choses vont", "la crise va", "les déplacement vont"];
let phrasesBlockFour = ["progresser", "s’ameliorer", "changer"];


var divSentences = document.getElementById("showSentences");
var btnGenerateOne = document.getElementById("generateOne");
var btnGenerateTwo = document.getElementById("generateTwo");
var selectNumbers = document.getElementById("numbers");

var numberRand = 3;

function generateRandomNumber(num) {
      var result = Math.floor((Math.random() * num));
      return result;
}
var numberSentences = selectNumbers.options[selectNumbers.selectedIndex].value;
selectNumbers.addEventListener("change", function() {
      var selectValue = selectNumbers.options[selectNumbers.selectedIndex].value;
      numberSentences = selectValue;
});
 
function getRandomSentences() {
      for(var i = 0; i < numberSentences; i++) {
            var newQuote = document.createElement("p");
            var text = phrasesBlockOne[generateRandomNumber(numberRand)] + " " + phrasesBlockTwo[generateRandomNumber(numberRand)] + " " + phrasesBlockTree[generateRandomNumber(numberRand)]  + " " + phrasesBlockFour[generateRandomNumber(numberRand)];
            newQuote.setAttribute("id", "quote"+i);
            divSentences.appendChild(newQuote);
            document.getElementById("quote"+i).replaceWith(newQuote);
            newQuote.innerText = text;   
            var defaultText  =  document.getElementById("quote"+i).textContent;
            var quotsLength = divSentences.childNodes.length;
            if(quotsLength > numberSentences) {
                  var newNumber = quotsLength - numberSentences;
                  divSentences.removeChild(divSentences.childNodes[newNumber]);
            }
            console.log(defaultText);
      }
}

btnGenerateOne.addEventListener("click", function() {
      getRandomSentences();
});


btnGenerateOne.addEventListener("click", function() {
      getRandomSentences();
});


 
 
 
 
