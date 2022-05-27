console.log(10 < 2)
console.log(10 <= 2)
console.log(10 > 2)
console.log(10 >= 2)

console.log(10 == 10)
console.log(10 === 10)
console.log(10 == '10')
console.log(10 === '10')

console.log(10 + 10)
console.log('10' + 10)
console.log(10 - '10')
console.log('10' - '10')

const somaReal = 0.1 + 0.2
const tolerancia = 0.001

console.log(
  somaReal <= somaReal + tolerancia && somaReal >= somaReal - tolerancia
)