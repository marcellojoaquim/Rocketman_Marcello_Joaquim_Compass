/*
criar uma funcao que retorne de * que cada linha irá ter 
até atingir um valor limite.
*/
exibirAsteristicos(5);


function exibirAsteristicos(linhas){

    for(let linha = 1; linha <= linhas; linha++){
        let valor='';
        for(let i=0; i<linha; i++){
            valor +='*';
        }
        console.log(valor);
    }
}

//outra forma de reslver o problema: 


//     let valor = '';
//     for(let linha = 1; linha<=linhas; linha++){
//         valor +='*';
//         console.log(valor);
//     }