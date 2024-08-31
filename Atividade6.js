const prompt = require ('prompt-sync')()

// Recebe os lados do triângulo
let a = Number(prompt("Insira o primeiro lado: "))
let b = Number(prompt("Insira o segundo lado: "))
let c = Number(prompt("Insira o terceiro lado: "))

if (a + b > c && a + c > b && b + c > a) {
    // Verifica o tipo de triângulo
    if (a === b && b === c) {
        console.log("Triângulo Equilátero")
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo Isoceles")
    } else {
        console.log("Triângulo Escaleno")
    }
} else {
    console.log("Triângulo Inexistente")
}

