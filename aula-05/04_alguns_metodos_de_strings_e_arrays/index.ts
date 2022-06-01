const nome = "     Fulano   Da Silva  "

console.log(nome)
console.log(nome.trim())
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

const nome2 = "Zeca Souza Silva"

const nomes2Array = nome2.split(' ')
console.log(nomes2Array)

const [primeiroNome, sobrenomeDoMeio, ultimoSobrenome] = nomes2Array

// REST OPERATOR
const [nome1, ...sobrenomes] = nomes2Array

console.log(primeiroNome)
console.log(sobrenomeDoMeio)
console.log(ultimoSobrenome)

console.log(nome1)
console.log(sobrenomes)
console.log(sobrenomes.join(' '))


const time = ["Carla", "Joana", "Maria", "Josefa", "Tabata"]

const [primeira, segunda, ...timeFim] = time
console.log(primeira)
console.log(segunda)
console.log(timeFim)

const [ultima, ...restoDoTime] =  time.reverse()
console.log(restoDoTime)

console.log(`O time é formado por ${restoDoTime.reverse().join(', ')} e ${ultima}`)