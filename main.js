const listeMateriels = [
  "manomètre numérique",
  "pompe à vide",
  "vacuomètre",
  "thermomètre",
  "rallonge 25m*2",
];

console.log(listeMateriels);

console.log(listeMateriels[4]);

listeMateriels[5] = "millebulles";

const demandeMateriel = () => {
  alert("Chef j'ai besoin d'un " + listeMateriels[0]);
};

demandeMateriel();

console.log(listeMateriels.length);

console.log(listeMateriels.sort());
