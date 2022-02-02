/*
Le tableau ordersList recense des achats effectués par un client sur différents sites partenaires, avec un cashback exprimé en pourcentage (ex: 5 vaut 5 %).

Pour info, le cashback est un montant rétribué au client, venant alimenter une cagnotte dont il peut disposer comme il le souhaite.

Calcul du montant total du cashback en arrondissant à 2 décimales.
*/


var ordersList = [
  { partner: "Carrefour", total: 57.45, cashback: 5 }, //2.87
  { partner: "Amazon", total: 60.2, cashback: 3 }, //1.806
  { partner: "Boulanger", total: 149, cashback: 6 }, //8.94
  { partner: "Fnac", total: 84.15, cashback: 4 }, //3.366
];

// Résultat attendu : 16.98

var cashback = 0;

for (var i = 0; i < ordersList.length; i++) {
  cashback += (ordersList[i].total * ordersList[i].cashback) / 100;
}

console.log(`Le cashback total s'élève à : ${cashback.toFixed(2)}`);


