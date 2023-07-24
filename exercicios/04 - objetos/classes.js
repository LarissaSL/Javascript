/* Classe é uma definição do que deveria ser e a Instancia é a ocorrencia do que é */

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa('Vitor J Guerra', 26);
const renan = new Pessoa('Renan J Paula', 31);

vitor.descrever();
renan.descrever();

console.log(vitor);

function compararIdadePessoas(p1, p2) {
    
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

compararIdadePessoas(vitor, renan);