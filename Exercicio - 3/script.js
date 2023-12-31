// Utilizando o if, ELSE, ELSE IF crie umaestrutura pra receber um 
// numero de 1 a 7 e imprimir no console o dia da semana. para este
// exercicio assumismos que odia 1 é domingo, dia 2 é segunda e assim 
// por diante. Caso o numero recebido não esteja neste intervalo 
// imprimir "Dia não reconhecido"

let dia = parseInt(prompt('Insira um numero correspondente ao dia da semana: '));

if(dia === 1) {
    console.log('Domingo');
}else if (dia === 2) {
    console.log('Segunda-Feira');
}else if(dia === 3) {
    console.log('Terça-feira');
}else if (dia === 4) {
    console.log('Quarta-Feira');
} else if(dia === 5) {
    console.log('Quinta-Feira');
} else if(dia === 6) {
    console.log('Sexta-Feira');
} else if(dia === 7) {
    console.log('Sabado');
} else {
    console.log('Dia não reconhecido');
}

