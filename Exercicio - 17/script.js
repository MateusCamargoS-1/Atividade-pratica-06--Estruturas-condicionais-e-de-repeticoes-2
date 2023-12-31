// Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let totalEleitores = parseInt(prompt('Total de Eleitores de um municipio: '));
let votosBrancos = parseInt(prompt('Números de votos brancos: '));
let votosNulos = parseInt(prompt('Números de votos Núlos: '));
let votosValidos = totalEleitores - (votosBrancos + votosNulos);

let totalVotos = votosBrancos + votosNulos + votosValidos;

if (totalVotos > totalEleitores) {
    console.log("A soma dos votos ultrapassou o número total de eleitores.");
} else {
    let percentualBrancos = (votosBrancos / totalEleitores) * 100;
    let percentualNulos = (votosNulos / totalEleitores) * 100;
    let percentualValidos = (votosValidos / totalEleitores) * 100;

    console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
    console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
    console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
}