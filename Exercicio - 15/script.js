// Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let ladoA = parseInt(prompt('Insira o lado A: '));
let ladoB = parseInt(prompt('Insira o lado B: '));
let ladoC = parseInt(prompt('Insira o lado C: '));

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if(ladoA === ladoB && ladoB === ladoC) {
        console.log('É um triangulo Equilátero');
    } else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        console.log('É um trangulo Escaleno');
    } else if(ladoA === ladoB || ladoA ===ladoC || ladoB === ladoC) {
        console.log('É um triangulo Isósceles');
    }
} else {
    console.log('Não é triangulo');
}