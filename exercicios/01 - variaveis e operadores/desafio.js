/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1- Preço do combustivel;
2- Gasto médido de combustivel do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

//Dados de Entrada
const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

//Dados de Saida
const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = precoCombustivel * litrosConsumidos;

//toFixed - Converte o valor para texto e fixa as casas decimais para o numero passado no parametro
console.log('Valor gasto em R$' , valorGasto.toFixed(2));