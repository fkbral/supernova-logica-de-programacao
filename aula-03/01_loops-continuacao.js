let deveContinuar = true
let opcaoEscolhida

while(deveContinuar) {
  console.log('Opção 1 -- Cadastrar usuário')
  console.log('Opção 2 -- Listar usuários')
  console.log('Opção 3 -- Pesquisar usuário por email')
  opcaoEscolhida = prompt('Escolha uma opção:')

  console.log('A opção escolhida foi: ' + opcaoEscolhida)

  simOuNao = prompt('Você deseja continuar (S/N): ')
  deveContinuar = simOuNao === 'S' || simOuNao === 's'
}