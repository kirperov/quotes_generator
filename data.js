let divAlertError = document.createElement("div"),
    containerQuotes = document.getElementById("quotes"),
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
      let quotes = [ 
            quotesOne = [
                  quotesBlockOne = ["Avec", "Quelle que soit", "Tant que durera", "Dans", "Après"],
                  quotesBlockTwo = ["l'humanité,", "la vie,", "le temps,", "la civilisation", "l'époque,"],
                  quotesBlockTree = ["les choses vont", "le hommes vont", "la philosophie va","les téchnologies vont", "le monde va"],
                  quotesBlockFour = ["progresser.", "se développer.", "changer.", "s'ameliorer.", "disparaitre."]
            ],
            quotesTwo = [
                  quotesBlockOne = ["Le travail", "La haine", "L'amour", "La société", "Le progrès"],
                  quotesBlockTwo = ["permet,", "oblige,", "impose,", "donne la possibilité,", "demande,"],
                  quotesBlockTree = ["de comprendre", "de changer", "à maitriser", "de simplifier", "d'ameliorer"],
                  quotesBlockFour = ["la vie.", "les habitudes.", "les choses.", "les téchnologies.", "le monde."]
            ]
      ],
      quotesLength = containerQuotes.childNodes.length;

      if(themeChoice >= 0 && themeChoice <= nbThemeLength && numberQuotes > 0 && numberQuotes <= nbQuotesLength) {
            divAlertError.remove();
            for(let i = 0; i < numberQuotes; i++) {
                  let newQuote = document.createElement("p");
                  newQuote.setAttribute("id", "quote"+i);
                  containerQuotes.appendChild(newQuote);
                  document.getElementById("quote"+i).replaceWith(newQuote);
                  for(let n = 0; n <quotes[themeChoice].length; n++) {
                        numberRand = generateRandomNumber(quotes[themeChoice][n].length);
                        noRepeatQuote = quotes[themeChoice][n].splice(numberRand,1);           
                        generatedQuote.push(noRepeatQuote);
                  }               

                  generatedQuote = generatedQuote.join(' ');
                  newQuote.innerText = i+1 +") "+ generatedQuote; 
                  generatedQuote = [];
            } 
      } else {
            containerQuotes.innerHTML = "";
            divAlertError.className = "text-danger";
            divAlertError.innerText = "Saisie incorrecte, veillez réessayer";
            containerQuotes.appendChild(divAlertError);
      }
       
      if(quotesLength > numberQuotes) {
            let newNumber = quotesLength - numberQuotes;
            for(let i = 0; i < newNumber; i++) {
                  containerQuotes.removeChild(containerQuotes.lastChild);
            }
      }
}

btnGenerateQuote.addEventListener("click", function() {
      generateRandomQuotes(numberTheme);
});


 


 
 
 
 
