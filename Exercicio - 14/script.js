// Leia um numero, utilizando WHILE multiplique este numero por 3
// enquanto a soma seja menor que 500 e no final mostre qual o 
// ultimo valor


// Ultimo valor antes dos 500
let num = parseInt(prompt('Insira um numero: '));
let soma = 0;
let ultimoValor = 0;

while(soma < 500) {
    num *= 3;
    soma += num;

    if(soma < 500) {
        ultimoValor = soma;
    }
}

console.log(ultimoValor)

// Ultimo valor
let numero = parseInt(prompt('Insira um numero: '));
let soma2 = 0;

while(soma2 < 500) {
    numero *= 3;
    soma2 += numero;
}

console.log(soma2)