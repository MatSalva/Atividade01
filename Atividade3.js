const prompt = require ('prompt-sync')()

console.log('Acesso exclusivo de Professores')
let grade = Number(prompt('Informe a nota do aluno:')) // Solicita a nota ao usuário     

// Verifica se a nota é inválida
if(grade < 0 || grade > 10){
    console.log("Nota inválida")
} 
// Verifica se a nota é entre 7 e 10 e imprime 'Aprovado'
else if (grade >= 7 && grade <= 10){
    console.log(`Aprovado com Nota: ${grade}`)
} 
// Verifica se a nota é entre 4 e 6.9 e imprime 'Recuperação'
else if (grade <= 6.9 && grade >= 4){
    console.log(`Recuperação com Nota: ${grade}`)
} 
// Verifica se a nota é entre 0 e 3.9 e imprime 'Reprovado'
else if (grade <= 3.9 && grade >= 0){
    console.log(`Reprovado com Nota: ${grade}`)
}       

 