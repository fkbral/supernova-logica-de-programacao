# Programação funcional

## Mutabilidade (O que fazíamos até aqui)
Quando nós manipulamos arrays utilizando os métodos push, pop, shift, unshift, splice e etc, nós estamos **alterando** os arrays.

### Por que isso é uma "má" prática?
- Isto gera EFEITOS COLATERAIS e isso pode gerar comportamentos inesperados nos nossos códigos
- É uma sintaxe imperativa (código que é feito para ser compreendido por máquinas)
```ts
  const usuarios = ["Fulano", "Ciclano", "Maria", "Jonas", "José"]
  usuarios.splice(usuarios.indexOf("Ciclano"), 1)
```

## Imutabilidade (o que faremos agora)
- Sempre que precisarmos de um array com novas informações, nós criaremos o array do zero
- Para o exemplo acima, iremos converter o splice para filter e o indexOf para findIndex