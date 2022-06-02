//Declaração de Variáveis com a palavra reservada let declaração de constantes, uso de camelCase,
//concatenação, operadores aritiméticos.
//tipos primitivos.

let nascimento = 1900;
let anoAtual = 2022;
const pi = 3.14;
let idade = anoAtual - nascimento;
let altura = 1.80 ;





console.log("Seu Ano de nascimento: "+nascimento);
console.log("idade atual: "+idade);
console.log("Altura "+altura);


//tipos primitivos:

let nome = 'Atanasov'; //String literal
let peso = 110; //number literal
let estaVivo = true;//boolean
let sobrenome;//Undefined, caso não haja atribuição
let corSelecionada = null;//Redefenir o valor tipo object


//tipagem dinamica
//Uso do typeof para descobrir o tipo de uma variavel em tempo de compilação
//Nao há diferença ente inteiro e ponto flutuante


//Object

let heroi = {
    nome: 'Miles',
    sobrenome: 'Morales',
    idade: 16,
    funcao: 'Homem Aranha',
    ativo: true
};

console.log(heroi);

//Arrays

let vetor=['unidadesComputacionais', 512, 8, 32, 128, 1024];

console.log(vetor.length);
console.log(vetor[0]);
console.log(vetor);

//funções: Verbos + Substantivo, uso da palavra reservada function
//function nomeDaFuncao(){};

let corSite = "Azul";
function resetaCor(){
 corSite = " ";
};

console.log(corSite);
resetaCor();
console.log(corSite);

//Funcao com Parametros:

function resetaCor2(cor, tonalidade){
    corSite = cor+' '+tonalidade;
   };
resetaCor2("preto","claro");
console.log(corSite);

// tipos de funcoes

//realiza uma tarefa sem devolver

function dizerNome(){
 console.log('Qualquer coisa');
}

dizerNome();

// funcao que retorna algo.

function multiplicarPorDois(valor){
    return valor*2;
}
console.log(multiplicarPorDois(5));

//Operadores Aritmeticos

let salario = 100;

console.log(salario+salario);
console.log(salario-salario);
console.log(salario*0);
console.log(salario/1);
console.log(5 ** 2);// exponencial

//incremento e decremento

let num =18;
num++;
num--;

// atribuicao "=", +=, -=.

//igualdade

//estrita
console.log(1 === 1);//compara o valor e o tipo, retorna boolean.

//solta, ignora o tipo e considera apenas o valor, caso o tipo seja diferente ele converte para que fique iguais.
console.log(1==1); 


//operador ternario
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);


// operadores logicos end(&&), or(||), not(!).

let num1 = 10;
let num2 = 11;

if(num1 ==10 && num2 == 11){
    console.log(true);
}
if(num1 == 10 || num2 == 11){
    console.log(true);
}
if(num1 != 10){
    console.log(true);
}else{
    console.log(false);
}

//comparacao não booleanos
//falsy --> undefined --> null --> 0 --> false --> '' -- > NaN not a number

//truthy --> qualquer valor diferente de falsy

//trocando valor de variaveis

let a = 'vermelho';
let b = 'azul';
let aux;
console.log(a);
console.log(b);
aux = a;
a=b;
b=aux;
console.log(a);
console.log(b);


//if.. else || switch..case
let hora = 10;
if(hora >6 && hora < 12){
    console.log("Bom dia!");
}
else if(hora > 12 && hora < 18){
    console.log("Boa tarde");
}
else{
    console.log("Boa noite");
}
let permissao = 'comum';

switch(permissao){
    case 'comum':
        console.log('usuário comum');
        break;

    case 'gerente':
        console.log('usuario gerente');
        break;

    case 'diretor':
        console.log('usuario diretor');
        break;

    default:
        console.log("permissao não identificada.");
        break;
}

//estruturas de repetição

for(let i =0; i<5; i++){
    console.log("Repetindo "+i);
}
let i =0;
while(i<5){
    console.log("Repetindo while: "+i);
    i++;
}
i=0;
do{
    console.log("Repetindo DoWhile" +i);
    i++;
}while(i<5);

// estrutura de repetição para array e objetos

//declarando o objeto

const pessoa = {
    nome:'Batman',
    idade: 38
};

//for - in
for(let key in pessoa){
    console.log(key, pessoa['nome']);
}

const cores = ['red', 'blue', 'green', 'black'];

for(let index in cores){
    console.log(index, cores[index]);
}


//for - of

for(let cor of cores){
    console.log(cor);
}

//criar uma funcao que usa dois numeros e retorna o maior dele.

let n1 = 10;
let n2 = 10.1;

function Maior(n1, n2){
//com else
    // if(n1 > n2){
    //     return "Maior é: "+ n1
    // }else if(n2 > n1){
    //     return "Maior é " +n2
    // }else{
    //     return "Sao iguais. "+n1;
    // }
//com operador ternario
    return n1>n2 ? n1:n2;
}
console.log(Maior(1010, 101));


//fizzBuzz
// se divisivel por 3 => Fizz
//se divisivel por 5 => Buzz
// se divisivel pelos dois => fizzbuzz
//outro caso retorna o valor de entrada, se não for número informa que não é número


const resultado = fizzBuzz(9);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada!= 'number'){
        return 'Não é um número';
    }
    if((entrada%3==0)&&(entrada%5==0)){
        return "FizzBuzz";
    }
    if (entrada % 3==0){
        return "Fizz";
    }
    if(entrada%5==0){
        return "Buzz";
    }
      
        return entrada;
    
}




