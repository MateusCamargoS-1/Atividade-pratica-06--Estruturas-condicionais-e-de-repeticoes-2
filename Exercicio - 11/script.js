// Utilizando switch, faça um programa que pergunte em que turno 
// voce estuda. Peça para digitar 'M' para Matutino ou 'V' para 
// Vespertino ou 'N' para noturno. Mostre um alerta com a mensagem 
// 'BOM DIA!' ou 'Boa tarde' ou 'Boa Noite' ou 'Valor inválido',
// conforme o CacheStorage.

let turno = prompt('Em que turno você estuda ("M" para matutino, "V" para verpertino, "N" para noturno): ');

switch(turno) {
    case 'M':
        console.log('Bom Dia!');
        break;
    case 'V': 
        console.log('Boa Tarde!');
        break;
    case 'N': 
        console.log('Boa Noite!');
        break;
    default:
        console.log('Valor inválido');
        break;
}