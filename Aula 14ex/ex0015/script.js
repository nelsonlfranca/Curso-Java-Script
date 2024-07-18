var num = document.getElementById('txtnum')
var res = document.getElementById('res')

if (num.value < 0){
    alert('ERRO, Insira um valor válido!')
    res.innerHTML('Impossível gerar!')
} else{
    alert('Tudo OK!')
}