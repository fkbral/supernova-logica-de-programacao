const numero = 20
const dobroDoNumero = numero * 2
const pessoas = ["Fulana", "Ciclana", "Zé", "Ana", "Zeca", "Antônia"]
const numeros: number[] = []

let nome: string

// se já temos uma atribuição, na maior parte dos casos, é redundante declarar o tipo
// código redundante
let numero2: number = 30

nome = "Teste"

// estas duas linhas estão tentando incluir valores incompatíveis para nossos arrays
//  e dão erro no typescript
// pessoas.push(100)
// numeros.push(true)
numeros.push(4, 121, 11, 5)
pessoas.push('Clarice')
numeros.push(77)

console.log(`O dobro do número ${numero} é ${dobroDoNumero}`)
console.log(pessoas)