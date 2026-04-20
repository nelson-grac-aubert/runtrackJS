// Créez une fonction “compterVoyelles” qui prend en paramètre une chaîne
// de caractères nommée phrase. Cette fonction doit parcourir la chaîne à
// l'aide d'une boucle for pour compter le nombre de voyelles (a, e, i, o, u, y)
// présentes. Affichez le résultat dans la console web sous la forme : "La phrase
// contient X voyelles".

function countVowels(sentence) {

    const VOWELS = ["a", "e", "i", "o", "u", "y"];

    if (typeof sentence !== "string") {
        console.log("Parameter must be a string");
        return;
    }

    let vowelCounter = 0; 

    for (character of sentence) {
        if (VOWELS.includes(character)) {
            vowelCounter += 1;
        }
    }

    console.log(`The sentence contains ${vowelCounter} vowels`);

}

countVowels("Threee");
countVowels("Twoo");
countVowels("A fricking lot of vowels in that long ass sentence");
countVowels("Zr vwls n ths n");