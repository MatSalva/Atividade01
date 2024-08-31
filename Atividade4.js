const prompt = require ('prompt-sync')()

// Menu do estabelecimento
console.log("Menu de Cafés da Cafeteria do José:")
  console.log("1. Café Preto")
  console.log("2. Café ao Leite")
  console.log("3. Café Gourmet")
  console.log("0. Sair")

  let order = prompt('Escolha seu café: ') // Entrada do usuário
  
  // Opção selecionada pelo usuário
  switch (order) {
    case '1': 
      console.log("Café Preto") // Código para a opção 1
      break
    case '2':
      console.log("Café ao Leite") // Código para a opção 2
      break
    case '3':
      console.log("Café Gourmet") // Código para a opção 3
      break
    case '0':
      console.log("Saindo...") // Código para a opção 0 de sair
  }
