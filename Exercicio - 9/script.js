// Informe um valor a uma variavel e imprima no console se o numero
// é primo

const numero = parseInt(prompt('Insira um numero: '));

let primo = true;

if(numero < 2) {
    primo = false;
} else {
    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) {
            primo = false;
            break;
        }
    }
}

console.log(primo ? `${numero} é primo.` : `${numero} não é um numero primo.`)