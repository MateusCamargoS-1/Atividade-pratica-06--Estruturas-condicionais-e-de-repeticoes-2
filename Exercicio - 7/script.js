// Utilizando do...while, imprima na tela a soma de todos os numeros
// entre 10 a 100
let somaTodos = 0;
let i = 10;

do {
    somaTodos += i;
    i++;
} while(i <= 100)

document.write(somaTodos);