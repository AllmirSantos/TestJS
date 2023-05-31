/*8 - Crie o seguinte array: const numbers = [5, 7, 1, 8, 9] E exiba de forma decrescente.*/

function ResultOfExercises() {
  const numbers = [5, 7, 1, 8, 9];
  numbers.sort((a, b) => b - a);
  alert(numbers);
}
