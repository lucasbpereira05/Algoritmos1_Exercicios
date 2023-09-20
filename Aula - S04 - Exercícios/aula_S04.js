const prompt = require("prompt-sync")();

let qtd = Number(prompt("Entre com a quantidade de números: "));

let i = 0;
while (i < qtd) {
    console.log("Número = " + i);
    i++;
}