// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual = parseInt(prompt('Insira o ano Atual: '));
let anoNascimento = parseInt(prompt('Insira o ano de nascimento: '));

let idade = anoAtual - anoNascimento

if(idade >= 18)  {
    console.log('Poderá votar esse ano.');
} else {
    console.log('Não poderá votar esse ano.');
}