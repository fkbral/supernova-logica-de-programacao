let deveContinuar = true
let opcaoEscolhida

// mesmo estando antes da declaração da função, não dá erro no programa
console.log(executaOpcaoEscolhida)

while(deveContinuar) {
  console.log('Opção 1 -- Cadastrar usuário')
  console.log('Opção 2 -- Listar usuários')
  console.log('Opção 3 -- Pesquisar usuário por email')
  opcaoEscolhida = parseInt(prompt('Escolha uma opção:'))

  console.log('A opção escolhida foi: ' + opcaoEscolhida)
  console.log(executaOpcaoEscolhida)
  executaOpcaoEscolhida()

  // if (opcaoEscolhida === 1) {
  //   console.log('Cadastrando novo usuário...')
  // }
  // else {
  //   if (opcaoEscolhida === 2) {
  //     console.log('Listando usuários...')
  //   }
  //   else {
  //     if (opcaoEscolhida === 3) {
  //       console.log('Pesquisando usuário...')
  //     }
  //   }
  // }

  simOuNao = prompt('Você deseja continuar (S/N): ')
  deveContinuar = simOuNao === 'S' || simOuNao === 's'
}

function executaOpcaoEscolhida() {
  if (opcaoEscolhida === 1) {
    console.log('Cadastrando novo usuário...')
    return
  }
  console.log('Se a opção 1 foi escolhida você não verá este texto')

  if (opcaoEscolhida === 2) {
    console.log('Listando usuários...')
    return
  }
  console.log('Se a opção 1 ou 2 foi escolhida você não verá este texto')

  if (opcaoEscolhida === 3) {
    console.log('Pesquisando usuário...')
    return
  }
  console.log('Se a opção 1, 2 ou 3 foi escolhida você não verá este texto')
}