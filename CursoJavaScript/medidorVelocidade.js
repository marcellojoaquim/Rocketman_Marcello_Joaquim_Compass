/*
regras de negócio: 
velocidade máxima permitida é até 70 km/h
a cada 5 km acima do limite de velocidade ganha 1 ponto na carteira.
usar a funcao Math.Floor() para arredondar valores
caso os pontos sejam maior que 12 a carteira é suspensa.
*/

const limite = 70;
verificaVelocidade(123);

function verificaVelocidade(velocidade){

    if(velocidade <=70){
        console.log("Velocidade ok!");
    }else {
        let pontos = Math.floor((velocidade - limite)/5);
        if(pontos <= 12){
            console.log("Número de pontos: "+pontos)
            console.log("Nao será suspenso")
        }else{
            console.log("Número de pontos: "+pontos);
            console.log("Suspenso por excesso de velocidade.");
        }
    }
    
}