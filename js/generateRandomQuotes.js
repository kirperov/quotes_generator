//Function who generate random number
function generateRandomNumber(num) {
    return Math.floor((Math.random() * num));
}

//Generate random quotes without repeating
function getRandomQuotes(quotes,themeChoice) {
    for(let n = 0; n <quotes[themeChoice].length; n++) {
          numberRand = generateRandomNumber(quotes[themeChoice][n].length);
          noRepeatQuote = quotes[themeChoice][n].splice(numberRand,1);          
          generatedQuote.push(noRepeatQuote);
    }  
    return generatedQuote;
}