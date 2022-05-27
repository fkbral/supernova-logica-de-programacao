const numero1 = 1
const numero2 = 3
const numero3 = 44
const numero4 = 32
const numero5 = 120
let soma

soma = numero1 + numero2 + numero3 + numero4 + numero5
console.log(soma)

const listaVazia = [] // lista vazia
const numeros = [1, 3, 44, 32, 120]
const alunos = ["Fulano", "Ciclano"]
const lista = ["Fulano", 100, true, [0, 1]]

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[89])

soma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]
console.log(soma)

soma = 0
for (let numero of numeros) {
  soma = soma + numero
}

console.log(soma)
