//Funções sem retorno e com retorno

function sayMyName(name) {
    console.log('Your name is: ' + name);
}

function quadrado(valor){
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

sayMyName('Larissa');
sayMyName('Braum');

console.log('Juros no valor: ' + incrementarJuros(100,10));
console.log('Quadrado de um numero +  quadrado de outro numero = ' + (quadrado(10) + quadrado(2)));
