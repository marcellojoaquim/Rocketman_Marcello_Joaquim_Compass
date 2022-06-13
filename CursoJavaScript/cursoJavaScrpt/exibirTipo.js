/*
Receber um valor contar ate o valor quem é impar e quem é par.
*/

exibirTipo(5);

function exibirTipo(limite){
    for(let i =0; i<=limite; i++){
        if(i%2==0){
            console.log(i+" é Par.");
        }else{
            console.log(i+" é Ímpar!");
        }
    }
}


// criar um programa que retorne apenas strings de um objeto.

const filme = {
    titulo: 'HellBoy',
    Ano: 2004,
    Diretor: 'Gillermo del Toro',
    Personagem: 'Abin Sapien'

}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop]);
        }
    }
}

//criar uma função que retorne a soma dos multiplos de 3 e 5 de um determinado valor.

somarMultiplos(10);
function somarMultiplos(valor){
    let somamult3=0;
    let somamult5=0;
   for(let i=0; i<=valor; i++){
    if(i % 3 == 0){
         somamult3 += i;   
       }
      
   }
   for(let i=0; i<=valor; i++){
       if(i % 5 ==0){
          somamult5 = somamult5 + i;
       }
   } 

   let resultado = somamult3 + somamult5;
   console.log("Resultado é: "+resultado);

}