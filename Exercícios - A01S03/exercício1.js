const prompt = require("prompt-sync")();

let n1 = Number(prompt("Entre com um número: "));

let n2 = Number(prompt("Entre com outro número: "));

if (n1 == n2) {
    console.log("O número " + n1 + " é igual ao " + n2);
} else {
    console.log("O número " + n1 + " é diferente do " + n2);
}

if (n1 != n2) {
    if (n1 > n2) {
        console.log(n1 + " é maior que " + n2);
    } else {
        console.log(n2 + " é maior que " + n1);
    }
}