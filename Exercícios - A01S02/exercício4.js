const prompt = require('prompt-sync')();

let idadeAnos = prompt("Insira sua idade em anos: ");
idadeAnos = Number(idadeAnos);

let idadeMeses = prompt("Insira sua idade em meses: ");
idadeMeses = Number(idadeMeses);

let idadeDias = prompt("Insira sua idade em dias: ");
idadeDias = Number(idadeDias);

let idadeConversao = idadeAnos * 365;

console.log("A sua idade em dias é: " + idadeConversao);