/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semeste da faculdade calcule e imprima
    a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;

*/

function calcularMedia (nota1 , nota2 , nota3){
    return (nota1 + nota2 + nota3) / 3;
}

function statusAluno (media){
    console.log('A média do Aluno é de ' + media.toFixed(2));
    if (media < 5){
        console.log('Status: reprovado');
    } else if ( media >= 5 && media <= 7) {
        console.log('Status: recuperação');
    } else {
        console.log('Status: aprovado');
    }
}

//Função main
(function () {
    statusAluno(calcularMedia(10,5,10));
})();

