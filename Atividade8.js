const prompt = require ('prompt-sync')()

// Lê dois valores
let valor1 = parseInt(prompt("Digite o primeiro valor:"))
let valor2 = parseInt(prompt("Digite o segundo valor:"))

// Verifica se os valores são diferentes
if (valor1 !== valor2) {
  // Verifica se o primeiro valor é maior que o segundo
  if (valor1 > valor2) {
    // Se sim, inverte os valores
    let temp = valor1
    valor1 = valor2
    valor2 = temp
  }
  // Escreve os valores em ordem crescente
  console.log(`Os valores em ordem crescente são: ${valor1} e ${valor2}`)
} else {
  console.log("Os valores não podem ser iguais.")
}