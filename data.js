var quotes = [
      quotesOne = [
            quotesBlockOne = ["Avec", "Quelle que soit", "Tant que durera"],
            quotesBlockTwo = ["l'humanité,", "la vie,", "le temps,"],
            quotesBlockTree = ["les choses vont", "le hommes vont", "la philosophie va"],
            quotesBlockFour = ["progresser.", "se développer.", "changer."]
      ],

      quotesTwo = [
            quotesBlockOne = ["Le travail", "La haine", "L'amour"],
            quotesBlockTwo = ["demande,", "oblige,", "impose,"],
            quotesBlockTree = ["de comprendre", "de changer", "à maitriser"],
            quotesBlockFour = ["la vie.", "sles habitudes.", "les choses."]
      ]
];

var divAlertError = document.createElement("div");
var containerQuotes = document.getElementById("quotes"),
    btnGenerateQuote = document.getElementById("generate"),
    selectTheme = document.getElementById("themes"),
    selectNumbers = document.getElementById("numbers"),
    numberTheme = parseInt(selectTheme.options[selectTheme.selectedIndex].value),
    numberQuotes = parseInt(selectNumbers.options[selectNumbers.selectedIndex].value),
    generatedQuote = [],
    nbThemeLength = selectTheme.length,
    nbQuotesLength = selectNumbers.length,
    numberRand;
function generateRandomNumber(num) {
      return Math.floor((Math.random() * num));
}

selectNumbers.addEventListener("change", function() {
      numberQuotes = parseInt(this.value);
});

selectTheme.addEventListener("change", function() {
      numberTheme = parseInt(this.value);
});

 

function generateRandomQuotes(themeChoice) {
      var quotesLength = containerQuotes.childNodes.length;
      if(themeChoice >= 0 && themeChoice <= nbThemeLength && numberQuotes > 0 && numberQuotes <= nbQuotesLength) {
            divAlertError.remove();
            for(var i = 0; i < numberQuotes; i++) {
                  var newQuote = document.createElement("p");
                  newQuote.setAttribute("id", "quote"+i);
                  containerQuotes.appendChild(newQuote);
                  document.getElementById("quote"+i).replaceWith(newQuote);
                  for(var n = 0; n <quotes[themeChoice].length; n++) {
                        numberRand = quotes[numberTheme][n].length;
                        generatedQuote.push(quotes[numberTheme][n][generateRandomNumber(numberRand)]);
                  }
                  generatedQuote = generatedQuote.join(' ');
                  newQuote.innerText = generatedQuote; 
                  generatedQuote = [];
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


 


 
 
 
 
