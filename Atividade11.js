const prompt = require ('prompt-sync')()

// Calcula a soma total
let soma = 0
for (let i = 0; i < 5; i++) {
  let numero = parseFloat(prompt(`Digite o número ${i + 1}:`))
  soma += numero
}

// Exibe o resultado
console.log(`A soma total é: ${soma}`)