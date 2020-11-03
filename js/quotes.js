//Data with quotes to generate

export function dataQuotes() {
      const quotesOne = [
            ["Avec", "Quelle que soit", "Tant que durera", "Dans", "Après"],
            ["l'humanité,", "la vie,", "le temps,", "la civilisation", "l'époque,"],
            ["les choses vont", "le hommes vont", "la philosophie va","les téchnologies vont", "le monde va"],
            ["progresser.", "se développer.", "changer.", "s'ameliorer.", "disparaitre."]
      ];
            const quotesTwo = [
            ["Le travail", "La haine", "L'amour", "La société", "Le progrès"],
            ["permet,", "oblige,", "impose,", "donne la possibilité,", "demande,"],
            ["de comprendre", "de changer", "à maitriser", "de simplifier", "d'ameliorer"],
            ["la vie.", "les habitudes.", "les choses.", "les téchnologies.", "le monde."]  
      ]
      let quotes = [];
      quotes.push(quotesOne);
      quotes.push(quotesTwo);
      return quotes;
}