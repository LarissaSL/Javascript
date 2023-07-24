/* 
Operadores Condicionais ( > < >= <= == )
= - Atribuição
== - Ignora o Tipo ao comparar os dados 0 == '0' (True)
=== - Não ignora o tipo ao comparar

is / eh - Quando a variavel for do tipo Booleana
*/
const numero = 10;
const isNumeroEPar = (numero % 2) === 0; 

if (numero === 0) {
    console.log('O número é inválido');
} else if (isNumeroEPar) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}

