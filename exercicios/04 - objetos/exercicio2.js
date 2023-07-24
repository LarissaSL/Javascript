/* 
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC
IMC = peso / (altura * altura));

Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer
o valor do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return `${this.nome} tem IMC classificado como: Abaixo do peso`;

        } else if (imc >= 18.5 && imc < 25) {
            return `${this.nome} tem IMC classificado como: Peso normal`;

        } else if (imc >= 25 && imc < 30) {
            return `${this.nome} tem IMC classificado como: Acima do peso`;

        } else if (imc >= 30 && imc < 40) {
            return `${this.nome} tem IMC classificado como: Obeso`;

        } else {
            return `${this.nome} tem IMC classificado como: Obesidade Grave`;
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
const larissa = new Pessoa ('Larissa', 43, 1.63);

console.log(jose.calcularImc());
console.log(jose.classificarImc());

console.log(larissa.calcularImc());
console.log(larissa.classificarImc());