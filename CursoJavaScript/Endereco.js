// criar um objeto endereco que contenha:
// Rua 
// Cidade 
// CEP 
// Funcao exibirEndereco(endereco)

let endereco = {
    rua : "Guilherme Pinto",
    ciadade : "Recife",
    CEP: "52011-210"
}
let endereco2 = {
    rua : "outra rua",
    ciadade : "outra cidade",
    CEP: "00100-210"
}
exibirEndereco = function (endereco){
    return endereco;
   }
   console.log(exibirEndereco(endereco));
   console.log(exibirEndereco(endereco2));

   //outra proposta de funcao
   function exibirEndereco2 (endereco){
       for(let chave in endereco)
       console.log(chave, endereco[chave]);
   }

   exibirEndereco2(endereco2);