//insercoes
let vetorTeste = [8, 16, 128];
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

