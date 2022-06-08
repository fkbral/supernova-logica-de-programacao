const aluno = {
  nome: "Fulano",
  materias: {
    matematica: {
      notas: [5, 3, 10]
    },
    fisica: {
      notas: [7, 7, 6]
    }
  }
}

const alunos = [aluno]

console.log(aluno.materias["matematica"])
const materia = "fisica"

// if (aluno.materias[materia] && aluno.materias[materia].notas) {
// if (aluno.materias[materia]?.notas) {
  const soma = aluno.materias[materia]?.notas.reduce((acc, nota) => acc + nota, 0)
  const media = soma/aluno.materias[materia]?.notas.length

  console.log(soma)
  console.log(media)
// }

console.log(aluno.materias["ingles"] && aluno.materias["ingles"].notas)
console.log(alunos?.[1]?.materias)
