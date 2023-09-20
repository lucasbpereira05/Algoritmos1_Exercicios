const prompt = require("prompt-sync")();

let numero1 = prompt("Insira um número: ");
numero1 = Number(numero1);

let numero2 = prompt("Insira um outro número: ");
numero2 = Number(numero2);

if (numero1 > numero2) {
    console.log("O maior número é o: " + numero1);
} else {
    console.log("O maior número é o: " + numero2);
}