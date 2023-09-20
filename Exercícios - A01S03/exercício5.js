const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Insira um número: "));

let numero2 = Number(prompt("Insira um número: "));

let numero3 = Number(prompt("Insira um número: "));

let maior, meio, menor;

if (numero1 > numero2 && numero1 > numero3) {
    maior = numero1;
} else if (numero1 < numero2 && numero1 < numero3) {
    menor = numero1;
} else {
    meio = numero1;
}

if (numero2 > numero1 && numero2 > numero3) {
    maior = numero2;
} else if (numero2 < numero1 && numero2 < numero3) {
    menor = numero2;
} else {
    meio = numero2;
}

if (numero3 > numero1 && numero3 > numero2) {
    maior = numero3
} else if (numero3 < numero1 && numero3 < numero2) {
    menor = numero3;
} else {
    meio = numero3;
}

console.log(menor + "-" + meio + "-" + maior);