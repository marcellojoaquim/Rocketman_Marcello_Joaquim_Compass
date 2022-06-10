/* Criar um objeto postagem de blog que contenha as seguintes propriedades:
titulo; mensagem; autor; vizulizacoes; comentarios(autor, mensagem); estaAoVivo
*/

let postagem = {
    titulo : " ",
    mensagem: " ",
    autor: " ",
    visualizacoes : 0,
    comentario : [
        { autor : " ", mensagem : " " }
    ],
    estaAoVivo : true
}

console.log(postagem);