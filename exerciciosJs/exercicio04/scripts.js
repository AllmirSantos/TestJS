/*4 - Crie uma função que recebe o ano de nascimento da pessoa informando 
se ela é maior de idade ou menor.*/

function ResultOfExercises() {
  valueDate = document.getElementById("date").value;
  valueCurrentYear = 2022;

  if (valueDate > 2004) {
    alert(
      ` Você tem ${
        valueCurrentYear - valueDate
      } !! Desculpa você é menor de idade :) `
    );
  } else if (valueDate < 1900) {
    alert(
      ` Você tem ${
        valueCurrentYear - valueDate
      } !! Não é possivel! Vocé é um dinossauro? rsrs`
    );
  } else {
    alert(
      `Você tem ${
        valueCurrentYear - valueDate
      } !! Parabéns você é maior de idade :)`
    );
  }
}
