//Function who generate random number
function generateRandomNumber(num) {
    return Math.floor((Math.random() * num));
}

//Generate random quotes without repeating
export function getRandomQuotes(quotes,themeChoice) {
    let generatedQuote = [];
    for(let n = 0; n <quotes[themeChoice].length; n++) {
        let numberRand = generateRandomNumber(quotes[themeChoice][n].length);
        let noRepeatQuote = quotes[themeChoice][n].splice(numberRand,1);           
        generatedQuote.push(noRepeatQuote);
    }  
    return generatedQuote;
}