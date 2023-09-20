const prompt = require("prompt-sync")();

let nota1 = prompt("Insira a 1ª nota: ");
nota1 = Number(nota1);

let nota2 = prompt("Insira a 2ª nota: ");
nota2 = Number(nota2);

let nota3 = prompt("Insira a 3ª nota: ");
nota3 = Number(nota3);

let nota4 = prompt("Insira a 4ª nota: ");
nota4 = Number(nota4);

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}