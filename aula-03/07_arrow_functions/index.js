sauda('Fulano')

function helloWorld() {
  console.log('Hello World')
}

function sauda(nome) {
  console.log('Olá ' + nome)
}

function ehPar(numero = 0) {
  return numero % 2 === 0
}

const saudaArrow = (nome) => {
  console.log('Olá ' + nome)
}

;(() => {
  const numero = 50
  console.log(`o dobro do numero é ${numero * 2}`)
})()

// IIFE
;(() => {
  const numero = 10
  console.log(`o dobro do numero é ${numero * 2}`)
})()

saudaArrow('Fulano')