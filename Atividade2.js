const prompt = require ('prompt-sync')()

console.log('Caso não tenha 1 ano informe 0') // Caso o usuário não entenda

let age = Number(prompt('Informe a idade: ')) // Solicita a idade ao usuário

let ageRange 

// Verifica se a idade é inválida

if(age < 0){
    ageRange = 'Idade inválida'
    console.log('Idade inválida')
}
// Verifica se a idade é entre 0 e 12 anos e imprime 'Criança'
else if (age >= 0 && age <= 12){
    ageRange = 'Criança'
    console.log('Criança')
} 
// Verifica se a idade é entre 13 e 17 anos e imprime 'Adolescente'
else if (age >= 13 && age <= 17){
    ageRange = 'Adolescente'
    console.log('Adolescente')
} 
// Verifica se a idade é entre 18 e 60 anos e imprime 'Adulto'
else if (age >= 18 && age <= 60){
    ageRange = 'Adulto'
    console.log('Adulto')
} 
// Verifica se a idade é maior que 60 anos e imprime 'Idoso'
else if (age > 60){
    ageRange = 'Idoso'
    console.log('Idoso')
}
