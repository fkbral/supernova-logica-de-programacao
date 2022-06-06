interface Usuario {
  nome: string
  idade: number
}

const usuarios: Usuario[] = [
  {
    nome: "Fulano",
    idade: 22,
  },
  {
    nome: "Ciclana",
    idade: 20,
  },
  {
    nome: "João",
    idade: 16,
  },
  {
    nome: "Carla",
    idade: 33,
  },
  {
    nome: "Joana",
    idade: 20,
  },
]

const usuarioComMaisDe18 = usuarios.find((usuario) => usuario.idade > 18)
const usuarioCom20Anos = usuarios.find((usuario) => usuario.idade === 20)
const todosUsuariosSaoMaioresdeIdade = usuarios.every((usuario) => usuario.idade >= 18)
const algunsUsuariosSaoMaioresdeIdade = usuarios.some((usuario) => usuario.idade >= 18)

console.log(usuarioComMaisDe18)
console.log(usuarioCom20Anos)
console.log(todosUsuariosSaoMaioresdeIdade)
console.log(algunsUsuariosSaoMaioresdeIdade)
