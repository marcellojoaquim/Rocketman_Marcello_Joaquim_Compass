import assert from 'assert'
import chai, { expect } from 'chai'
import Calculadora from '../src/Calculadora.js'


const axpect = chai.expect

// describe('Meu primeiro teste', () => {
//     it('Verificar igualdade1', () =>{
//         let aux = 2+1;
// //        assert.strictEqual(aux, 3)
//         expect(aux).to.be.equals(3);
//     })

//     it('Verificar igualdade2', () =>{
//         let aux = 3;
// //        assert.strictEqual(aux, 3)
//         expect(aux).to.be.equals(3);
//     })

// })

// describe('Meu segundo teste', () => {
//     it('Verificar igualdade', () =>{
//         let aux = 'skull';
//         assert.strictEqual(aux, 'head')
//     })

//     it('Verificar negacao de igualdade', () =>{
//         let aux = 3;
//         assert.notStrictEqual(aux, '3')
//     })

// })

describe('Teste Calculadora', () => {
    it('Verificar Soma', () =>{
        let resultado = Calculadora.soma(1, 2);
        expect(resultado).to.be.eq(3);
    })
    it('Verificar Soma de números negativos', () =>{
        let resultado = Calculadora.soma(-1, 2);
        expect(resultado).to.be.eq(1);
    })

    it('Verificar Subtração', () =>{
        let resultado = Calculadora.subtracao(1, 1);
        expect(resultado).to.be.eq(0);
    })
    it('Verificar Multiplicação', () =>{
        let resultado = Calculadora.multiplicacao(1, 1);
        expect(resultado).to.be.eq(1);
    })

    it('Verificar Divisão', () =>{
        let resultado = Calculadora.divisao(2, 1);
        expect(resultado).to.be.eq(2);
    })

    it('Verificar Potencia', () =>{
        let resultado = Calculadora.potencia(2, 2);
        expect(resultado).to.be.eq(4);
    })
    it('Verificar Fatorial', () =>{
        let resultado = Calculadora.fatorial(5);
        expect(resultado).to.be.eq(120);
    })

    it('Verificar MDC', () =>{
        let resultado = Calculadora.mdc(18, 60);
        expect(resultado).to.be.eq(6);
    })

    it('Verificar Somatorio', () =>{
        let resultado = Calculadora.somatorio(4);
        expect(resultado).to.be.eq(10);
    })

    })

    

