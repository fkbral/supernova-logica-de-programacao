const usuarios = ["Fulano", "Ciclano", "Maria", "Jonas", "José"]
console.log(usuarios.length)
console.log(usuarios)

const novoUsuario = "Carla"

// usuarios = ["Fulano", "Ciclano", "Maria", "Jonas", "José", novoUsuario]

usuarios.push(novoUsuario)
usuarios.push("Zé", "Larissa")

console.log(usuarios)

// método pop retira elemento da última posição do array
usuarios.pop()
console.log(usuarios)

const usuarioRetirado = usuarios.pop()
console.log(`${usuarioRetirado} foi retirado do array`)
usuarios.pop()
usuarios.pop()
console.log(usuarios)

// método shift permite remover elementos do início do array
usuarios.shift()
console.log(usuarios)

usuarios.shift()
console.log(usuarios)

// método unshift para inserir elementos no início do array
usuarios.unshift('Zeca')
console.log(usuarios)

// como Fulano não pertence mais ao array, o método abaixo retorna -1, caso contrário
// retornaria o índice encontado
console.log(usuarios.indexOf('Fulano'))

// if(usuarios.indexOf('Maria') > - 1) {
if(usuarios.includes('Maria')) {
  const indiceEncontrado = usuarios.indexOf('Maria')
  console.log(
    `usuária Maria está presente no array, na posição de índice ${indiceEncontrado}`
  )

  // splice deleta elementos a partir do índice dado e na quantidade passada como segundo parâmetro
  usuarios.splice(indiceEncontrado, 1)
  // opcionalmente podemos passar um terceiro ou mais parâmetros para incluir
  // itens na posição do elemento removido
  // usuarios.splice(indiceEncontrado, 1, 'Paula', 'Ana')
}

const indiceJonas = usuarios.indexOf('Jonas')
if (indiceJonas > -1) {
  usuarios[indiceJonas] = 'Jonas Silva'
}

console.log(usuarios)