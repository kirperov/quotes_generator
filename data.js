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
var divAlertError = document.createElement("div");
var containerQuotes = document.getElementById("quotes"),
     //containerError = document.getElementById("error"),
    btnGenerateQuote = document.getElementById("generate"),
    selectTheme = document.getElementById("themes"),
    selectNumbers = document.getElementById("numbers"),
    numberTheme = parseInt(selectTheme.options[selectTheme.selectedIndex].value),
    numberQuotes = parseInt(selectNumbers.options[selectNumbers.selectedIndex].value),
    qgeneratedQuote = [],
    numberRand = 3;


function generateRandomNumber(num) {
      return Math.floor((Math.random() * num));
}

selectNumbers.addEventListener("change", function() {
      numberQuotes = parseInt(this.value);
});

selectTheme.addEventListener("change", function() {
      numberTheme = parseInt(this.value);
});

function generateRandomQuotes(choice) {
      var quotesLength = containerQuotes.childNodes.length;
      if(choice > 0 && choice < 3 && numberQuotes > 0 && numberQuotes < 6) {
            divAlertError.remove();
            for(var i = 0; i < numberQuotes; i++) {
                  var newQuote = document.createElement("p");
                  newQuote.setAttribute("id", "quote"+i);
                  containerQuotes.appendChild(newQuote);
                  document.getElementById("quote"+i).replaceWith(newQuote);
                        if(choice === 1) {
                        qgeneratedQuote.push([
                              quotes.quotesOne.quotesBlockOne[generateRandomNumber(numberRand)]  + " " +
                              quotes.quotesOne.quotesBlockTwo[generateRandomNumber(numberRand)]  + " " +
                              quotes.quotesOne.quotesBlockTree[generateRandomNumber(numberRand)] + " " +
                              quotes.quotesOne.quotesBlockFour[generateRandomNumber(numberRand)]
                        ]);
                        newQuote.innerText = qgeneratedQuote;  
                        } else if(choice === 2){
                              qgeneratedQuote.push([
                                    quotes.quotesTwo.quotesBlockOne[generateRandomNumber(numberRand)]  + " " +
                                    quotes.quotesTwo.quotesBlockTwo[generateRandomNumber(numberRand)]  + " " +
                                    quotes.quotesTwo.quotesBlockTree[generateRandomNumber(numberRand)] + " " +
                                    quotes.quotesTwo.quotesBlockFour[generateRandomNumber(numberRand)]
                              ]);
                               newQuote.innerText = qgeneratedQuote;  
                        }
                  qgeneratedQuote = [];
            } 
      } else {
            containerQuotes.innerHTML = "";
            divAlertError.className = "alert alert-danger";
            divAlertError.id = "error";
            divAlertError.setAttribute("role", "alert");
            divAlertError.innerText = "Saisie incorrecte, veillez réessayer";
            containerQuotes.appendChild(divAlertError);
      }
       
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


 


 
 
 
 
