const prompt = require ('prompt-sync')()

let imc = (peso, altura) => (peso / (altura * altura)).toFixed(2) // Calcula o IMC

// Recebe os dados de peso e altura
let peso = Number(prompt("Insira o seu peso: ")) 
let altura = Number(prompt("Insira a sua altura: "))

// Verifica a classificação
if (imc(peso, altura) < 18.5) {
    // Imprime o IMC e a classificação
    console.log("Peso abaixo do normal IMC: " + imc(peso, altura))
} else if (imc(peso, altura) > 18.5 && imc(peso, altura) < 24.9) {
    console.log("Peso normal IMC: " + imc(peso, altura))	
} else if (imc(peso, altura) > 24.9 && imc(peso, altura) < 29.9) {
    console.log("Acima do peso IMC: " + imc(peso, altura)) 
} else if (imc(peso, altura) > 29.9 && imc(peso, altura) < 34.9) {
    console.log("Obesidade IMC: " + imc(peso, altura))
}    