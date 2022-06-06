interface Usuario {
  nome: string
  idade: number
  podeFazerCFC?: boolean
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

let usuariosComDadosDeCNH = []

// for (let usuario of usuarios) {}
usuarios.forEach(usuario => {
  // usuariosComDadosDeCNH.push({
  //   nome: usuario.nome,
  //   idade: usuario.idade,
  //   podeFazerCFC: usuario.idade >= 18
  // })

  // usuariosComDadosDeCNH.push({
  //   ...usuario,
  //   podeFazerCFC: usuario.idade >= 18
  // })

  const usuarioComCNH: Usuario = {
    ...usuario,
    podeFazerCFC: usuario.idade >= 18
  }

  usuariosComDadosDeCNH = [...usuariosComDadosDeCNH, usuarioComCNH]
})

console.log(usuariosComDadosDeCNH)

export {}