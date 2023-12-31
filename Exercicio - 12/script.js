// Para doar sangue é necessário ter entre 18 e 67 anos. Faça um 
// prorama que armazene a idade de uma pessoa e diga se ela pode doar
// sangue ou ão. Use alguns dos operadores lógicos OU(||) e E(&&)

let idade = parseInt(prompt('Insira a idade: '));

if(idade >= 18 && idade <= 67) {
    console.log('Pode doar.');
} else {
    console.log('Não pode doar.');
}