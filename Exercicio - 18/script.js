// Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let precoTabela = parseFloat(prompt('Insira o preço de tabela do produto: '));
let numeroParcelas = parseFloat(prompt('Insira o número de vezes que o pagamento será feito: '));

if (numeroParcelas <= 0) {
    console.log('O número de parcelas deve ser maior que zero.');
} else {
    let valorParcela = precoTabela / numeroParcelas;
    let precoTotal = precoTabela;

    console.log(`Valor de cada parcela: R$${valorParcela.toFixed(2)}`);
    console.log(`Preço total da compra: R$${precoTotal.toFixed(2)}`);
}
