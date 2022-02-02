/*
MODIFICATION D'UN OBJET SELON UNE DATE
En place, changez le statut des vols du 23 novembre en provenance de Paris à “Annulé”.
*/
const travels = [
  {
    from: "Paris",
    to: "Bruxelles",
    date: "2021/11/23 09:05:00",
    status: "Prévu",
  },
  {
    from: "Londres",
    to: "Berlin",
    date: "2021/11/23 10:30:00",
    status: "Prévu",
  },
  {
    from: "Paris",
    to: "Barcelone",
    date: "2021/11/23 14:00:00",
    status: "Prévu",
  },
  {
    from: "Madrid",
    to: "Munich",
    date: "2021/11/23 09:05:00",
    status: "Prévu",
  },
  {
    from: "Paris",
    to: "Bruxelles",
    date: "2021/11/24 09:05:00",
    status: "Prévu",
  },
];

for (let trip of travels) {
  if (trip.from === "Paris" && new Date(trip.date).getDate() === 23) {
    trip.status = "Annulé";
  }
}

console.log(JSON.stringify(travels));
