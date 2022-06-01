const nomeJogador = "Estevam"
const idadeJogador = 23
const alturaJogador = 1.7

const jogador = {
  nome: 'Estevam',
  idade: 23,
  altura: 1.7,
  podeJogar: true,
  golsMarcadosNasUltimasNPartidas : [4, 2, 1]
}

console.log(jogador)
console.log(jogador.nome)
console.log(jogador["nome"])
console.log(jogador.idade)
console.log(jogador["idade"])
console.log(jogador.altura)
console.log(jogador["altura"])

for (let propriedade in jogador) {
  console.log(propriedade)
  if (propriedade === 'idade') {
    jogador.dobroDaIdade = jogador[propriedade] * 2
    // jogador.dobroDaIdade = jogador.idade * 2
  }

  // if (propriedade === 'golsMarcadosNasUltimasNPartidas') {
  //   let somaDeGolsDasUltimasNPartidas = 0
  //   for (let gol of jogador[propriedade]) {
  //     somaDeGolsDasUltimasNPartidas += gol
  //   }

  //   jogador.mediaDeGolsMarcadosNasUltimasNPartidas = 
  //     somaDeGolsDasUltimasNPartidas/jogador.golsMarcadosNasUltimasNPartidas.length
  // }
}

let somaDeGolsDasUltimasNPartidas = 0
for (let gol of jogador["golsMarcadosNasUltimasNPartidas"]) {
  somaDeGolsDasUltimasNPartidas += gol
}

jogador.mediaDeGolsMarcadosNasUltimasNPartidas = 
      somaDeGolsDasUltimasNPartidas/jogador.golsMarcadosNasUltimasNPartidas.length

console.log(jogador)