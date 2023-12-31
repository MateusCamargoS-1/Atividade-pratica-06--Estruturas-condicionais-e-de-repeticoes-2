// crie uma variavel para armazenar o salario do usuario e atribua um
// valor a essa variavel.crie a validação necessaria:
//     - Caso o salario seja MENOR que R$1.903,98, insira no html 
//     'ISENTO DE IR';
//     - caso contrario insira 'TRIBUTADO NO IR'.

let salario = parseFloat(prompt('Insira o salario: '));

if(salario < 1903.98) {
    document.write('ISENTO DE IR');
} else {
    document.write('TRIBUTADO NO IR');
}