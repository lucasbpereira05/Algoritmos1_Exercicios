const prompt = require("prompt-sync")();

let salario = Number(prompt("Insira o valor do salário: "));

let desconto = salario * 11 / 100;

if (desconto < 318.20) {
    let total = salario - desconto;
    console.log("O valor do desconto é: " + desconto);
    console.log("O salário total é " + total);
} else {
    let total2 = salario - 318.20;
    console.log("O valor do desconto é: R$318,20");
    console.log("O salário total é: " + total2);
}