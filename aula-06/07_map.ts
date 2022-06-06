interface Usuario {
  nome: string;
  idade: number;
  podeFazerCFC?: boolean;
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
];

const idadesDosUsuarios = usuarios.map((usuario) => usuario.idade);

console.log(idadesDosUsuarios);

// const usuariosComDadosDeCNH = usuarios.map(usuario => {
//   const usuarioComCNH: Usuario = {
//     ...usuario,
//     podeFazerCFC: usuario.idade >= 18
//   }

//   return usuarioComCNH
// })

// const usuariosComDadosDeCNH = usuarios.map(usuario => {
//  return {
//     ...usuario,
//     podeFazerCFC: usuario.idade >= 18
//   } as Usuario
// })

const usuariosComDadosDeCNH = usuarios.map(
  usuario =>
    ({
      ...usuario,
      podeFazerCFC: usuario.idade >= 18,
    } as Usuario)
);

console.log(usuariosComDadosDeCNH);
