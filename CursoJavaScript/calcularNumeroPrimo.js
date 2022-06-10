//criar uma funcao para mostrar os numeros primos
//dentro de um limite a ser passado como parâmetro.

exibirNumeroPrimo(10);

function exibirNumeroPrimo(valor){
    for(let numero = 2; numero <= valor; numero++){

        if(calculaPrimo(numero)) console.log(numero);
        }
    }


function calculaPrimo(numero){
for(let divisor = 2; divisor < numero; divisor++){
    if (numero % divisor ===0){
        return false;
 
    }
}
return true;
}