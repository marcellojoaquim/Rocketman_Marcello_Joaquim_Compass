function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    QuemConvidou = document.getElementById('ConvidadoPor').value;

    ConvidadosFesta = ['Marcello', 'ViolaDaves', 'JimiHendrix', 'ManoBrown',]
    ConvidadoPor = ['MummRa', 'Voldemort', 'Thanos', 'DarthVader', 'Coringa', 'Pennywise', 'SrBurns','Sauron', 'DrEggman', 'Negan',
'Magneto', 'MichaelMyers', 'FreddyKrueger']
    if(ConvidadosFesta.includes(NomeConvidado)&&ConvidadoPor.includes(QuemConvidou)){
        document.getElementById('PermissaoDeEntrada').innerText ='Você pode entrar!'
    }else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}