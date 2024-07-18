function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if(fano.value == 0 || fano.value > ano){
    alert('ERRO Verifique os dados e tente novamente!')
} else {
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id','foto')
   
   if (fsex[0].checked){
    genero = 'Homem'
    if (idade >=0 && idade <10){
        //Criança
        img.setAttribute('src','menino.png')
    } else if (idade < 21) {
        //Jovem
        img.setAttribute('src','jovemmasc.png')
    } else if (idade < 55){
        //Adulto
        img.setAttribute('src','homemadulto.png')
    } else {
        //Idoso
        img.setAttribute('src','idoso.png')
    }
   } else if (fsex[1].checked){
    genero = 'Mulher'
    if (idade >=0 && idade <10){
        //Criança
        img.setAttribute('src','menina.png')
    } else if (idade < 21) {
        //Jovem
        img.setAttribute('src','jovemfem.png')
    } else if (idade < 55){
        //Adulto
        img.setAttribute('src','mulheradulta.png')
    } else {
        //Idoso
        img.setAttribute('src','idosa.png')
    }
   }
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
}
}