/* Criar um array de objetos de faixa de preço para que ele poca ser usado em um site igual 
a um e=commerce */


// solucao direto no array, crinado array

let faixasPreco = [
    { tooltip : 'ate R$700', minimo : 0, maximo : 700},
    {tooltip : 'ate R$1000', minimo : 701, maximo : 1000},
    {tooltip : 'ate R$1500', minimo : 1001, maximo : 1500}
]

//solucao Constructor
// neste caso é necessário instaciar o objeto atraves da palavra reservada "new"
function FaxiaDePreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

