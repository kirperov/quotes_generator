//Variables
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
