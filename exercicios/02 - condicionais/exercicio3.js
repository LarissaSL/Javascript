/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de
etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cáulculo adequado.

Código condição de pagamento:
1) À vista Débito, recebe 10% de desconto;
2) À vista no Dinheiro ou PIX, recebe 15% de desconto;
3) Em duas vezes, preço normal de etiqueta sem juros;
4) Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

//Entrada
const precoProduto = 100.00;
const formaDePagamento = 4;

let valor;

//Processamento
if (formaDePagamento === 1) {
    const desconto = (10 / 100) * precoProduto;
    valor = precoProduto - desconto;

} else if (formaDePagamento === 2) {
    const desconto = (15 / 100) * precoProduto;
    valor = precoProduto - desconto;

} else if (formaDePagamento === 3) {
    valor = precoProduto;

} else {
    const juros = (10 / 100) * precoProduto;
    valor = precoProduto + juros;

}

//Saida
console.log('Valor a ser pago R$', valor.toFixed(2));

