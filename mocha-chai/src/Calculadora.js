export default class Calculadora{
    static soma(a,b){
        return a+b
    }
    static subtracao(a,b){
        return a-b
    }
    static divisao(a,b){
        return a/b
    }
    static multiplicacao(a,b){
        return a*b
    }
    static potencia(a,b){
        if(b==0){
            return 1
        }else{
            return a * this.potencia(a,b-1);
        }
    }

    static fatorial(a){
        if(a==0){
            return 1;
        }else{
            return a*this.fatorial(a-1);
        }
    }

    static mdc(a,b){
        if((b<=a)&&(a%b==0)){
            return b
        }else if(a <b){
            return this.mdc(b,a);
        }else{
            return this.mdc(b,a%b);
        }
    }

    static somatorio(a){
        if(a==1){
            return 1;
        }else{
            return a + this.somatorio(a-1)
        }
    }
    static calculaPrimo(numero, divisor){
    
        if (numero % divisor ===0){
            return false;
        }
    return true;
    }
}