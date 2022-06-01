function geraMediaDoAluno(aluno: IAlunoAlt) {
  for (let materia in aluno.notas) {
    console.log(materia)
    let somaMateria = 0
  
    for (let nota of aluno.notas[materia]) {
      // somaMateria = somaMateria + nota
      somaMateria += nota
    }
  
    aluno.medias[materia] = somaMateria/aluno.notas[materia].length
  }

  console.log(aluno)
}

type MateriaType = "matematica" | "historia" | "fisica"

type AlunoType = {
  nome: string
  notas: {
    // Matematica: Array<number>
    Matematica: number[]
    Historia: number[]
    Fisica: number[]
  }
}

interface IAluno {
  nome: string
  notas: {
    // Matematica: Array<number>
    Matematica: number[]
    Historia: number[]
    Fisica: number[]
  }
}

interface IAlunoAlt {
  nome: string
  notas: Record<MateriaType, [number, number, number]>
  medias: Record<MateriaType, number>
  // mediaFisica?: number
  // mediaMatematica?: number
  // mediaHistoria?: number
}

const aluno1: IAlunoAlt = {
  nome: 'Fulano da Silva',
  notas: {
    matematica: [8, 7, 7],
    historia: [10, 7, 4],
    fisica: [6, 6, 7],
  },
  medias: {} as Record<MateriaType, number>
}

const aluno2: IAlunoAlt = {
  nome: 'Maria da Silva',
  notas: {
    historia: [2, 8, 10],
    matematica: [6, 6, 6],
    fisica: [3, 10, 5]
  },
  medias: {} as Record<MateriaType, number>
}

const alunos = [aluno1, aluno2]

for (let aluno of alunos) {
  geraMediaDoAluno(aluno)
}