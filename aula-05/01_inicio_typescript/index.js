var numero = 20;
var dobroDoNumero = numero * 2;
var pessoas = ["Fulana", "Ciclana", "Zé", "Ana", "Zeca", "Antônia"];
var numeros = [];
var nome;
// se já temos uma atribuição, na maior parte dos casos, é redundante declarar o tipo
// código redundante
var numero2 = 30;
nome = "Teste";
// estas duas linhas estão tentando incluir valores incompatíveis para nossos arrays
//  e dão erro no typescript
// pessoas.push(100)
// numeros.push(true)
numeros.push(4, 121, 11, 5);
pessoas.push('Clarice');
numeros.push(77);
console.log("O dobro do n\u00FAmero ".concat(numero, " \u00E9 ").concat(dobroDoNumero));
console.log(pessoas);
