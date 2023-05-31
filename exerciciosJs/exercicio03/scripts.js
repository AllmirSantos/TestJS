/*3 - Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.*/

function ResultOfExercises() {
  valueOne = document.getElementById("valueOne").value;
  valueTwo = document.getElementById("valueTwo").value;
  var result = parseFloat(valueOne) * parseFloat(valueTwo);
  alert(` Resultado  ${valueOne} * ${valueTwo} = ${result} `);
}
