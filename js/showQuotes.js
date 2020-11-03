//Get selected number of citations
selectNumbers.addEventListener("change", function() {
      numberQuotes = parseInt(this.value);
});
  
//Get selected theme
selectTheme.addEventListener("change", function() {
      numberTheme = parseInt(this.value);
});

//Create pharagraphs with generated quotes
function creataRandomQuotes(themeChoice) {
      let quotes = dataQuotes();
      for(let i = 0; i < numberQuotes; i++) {
            let newQuote = document.createElement("li");
            newQuote.setAttribute("id", "quote"+i);
            containerQuotes.appendChild(newQuote);
            document.getElementById("quote"+i).replaceWith(newQuote);
            generatedQuote = getRandomQuotes(quotes,themeChoice);
            generatedQuote = generatedQuote.join(' ');
            newQuote.innerText = generatedQuote; 
            generatedQuote = [];
      }
}

//Render generated quotes to display
function renderQuotes(themeChoice) {
      quotesLength = containerQuotes.childNodes.length;
      if(themeChoice >= 0 && themeChoice <= nbThemeLength && numberQuotes > 0 && numberQuotes <= nbQuotesLength) {
            divAlertError.remove();
            creataRandomQuotes(themeChoice);
      } else {
            containerQuotes.innerHTML = "";
            divAlertError.className = "text-danger";
            divAlertError.innerText = "Saisie incorrecte, veillez réessayer";
            containerQuotes.appendChild(divAlertError);
      }
     //Delete if decrease number of quotes 
      if(quotesLength > numberQuotes) {
            let newNumber = quotesLength - numberQuotes;
            for(let i = 0; i < newNumber; i++) {
                  containerQuotes.removeChild(containerQuotes.lastChild);
            }
      }
}

//Button to start generate quotes
btnGenerateQuote.addEventListener("click", function() {
    renderQuotes(numberTheme);
});