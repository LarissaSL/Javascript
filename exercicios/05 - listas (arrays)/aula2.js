const notas = [];

notas.push(10);
notas.push(10);
notas.push(5);


//O Metodo Length permite saber o tamanho de uma lista
console.log(notas.length);

//Estruturas de Repetição

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i] ;
    
}

const media = somaNotas / notas.length;
console.log(somaNotas);
console.log(media);

