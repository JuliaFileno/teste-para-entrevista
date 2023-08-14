const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarAnoBissexto() {
  rl.question("Digite o ano de nascimento: ", function(ano) {
    ano = parseInt(ano);

    //O código verifica se o ano é bissexto usando as regras do calendário gregoriano. 
    //Se o ano for divisível por 4 e não for divisível por 100 (ou se for diretamente divisível por 400), 
    //ele é considerado um ano bissexto e uma mensagem correspondente é exibida. Caso contrário, 
    //é exibida a mensagem de que não é um ano bissexto.
    if (isNaN(ano)) {
      console.log("Ano inválido. Por favor, insira um valor numérico.");
    } else if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      console.log(ano + " é um ano bissexto.");
    } else {
      console.log(ano + " não é um ano bissexto.");
    }

    rl.close();
  });
}

verificarAnoBissexto();
