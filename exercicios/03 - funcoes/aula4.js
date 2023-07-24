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

function aplicarDesconto(valor, porcentagemDeDesconto) {
    return valor - ((porcentagemDeDesconto / 100) * valor);
}

function aplicarJuros(valor, porcentagemDeJuros) {
    return valor + ((porcentagemDeJuros / 100) * valor);
}

function valorAPagar(formaDePagamento, precoProduto) {
    if (formaDePagamento === 1) {
        console.log('Valor a pagar R$' + aplicarDesconto(precoProduto, 10).toFixed(2));

    } else if (formaDePagamento === 2) {
        console.log('Valor a pagar R$' + aplicarDesconto(precoProduto, 15).toFixed(2));

    } else if (formaDePagamento === 3) {
        console.log('Valor a pagar R$' + precoProduto.toFixed(2));

    } else {
        console.log('Valor a pagar R$' + aplicarJuros(precoProduto, 10).toFixed(2));

    }
}

//Função Main
(function () {
    const precoProduto = 100.00;
    const formaDePagamento = 4;

    valorAPagar(formaDePagamento, precoProduto);

})();