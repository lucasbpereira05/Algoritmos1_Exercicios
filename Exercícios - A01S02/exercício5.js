const prompt = require('prompt-sync')();

let idadeEmDias = prompt("Insira sua idade em dias: ");
idadeEmDias = Number(idadeEmDias);

let anos, meses, dias;

anos = parseInt(idadeEmDias / 365);
idadeEmDias = idadeEmDias % 365;
meses = parseInt(idadeEmDias / 30);
idadeEmDias = idadeEmDias % 30;
dias = idadeEmDias;

console.log(anos + " anos " + meses + " meses " + dias + " dias!") ;