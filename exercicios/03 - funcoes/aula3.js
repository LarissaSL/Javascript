function escreverUmNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarMaiorIdade(idade) {
    if (idade < 18) {
        return ' tenho ' + idade + ' anos e sou Menor de Idade';
    } else {
        return ' tenho ' + idade + ' anos e sou Maior de Idade';
    }
}

(function () {

    console.log(escreverUmNome('Braum') + ',' + verificarMaiorIdade(35));

})();