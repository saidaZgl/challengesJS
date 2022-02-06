/* La tableau arrays contient des sous-tableaux contenant eux-même des éléments de différentes natures (booléen, nombres, chaîne de caractères…) */

/*  A l’aide d’une boucle for, vérifiez si les éléments présents dans chacun des sous-tableaux sont identiques. Pour ce faire, utilisez la méthode filter().

Si  tous les éléments sont identiques, affichez true dans la console. Dans le cas contraire, affichez false. */

const arrays = [
  [true, true, true, true],
  ["test", "test", "test"],
  [1, 1, 1, 2],
  ["10", 10, 10, 10],
];

for (var i = 0; i < arrays.length; i++) {
  // On compare dans chacun des tableaux le premier element aux autres elements.
  // Si l'élément === au 1er élement, on garde cet élément comparé.

  var arrayCopy = arrays[i].filter(function (e) {
    if (e === arrays[i][0]) {
      return true;
    }
  });
  // ou avec une fonction fléchée
  // var arrayCopy = arrays[i].filter(e => (e === arrays[i][0]));

  // filter() renvoie un tableau à chaque tour de boucle.
  // On compare enfin la longueur du nouveau tableau au tableau initial. Si la longueur est la même, on affiche true. Sinon on affiche false.
  if (arrayCopy.length === arrays[i].length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
