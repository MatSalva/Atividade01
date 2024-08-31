const prompt = require ('prompt-sync')()

// Solicita o número do usuário
let numero = prompt("Digite um número entre 1 e 10:")

// Verifica se o número está dentro do intervalo válido
if (numero >= 1 && numero <= 10) {
  // Exibe a tabuada
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
  }
} else {
  console.log("Número inválido. Por favor, digite um número entre 1 e 10.")
}