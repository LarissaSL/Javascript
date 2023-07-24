/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semeste da faculdade calcule e imprima
    a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;

*/

//Entrada
const nota1 = 10;
const nota2 = 5;
const nota3 = 9;

//Saida
const media = (nota1 + nota2 + nota3) / 3;

console.log('Média' , media.toFixed(2));

if (media < 5){
    console.log('Aluno foi reprovado');
} else if ( media >= 5 && media <= 7) {
    console.log('Aluno esta de recuperação');
} else {
    console.log('Aluno passou de semestre');
}