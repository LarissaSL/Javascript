/* 
3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios
O salário a ser transferido é calculado da seguinte maneira

valor bruto do salario - percentual de imposto mediante a faixa salario + adicional de beneficios

Para calcular o imposto segue as aliquotas:
De R$ 0.00 a R$ 1100.00 = 5%
De R$ 1100.01 a R$ 2500. 00 = 10%
Maior que R$ 2500.00 = 15%

Entrada:
2000
250

Saida:
2050.00

*/


const { gets, print } = require('./funcao-auxiliar3');

const valorSalarioBruto = gets();
const valorBeneficio = gets();

function calcularImposto (salario) {
    let percentualImposto;
    
    if (salario >= 0 && salario <= 1100.00) {
        percentualImposto = 5 / 100;
    
    } else if (salario >= 1100.01 && salario <= 2500.00) {
        percentualImposto = 10 / 100;
    
    } else if (salario > 2500) {
        percentualImposto = 15 / 100;
    }
    return percentualImposto;
}

function calcularSalario (salario, beneficio, percentual) {
    return salario + beneficio - (percentual * salario);
}

const valorAliquota = calcularImposto(valorSalarioBruto);
const valorATransferir = calcularSalario(valorSalarioBruto , valorBeneficio, valorAliquota);

print(valorATransferir.toFixed(2));