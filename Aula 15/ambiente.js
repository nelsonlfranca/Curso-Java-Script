let num = [5,8,2,9,3]
num.push(1)
// // [ 1, 2, 3, 5, 8, 9 ] Adicionou o "1"
num.sort()
// // [ 2, 3, 5, 8, 9 ] colocou em ordem crescente 
console.log(num)
// [ 5, 8, 2, 9, 3 ]
console.log(`O vetor tem ${num[0]} posições`)
// // O vetor tem  5 posições
console.log(`O primeiro valor do vetor é ${num[0]}`)
// O primeiro valor do vetor é 5
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
// O valor 8 está na posição 4 [ 1, 2, 3, 5, '8', 9 ]
let pos = num.indexOf(8)
if (pos < 0) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

