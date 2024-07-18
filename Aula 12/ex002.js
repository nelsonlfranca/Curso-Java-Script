var horaexata = new Date()
var hora = horaexata.getHours ()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
}