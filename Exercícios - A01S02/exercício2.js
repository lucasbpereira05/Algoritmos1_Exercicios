const prompt = require('prompt-sync')();

let custoFabrica = prompt("Insira o custo da fábrica: ");
custoFabrica = Number(custoFabrica);

let distribuidor = custoFabrica * 28 / 100;

let impostos = custoFabrica * 45 / 100;

let somaCustos = custoFabrica + distribuidor + impostos;

console.log("O valor de um carro novo ao consumidor é: " + somaCustos);