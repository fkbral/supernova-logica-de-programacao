// Vamos trabalhar com high order functions de arrays

function pesquisaPorCiclano(usuario) {
  return usuario === "Ciclano"
}

const usuarios = ["Fulano", "Ciclano", "Maria", "Jonas", "José"]

console.time("indice por indexOf")
const indiceCiclanoOld = usuarios.indexOf("Ciclano")
console.timeEnd("indice por indexOf")

console.time("indice por findIndex")
// const indiceCiclano = usuarios.findIndex(function(usuario) {
//   return usuario === "Ciclano"
// })
// const indiceCiclano = usuarios.findIndex((usuario) => usuario === "Ciclano")
const indiceCiclano = usuarios.findIndex(pesquisaPorCiclano)
console.timeEnd("indice por findIndex")

console.log(indiceCiclanoOld)
console.log(indiceCiclano)

// usuarios.splice(usuarios.indexOf("Ciclano"), 1)