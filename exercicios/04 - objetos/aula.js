/*Atribuindo valores a objetos
É uma estrutura dinamica de Chave e Valor */

//Sintaxe de um Objeto Literal
const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,
    
    descrever:  function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa.nome);

//Acessar dinamicamente o atributo
const atributo = 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);




