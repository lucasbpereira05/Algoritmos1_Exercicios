const prompt = require('prompt-sync')();

let carrosVendidos = prompt("Insira o número de carros vendidos: ");
carrosVendidos = Number(carrosVendidos);

let valorTotalVendas = prompt("Insira o valor total das vendas: ");
valorTotalVendas = Number(valorTotalVendas);

let salarioFixo = prompt("Insira o valor do sálario fixo: ");
salarioFixo = Number(salarioFixo);

let valorCarroVendido = prompt("Insira o valor á receber por carro vendido: ");
valorCarroVendido = Number(valorCarroVendido);

let comissao = valorCarroVendido * carrosVendidos;

let porcentagemVenda = valorTotalVendas * 5 / 100;

let salarioFinal = salarioFixo + comissao + porcentagemVenda;

console.log("O sálario final do funcionário é: " + salarioFinal);