const arrayOriginal = [12, 44, 5, 8, 44, 130, 44];

// function ordenaNumeros(numero1, numero2) {
//   if (numero1 > numero2) {
//     return 1
//   }
//   if (numero1 < numero2) {
//     return -1
//   }

//   return 0
// }

function ordenaNumeros(numero1, numero2) {
  if(numero1 === numero2) {
    return 0
  }
  
  return numero1 > numero2 ? 1 : -1
}

console.log(arrayOriginal)

arrayOriginal.sort(ordenaNumeros)

console.log(arrayOriginal)
