import assert from 'assert'

describe('Meu primeiro teste', () => {
    it('Verificar igualdade', () =>{
        let aux = 2+1;
        assert.strictEqual(aux, 3)
    })

    it('Verificar igualdade', () =>{
        let aux = 3;
        assert.strictEqual(aux, 3)
    })

})

describe('Meu segundo teste', () => {
    it('Verificar igualdade', () =>{
        let aux = 'skull';
        assert.strictEqual(aux, 'head')
    })

    it('Verificar negacao de igualdade', () =>{
        let aux = 3;
        assert.notStrictEqual(aux, '3')
    })

})
