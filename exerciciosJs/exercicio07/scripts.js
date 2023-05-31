/*7 - Crie o seguinte
array: var deuses = ['Aegir', 'Aud', 'Balder'] Adicione os 3 Deuses: ('Loki',
'Odin', 'Frey') com a função push()*/

function ResultOfExercises() {
  const deuses = ["Aegir", "Aud", "Balder"];
  deuses.push("Loki", "Odin", "Frey");

  deuses.map(function (element) {
    console.log(element);
  });
}
