// reescreva o exercicio 3, utilizando apenas o SWITCH

let dia = parseInt(prompt('Insira um numero correspondete ao dia da semana: '));

switch(dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-Feira');
        break;
    case 3:
        console.log('Terça-Feira');
        break;
    case 4:
        console.log('Quarta-Feira');
        break;
    case 5:
        console.log('Quinta-Feira');
        break;
    case 6:
        console.log('Sexta-Feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Dia não reconhecido');
        break;
}