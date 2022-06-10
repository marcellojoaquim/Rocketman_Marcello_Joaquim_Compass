// Criar uma factory function

function novoCarro(marca, modelo, cor, ano){
    return{
    marca,
    modelo,
    cor, 
    ano,
    ignicao() {
        console.log("Ligando motor...")
    }
}
}


const carro = novoCarro("fiat", "mob", "preto", 2021);
console.log(carro);