/* En utilisant la liste suivante, créez un regroupement des villes en fonction de leur première lettre.
// Le résultat devra être un objet stocké dans une variable obj ayant pour clé la lettre créant le regroupement (ex: “a”) en minuscule et pour valeur un tableau des villes correspondantes (ex: [“Anvers”, “Angers”]).
Affichez cet objet dans la console avec JSON.stringify. */

const list = ["Berlin", "Paris", "Prague", "Barcelone"];

// résultat attendu : { b: [ 'Berlin', 'Barcelone' ], p: [ 'Paris', 'Prague' ] }

// On déclare un objet vide obj
let obj = {};

// .map() nous renvoie un nouveau tableau qui contient toutes les
// premières lettres des villes.
let mappedArray = list.map((e) => e[0].toLowerCase());
console.log("mappedArray : ", mappedArray);

// new Set renvoie un set d'éléments uniques (supprime les lettres qui se répétaient dans mappedArray).
// On met ce set dans un tableau keys.
let keys = [...new Set(mappedArray)];
console.log("keys : ", keys);

// pour chaque element du tableau keys (boucle for ... of)
// on ajoute une clé à notre objet obj
for (const key of keys) {
  // list.filter va renvoyer un tableau avec les éléments dont la
  // première lettre est égale à la lettre du tableau keys.
  var filteredList = list.filter((e) => e[0].toLowerCase() === key);
  console.log("filteredList : ", filteredList);

  // toujours dans la boucle, on vient attribuer à chacune des clés
  // la valeur du tableau filtré
  obj[key] = filteredList;
}

console.log(JSON.stringify(obj));
