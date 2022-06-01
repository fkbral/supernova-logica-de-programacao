const aluno = {
  nome: 'Fulano da Silva',
  notas: {
    Matematica: [8, 7, 7, 10, 5],
    Historia: [10, 7, 4],
    Fisica: [6, 6, 7],
  }
}

for (let materia in aluno.notas) {
  console.log(materia)
  let somaMateria = 0

  for (let nota of aluno.notas[materia]) {
    // somaMateria = somaMateria + nota
    somaMateria += nota
  }

  aluno[`media${materia}`] = somaMateria/aluno.notas[materia].length
}

console.log(aluno)