const prompt = require ('prompt-sync')()

let numMaças = parseInt(prompt("Digite o número de maçãs compradas: ")) // Número de maçãs compradas

// Verifica se o número de maçãs é válido
if (isNaN(numMaças) || numMaças <= 0) {
  console.log("Número de maçãs inválido. Por favor, digite um número inteiro positivo.")
} else {
  let valorTotal;
  // Verifica o número de maçãs
  if (numMaças < 12) {
    valorTotal = numMaças * 0.30  // Calcula o valor total da compra
  } else {
    valorTotal = numMaças * 0.25
  }

  // Exibe o valor total da compra
  console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}`)
}