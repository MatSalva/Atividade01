const prompt = require ('prompt-sync')()

let numero = parseInt(prompt("Digite um número inteiro:")) // Solicita um número ao usuário

// Imprime os números
for (let i = 0; i < 10; i++) {
  console.log(numero)
}