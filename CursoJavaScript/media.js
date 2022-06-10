/*calcular media de um array
retornar:
0-59 : E
60-69: D
70-79: C
80-89: B
90-100:A
*/

 vetor = [35, 79, 100];

console.log(mediaDoAluno(vetor));


function mediaDoAluno(notas){
    let soma = 0;
    for(let nota of notas){
        soma += nota;
    }
    const media = soma/(notas.length);
    if(media < 59) return 'E';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A';

}