/* Criar um objeto usando a tecnica Constructor Function.
*/

function Postagem (titulo, autor, mensagem, ) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor, 
    this.visualizacoes = 0,
    this.comentarios = [
        {
            comentario : " ",
            autorComentario : " "
        }
    ],
    this.aoVivo = true
}

let postagem = new Postagem('a', 'b',aoVivo = true );
console.log(postagem);