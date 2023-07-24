/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variaveis. Sendo elas:
1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - Tipo de combustivel que está no seu carro;
4 - Gasto médido de combustivel do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

//Dados de Entrada
const precoEtanol = 5.79;
const precoGasolina = 6.50;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const tipoCombustivel = 'etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitro;


if (tipoCombustivel === 'etanol'){
    const valorGasto = precoEtanol * litrosConsumidos;
    console.log ('Valor gasto na viagem em R$' , valorGasto.toFixed(2));
} else {
    valorGasto = precoGasolina * litrosConsumidos;
    const valorGasto = precoEtanol * litrosConsumidos;
    console.log ('Valor gasto na viagem em R$' , valorGasto.toFixed(2));
}

