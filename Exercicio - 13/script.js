// Faça um algoritmo que armazene um numero e imprima os 
// numeros impares entre 1 e o numero armazenado.

let numero = parseInt(prompt('Insira um numero: '));

for(let i = 1; i <= numero; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}