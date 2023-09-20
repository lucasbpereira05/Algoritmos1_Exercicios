const prompt = require("prompt-sync")();

let numero = prompt("Insira um número: ");
numero = Number(numero);

if (numero <= 10) {
    console.log("F1");
} else if (numero > 10 && numero <= 100) {
    console.log("F2");
} else if (numero > 100) {
    console.log("F3");
}