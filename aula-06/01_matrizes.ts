const tabela = [
  [2, 3],
  [9, 2],
  [11, 4],
  [30, 20]
]

console.log(tabela[0])
console.log(tabela[0][0])
console.log(tabela[0][1])
console.log(tabela[3])

const csvZoologico = [
  ["nome","seção","população"],
  ["pinguim","vale do gelo",8],
  ["hipopótamo","laguinho da entrada",3],
  ["gorila","zona verde",5],
]

const [header, ...dadosDosAnimais] = csvZoologico
console.log(header)
console.log(dadosDosAnimais)

console.log(csvZoologico[0])
console.log(csvZoologico[1])
console.log(csvZoologico[2])
console.log(csvZoologico[3])