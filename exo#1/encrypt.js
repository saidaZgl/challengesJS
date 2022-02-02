/**
 * VOTRE MISSION
 * Nous sommes en 1942... en pleine guerre mondiale !
 * Winston Churchill en personne vous charge de concevoir un algorithme...
 * Afin de garder secret le lieu du débarquement ...
 * prévu le 6 juin prochain !
 *
 * INSTRUCTIONS
 * Retourner un tableau construit à partir d'un texte.
 * Les éléments avec un index impair sont contenus avant les éléments avec un index pair.
 *
 * EXEMPLES
 * 'zoe' => ['o', 'z', 'e']
 * 'abcde' => ['b', 'd', 'a', 'c', 'e']
 *  */

// Méthode avec spread operator d'ECMAScript 6
function encrypt(text) {
  const textArray = [...text];
  const evenArray = textArray.filter((element, index) => index % 2 === 0);
  const oddArray = textArray.filter((element, index) => index % 2 != 0);
  console.log([...oddArray, ...evenArray]);
}

encrypt("abcde");
