const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularQuadradoRaiz() {
    rl.question("Digite o primeiro número: ", function(num1) {
        rl.question("Digite o segundo número: ", function(num2) {
            
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            var menor, maior;
            //Verificar qual variavel contem o maior e menor numero
            if (num1 < num2) {
                menor = num1;
                maior = num2;
            } else {
                menor = num2;
                maior = num1;
            }

            //Realização do quadrado do menor numero
            var quadradoMenor = menor ** 2;
            console.log("Quadrado do menor número:", quadradoMenor);

            //Realização da raiz quadrada do maior
            if (maior >= 0) {
                var raizQuadradaMaior = Math.sqrt(maior);
                console.log("Raiz quadrada do maior número:", raizQuadradaMaior);
            } else {
                console.log("Não é possível calcular a raiz quadrada do maior número.");
            }

            rl.close();
        });
    });
}

calcularQuadradoRaiz();
