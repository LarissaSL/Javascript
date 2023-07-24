/* 
1) faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima Reporvado
Caso a média seja >= 5 e <7 imprima recuperacao
Caso a média seja >=7 imprima aprovado

Exemplo
Entrada: 5.5
Saida: Recuperação
*/

const { gets, print } = require('./funcao-auxiliar');

const media = gets();

if (media >= 0 && media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else if(media >= 7) {
    print('Aprovado');
} else {
    print ('Número invalido');
}