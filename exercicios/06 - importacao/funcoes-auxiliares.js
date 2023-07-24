
const entradas = [10, 5, 50, 10, 98, 23, 55, 44, 1, 99, 100];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };