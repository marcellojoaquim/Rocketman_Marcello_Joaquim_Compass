//insercoes
const vetorTeste = [8, 16, 128];
const vetorObjetos = [
    { valorObjeto : 1, valor2 : '2', valor3 : 3},
    { valorObjeto : 2, valor2 : '3', valor3 : 4},
    { valorObjeto : 3, valor2 : '4', valor3 : 5}
]
vetorTeste.unshift(0);
vetorTeste.splice(3, 0, 32);
vetorTeste.push(64);

//busca -- includes retorna true ou false
console.log(vetorTeste);
console.log(
vetorTeste.indexOf(32),
vetorTeste.lastIndexOf(64),
vetorTeste.includes(2)
);

//busca no vetor de objetos

let resultadoBusca = vetorObjetos.find(function(resultadoBusca){
    return resultadoBusca.valorObjeto === 2;
});

console.log(resultadoBusca);


//removendo elementos de um array

const numeros2 = [1,2,3,4,5,6];
numeros2.push();
numeros2.unshift();
numeros2.splice();

//remover no fim '.pop();
const ultimo = numeros2.pop();
console.log(ultimo);
console.log(numeros2);

//removendo no início
const inicio = numeros2.shift();
console.log(inicio);
console.log(numeros2);

//remover um item diferente de primeiro e ultimo.
const meio = numeros2.splice(2,1);
//neste caso por conta das remoções anteriores o resultado é quatro que está com indice 2.
console.log(meio);

//Combinar e cortar array

const letras = ['a','b','c'];
const letrasB = ['d', 'e', 'f'];

// todasLetras = letras.concat(letrasB);
// console.log(todasLetras);
// algumasLetras = todasLetras.splice(0, 4);
// console.log(algumasLetras);

//Combinar e cortar array ES6 - spread

const combinadoSpread = [...letras,'%', ...letrasB];
const copia = [...combinadoSpread];

