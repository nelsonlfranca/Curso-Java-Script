function contar() {
    let ini = document.getElementById("txtini")
    let fim = document.getElementById("txtfim")
    let pas = document.getElementById("txtpas")
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 ||  pas.value.length == 0){
        alert('ERRO, Faltam Dados!')
        res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        if(i < f){ //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
        }   
        } else {
            for(let c = i; c >= f; c -= p){ //Contagem decrescente
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F6D1}`
        
    }
 
}
    
