// Que problema estamos tentando resolver?
// Algo que valide apenas por null e undefined

const numero = 0

const resultadoTernaria = numero ? numero : 'não sou número "válido"'
console.log(resultadoTernaria)

const resultadoNullishCoalescing = numero ?? "sou inválido"
console.log(resultadoNullishCoalescing)