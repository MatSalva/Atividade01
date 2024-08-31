const prompt = require ('prompt-sync')()

let number = prompt("Digite um número:"); // Solicita um número ao usuário

number = parseInt(number); // Converte a entrada para um número inteiro

// Verifica se é um número
if (isNaN(number)) {
    console.log("Por favor, insira um número válido.")
} 
// Verifica se o número é positivo
else if (number <= 0) {
    console.log("O número deve ser positivo!")
} 
// Verifica se o número é par ou ímpar
else if (number % 2 === 0) {
    console.log(number + " é um número par.")
} else {
    console.log(number + " é um número ímpar.")
}