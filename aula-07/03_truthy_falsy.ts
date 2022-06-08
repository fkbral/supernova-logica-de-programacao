const valores = [0, "", false, undefined, null, NaN, " ", true, [], {}, 10, 0.0000001, -2, () => {}]

valores.forEach(valor => {
  const resultado = valor ? "truthy" : "falsy"
  console.log(`${valor} é ${resultado}`)
})