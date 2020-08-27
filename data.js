let phrasesBlockOne = ["Avec", "Quelle que soit", "Tant que durera"];
let phrasesBlockTwo = ["l'humanité", "la vie", "la situation"];
let phrasesBlockTree = ["les choses vont", "la crise va", "les déplacement vont"];
let phrasesBlockFour = ["progresser", "s’ameliorer", "changer"];


function myFunction() {
      var value = Math.floor((Math.random() * 3));
      return value;
}
let random = myFunction();
  
console.log(phrasesBlockOne[Math.floor((Math.random() * 3))] + " " + phrasesBlockTwo[Math.floor((Math.random() * 3))] + " " + phrasesBlockTree[Math.floor((Math.random() * 3))]  + " " + phrasesBlockFour[Math.floor((Math.random() * 3))]);

 
 
 
 
