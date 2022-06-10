
function cadastroUsuario(){
  alert('Cadastrando usuário...')
}
function listaUsuario(){
  alert('Listando usuário...')
}
function pesquisaUsuario(){
  const email = prompt('Entre com um email para pesquisar usuário')
  alert(`Pesquisando usuário com email ${email} ...`)
}
function deletaUsuario(){
  alert('Deletando usuário...')
}
function sairDoPrograma(){}
function atualizaUsuario(){
  alert('Atualizando usuário...')
}

export function programaComMenu(){
  let opcaoEscolhida: number = 1

  while(opcaoEscolhida !== 0) {
    opcaoEscolhida = parseInt(prompt(`
    0. Sair do programa\n
    1. Cadastrar Usuário\n
    2. Listar Usuário\n
    3. Pesquisar Usuário por email\n
    4. Deletar usuário\n
    5. Atualizar usuário
    `) as string)

    acoes[opcaoEscolhida as ValidOpions]()
  }
}

type ValidOpions = 0| 1 | 2 | 3 | 4 | 5
type Action = Record<ValidOpions, () => void>

const acoes: Action = {
  0: sairDoPrograma,
  1: cadastroUsuario,
  2: listaUsuario,
  3: pesquisaUsuario,
  4: deletaUsuario,
  5: atualizaUsuario,
}

// console.log('0. Sair do programa')
// console.log('1. Cadastrar Usuário')
// console.log('2. Listar Usuário')
// console.log('3. Pesquisar Usuário por email')
// console.log('4. Deletar usuário')
// console.log('5. Atualizar usuário')

// alert(`
// 0. Sair do programa\n
// 1. Cadastrar Usuário\n
// 2. Listar Usuário\n
// 3. Pesquisar Usuário por email\n
// 4. Deletar usuário\n
// 5. Atualizar usuário`
// )

// while(opcaoEscolhida !== 5) {
//   if(opcaoEscolhida === 1){
//     cadastroUsuario()
//   }
//   if(opcaoEscolhida === 2){
//     listaUsuario()
//   }
//   if(opcaoEscolhida === 3){
//     pesquisaUsuario()
//   }
//   if(opcaoEscolhida === 4){
//     deletaUsuario()
//   }
//   if(opcaoEscolhida === 5){
//     sairDoPrograma()
//   }
// }



