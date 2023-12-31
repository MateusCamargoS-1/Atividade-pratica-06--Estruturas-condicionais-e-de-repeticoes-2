// Tendo como entrada a altura e o sexo (codificado da seguinte 
// forma: 1 para sexo feminino e 2 para sexo masculino) de uma 
// PermissionStatus, construa um programa que calcule e mostre seu peso ideal,
// utilizando as seguintes fórmulas: 
//     - para homens: (72.7 * altura) - 58;
//     - para mulheres:(62.1* altura) -44.7

let altura = parseFloat(prompt('Insira a altura: '));
let sexo = parseInt(prompt('Insira o sexo (1 - para feminino e 2- para masculino): '));

let pesoIdeal = 0;

if(sexo === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
    console.log(`Seu peso ideal é ${pesoIdeal.toFixed(2)}`)
} else {
    pesoIdeal = (72.7 * altura) - 58;
    console.log(`Seu peso ideal é ${pesoIdeal.toFixed(2)}`);
}