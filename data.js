var quotes = {
      quotesOne : {
            quotesBlockOne: ["Avec", "Quelle que soit", "Tant que durera"],
            quotesBlockTwo: ["l'humanité", "la vie", "le temps"],
            quotesBlockTree: ["les choses vont", "le hommes vont", "la philosophie va"],
            quotesBlockFour: ["progresser", "se développer", "changer"]
      },

      quotesTwo : {
            quotesBlockOne: ["Le travail", "La haine", "L'amour"],
            quotesBlockTwo: ["demande", "oblige", "impose"],
            quotesBlockTree: ["de comprendre", "de changer", "à maitriser"],
            quotesBlockFour: ["la vie", "les habitudes", "les choses"]
      }
}

var containerQuotes = document.getElementById("quotes");
var containerError = document.getElementById("error");

var btnGenerateQuote = document.getElementById("generate");
var selectTheme = document.getElementById("themes");
var selectNumbers = document.getElementById("numbers");

var generatedQuoite = [];
var numberRand = 3;

function generateRandomNumber(num) {
      var result = Math.floor((Math.random() * num));
      return result;
}
var numberTheme = selectTheme.options[selectTheme.selectedIndex].value;
var numberQuotes = selectNumbers.options[selectNumbers.selectedIndex].value;

selectNumbers.addEventListener("change", function() {
      numberQuotes = this.value;
});

selectTheme.addEventListener("change", function() {
      numberTheme = this.value;
   
});
 
function generateRandomQuotes(choice) {
      for(var i = 0; i < numberQuotes; i++) {
            if(choice == 1 || choice == 2) {
                  containerError.innerText = "";
                  var newQuote = document.createElement("p");
                  newQuote.setAttribute("id", "quote"+i);
                  containerQuotes.appendChild(newQuote);
                  document.getElementById("quote"+i).replaceWith(newQuote);
                  numberRand == generateRandomNumber(numberRand);
                        if(choice == 1) {
                        generatedQuoite.push([
                              quotes.quotesOne.quotesBlockOne[generateRandomNumber(numberRand)]  + " " +
                              quotes.quotesOne.quotesBlockTwo[generateRandomNumber(numberRand)]  + " " +
                              quotes.quotesOne.quotesBlockTree[generateRandomNumber(numberRand)] + " " +
                              quotes.quotesOne.quotesBlockFour[generateRandomNumber(numberRand)]
                        ]);
                        newQuote.innerText = generatedQuoite;  

                  } else if(choice == 2){
                        generatedQuoite.push([
                              quotes.quotesTwo.quotesBlockOne[[generateRandomNumber(numberRand)]]  + " " +
                              quotes.quotesTwo.quotesBlockTwo[[generateRandomNumber(numberRand)]]  + " " +
                              quotes.quotesTwo.quotesBlockTree[[generateRandomNumber(numberRand)]] + " " +
                              quotes.quotesTwo.quotesBlockFour[[generateRandomNumber(numberRand)]]
                        ]);
                        newQuote.innerText = generatedQuoite;  
            
                  }
            } else {
                  containerQuotes.innerHTML ="";
                  containerError.innerText = "Erreur de saisie";
           
            }

            generatedQuoite = [];

         
      }

      var quotesLength = containerQuotes.childNodes.length;
      if(quotesLength > numberQuotes) {
            var newNumber = quotesLength - numberQuotes;
            for(var i = 0; i < newNumber; i++) {
                  containerQuotes.removeChild(containerQuotes.lastChild);
            }
      }
}

btnGenerateQuote.addEventListener("click", function() {
      generateRandomQuotes(numberTheme);
});


 


 
 
 
 
