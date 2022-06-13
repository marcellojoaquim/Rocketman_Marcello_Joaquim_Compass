//usar a tecnica de constructor factory para criar um objeto

function Cachorro(raca, porte, mediaVida) {
    this.raca = raca;
    this.porte = porte;
    this.mediaVida = mediaVida;

    this.latir=function(){
        console.log("Au, au");
    }
    this.comer=function(){
        console.log("Come");
    }
    
}
//instanciando um objeto
const cachorro = new Cachorro("vira_latas", "Medio", 13);

console.log(cachorro);
console.log(cachorro.latir);