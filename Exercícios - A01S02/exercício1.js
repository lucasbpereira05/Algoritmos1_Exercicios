const prompt = require("prompt-sync")();

let salario = prompt("Insira o salário base: ");
salario = Number(salario);

let percentual = prompt("Insira o percentual de reajuste: ");
percentual = Number(percentual);

let reajuste = salario * percentual / 100;

let novoSalario = salario + reajuste;

console.log("O novo salário é: " + novoSalario);