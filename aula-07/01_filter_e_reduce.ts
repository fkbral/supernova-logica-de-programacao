type PosicaoJogador = "atacante" | "centro-avante" | "zagueiro"

interface Jogador {
  nome: string
  idade: number
  alturaEmMetros: number
  camisa: number
  posicao: PosicaoJogador
}

interface DadosTime {
  somatorioIdades: number
  mediaIdades: number
  numeroDeJogadoresPorPosicao?: Record<PosicaoJogador, number>
}

const dadosTime: DadosTime = {
  somatorioIdades: 0,
  mediaIdades: 0,
  numeroDeJogadoresPorPosicao: {} as Record<PosicaoJogador, number>
}

const time: Jogador[] = [
  {
    nome: "Carlos",
    alturaEmMetros: 1.8,
    idade: 23,
    camisa: 5,
    posicao: 'atacante',
  },
  {
    nome: "Fulano",
    alturaEmMetros: 1.67,
    idade: 20,
    camisa: 7,
    posicao: 'zagueiro',
  },
  {
    nome: "Roger",
    alturaEmMetros: 1.75,
    idade: 27,
    camisa: 10,
    posicao: 'atacante',
  },
  {
    nome: "Jonas",
    alturaEmMetros: 1.79,
    idade: 18,
    camisa: 12,
    posicao: 'centro-avante',
  },
  {
    nome: "Yuri",
    alturaEmMetros: 1.90,
    idade: 29,
    camisa: 3,
    posicao: 'zagueiro',
  },
  {
    nome: "Fábio",
    alturaEmMetros: 1.92,
    idade: 35,
    camisa: 11,
    posicao: 'zagueiro',
  }
]

const jogadoresComMaisDe30Anos = time.filter((jogador, indice, arrayInteiro) => jogador.idade > 30)
const jogadoresComAPartirDe190cm = time.filter(jogador => jogador.alturaEmMetros >= 1.9)
const jogadoresComAPartirDe200cm = time.filter(jogador => jogador.alturaEmMetros >= 2)
const jogadoresComNomeIniciadoEmF = time.filter(jogador => jogador.nome.toLowerCase().startsWith('f'))
// const jogadoresComNomeIniciadoEmF = time.filter(jogador => jogador.nome.charAt(0) === 'F')

console.log(jogadoresComMaisDe30Anos)
console.log(jogadoresComAPartirDe190cm)
console.log(jogadoresComAPartirDe200cm)
console.log(jogadoresComNomeIniciadoEmF)

console.log(time.length)
console.log(time[time.length -1])
// console.log(time.at(-1))

const tresPrimeirosJogadores = time.filter((_, indice) => indice < 3)
console.log(tresPrimeirosJogadores)

let somatorioIdadesForeach = 0
time.forEach(jogador => {
  somatorioIdadesForeach += jogador.idade
})
console.log(somatorioIdadesForeach)

const somatorioIdades = time.reduce((acumulador, jogador) => acumulador + jogador.idade, 0)
const mediaIdades = Math.round(somatorioIdades/time.length)
// const somatorioIdades = time.reduce((acc, jogador, indice, arrayInteiro) => acc + jogador.idade, 0)

time.reduce((acc, jogador, indice, arrayInteiro) => {
  const { idade, posicao} = jogador

  acc.somatorioIdades += idade

  console.log(acc.somatorioIdades)

  acc.mediaIdades = Math.round(acc.somatorioIdades/(indice + 1))
  // acc.mediaIdades = Math.round(acc.somatorioIdades/arrayInteiro.length)

  console.log(acc.mediaIdades)

  acc.numeroDeJogadoresPorPosicao[posicao] = 
    acc.numeroDeJogadoresPorPosicao[posicao]
    ? acc.numeroDeJogadoresPorPosicao[posicao] + 1
    : 1

  return acc
}, dadosTime)

console.log(somatorioIdades)
console.log(mediaIdades)

console.log(dadosTime)