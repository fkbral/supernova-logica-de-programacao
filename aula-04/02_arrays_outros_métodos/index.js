const usuarios1 = ["Fulano", "Ciclano", "Maria", "Jonas", "José"]
const usuarios2 = ["Roberta", "Zulmira", "Vera", "Valério"]
const usuarios3 = ["Cláudio", "Marcela", "Iago"]

function ordenaDeZaA(nome1, nome2) {
  if (nome1 > nome2) {
    return -1
  }

  if (nome1 < nome2) {
    return 1
  }

  return 0
}

const usuariosComConcat = usuarios1.concat(usuarios2).concat(usuarios3)
console.log(usuariosComConcat)

// sintaxe ES6/ES2015
// SPREAD OPERATOR (COPIA ELEMENTOS DE ARRAY)
const usuarios = [...usuarios1, ...usuarios2, ...usuarios3]
console.log(usuarios)

// inverte e ALTERA o array original
usuarios.reverse()

console.log(usuarios)

usuarios.reverse()

console.log(usuarios)

usuarios.sort()
console.log(usuarios)

usuarios.sort(ordenaDeZaA)

// usuarios.sort(function (nome1, nome2) {
//   if (nome1 > nome2) {
//     return -1
//   }
  
//   if (nome1 < nome2) {
//     return 1
//   }

//   return 0
// })

// usuarios.sort((nome1, nome2) => {
//   if (nome1 > nome2) {
//     return -1
//   }
  
//   if (nome1 < nome2) {
//     return 1
//   }

//   return 0
// })
console.log(usuarios)