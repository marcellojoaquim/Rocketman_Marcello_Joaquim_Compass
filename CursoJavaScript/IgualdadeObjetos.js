function Endereco(rua, cidade, cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}


const endereco3 = new Endereco('a', 'b', 'c');
const endereco4 = new Endereco('a', 'b', 'c');

function saoIguais(endereco3, endereco4){
    return endereco3.rua === endereco4.rua &&
            endereco3.cidade === endereco4.cidade &&
            endereco3.cep === endereco4.cep;
    
}

 function enderecoMemoriaIguais(endereco3, endereco4){
        return endereco3 === endereco4;
     
 }

 console.log(saoIguais(endereco3, endereco4));
 console.log(enderecoMemoriaIguais(endereco3, endereco4));

 