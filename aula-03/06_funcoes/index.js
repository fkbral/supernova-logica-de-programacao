function helloWorld() {
  console.log('Hello World')
}

function sauda(nome) {
  console.log('Olá ' + nome)
}

function ehParValidandoParametro(numero) {
  if (!numero) {
    throw new Error('Você precisa fornecer um número para checar se é par')
  }

  return numero % 2 === 0
}

function ehPar(numero = 0) {
  return numero % 2 === 0
}

function cumprimentaDeAcordoComTempoOriginal(nome, tempo) {
  if (tempo === 'manhã') {
    console.log('Bom dia, ' + nome)
    return
  }

  if (tempo === 'tarde') {
    console.log('Boa tarde, ' + nome)
    return
  }

  if (tempo === 'noite') {
    console.log('Boa noite, ' + nome)
    return
  }
}

function cumprimentaDeAcordoComTempo(nome, tempo) {
  if (tempo === 'manhã') {
    return `Bom dia, ${nome}`
  }

  if (tempo === 'tarde') {
    // return `Boa ${tempo}, ${nome}`
    return `Boa tarde, ${nome}`
    
  }

  if (tempo === 'noite') {
    return `Boa noite, ${nome}`
  }
}

const teste = helloWorld()
console.log(teste)

helloWorld()
helloWorld()
helloWorld()
sauda('Felipe')
sauda('Maria')
console.log(ehPar(10))
console.log(ehPar(15))
console.log(ehPar(1))
console.log(ehPar())
// console.log(ehParValidandoParametro())

const cemEhPar = ehPar(100)
console.log('cem é par?: ' + cemEhPar)

const onzeEhPar = ehPar(11)
console.log('onze é par?: ' + onzeEhPar)

console.log(cumprimentaDeAcordoComTempo('João', 'tarde'))
console.log(cumprimentaDeAcordoComTempo('Maria', 'noite'))