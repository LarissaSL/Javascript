/* 
1) Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustível por Kilometro rodado.
Crie um metodo que dado a quantidade de quilimetros e o preço do combustivel nos dê o valor gasto em reais 
para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    litroPorKm;


    constructor(marca, cor, litroPorKm){
        this.marca = marca;
        this.cor = cor;
        this.litroPorKm = litroPorKm;
    }

    calcularValorViagem(kilometros, precoCombustivel){
        return (kilometros / this.litroPorKm * precoCombustivel).toFixed(2);
    }
}


/* 

Caso eu nao fizesse o metodo calcularValorViagem dentro da Classe, eu poderia fazer uma função fora da classe
e passar como parametro o Objeto Carro , ou seja , ficaria assim: 

    function calcularValorViagem(carro , kilometros, precoCombustivel){
        return (kilometros / carro.litroPorKm) * precoCombustivel;
    }

    Eu executaria assim:
    console.log (calcularValorViagem (uno , 100, 5.79));

*/

const uno = new Carro('Fiat', 'Branco', 10);
const palio = new Carro('Fiat', 'Preto', 12);

console.log(uno);
console.log(uno.calcularValorViagem(100, 5.79));

console.log(palio);
console.log(palio.calcularValorViagem(100, 5.79));