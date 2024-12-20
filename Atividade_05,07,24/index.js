// Natália Devincenzi Martins_1A-M

//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

//EXERCÍCIO 1:
// let array
// console.log('a. ', array) // Não está definido, então é 

// array = null
// console.log('b. ', array) // Irá aparecer o "b. null"

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // Irá aparecer: "c. 11", porque vai mostar a quantidade de itens dentrodo array

// let i = 0
// console.log('d. ', array[i]) // O "let i = 0" está mostrando que "d" é igual a três porque o "3" começa na posição 0

// array[i+1] = 19
// console.log('e. ', array) // O array está guardando o valor de i + 1, em que i = 0 e 1 = 4, que é igual à 1 (qiue inicialmente é posição do número 4). Como ele está dizendo que é igual à 19, então ele vai "riscar" o valor anterior (4) e apresentará o novo valor (19). No console, mostrará "e. 19"

// const valor = array[i+6]
// console.log('f. ', valor) // i = 0, logo: 3 = 0. Então vai ser contado de 0 à 6, com isso, chegará no número 9. No console aparecerá: "f. 9"

// EXERCÍCIO 2:
// Primeiro vai pedir para a pessoa digitar uma frase. No caso, a frase é: "Subi num ônibus em Marrocos". O "toUpperCase" vai transformar toda a frase com letras maiúsculas; O "replaceAll" vai substituir algo por alguma outra coisa (no caso substituirá os "A" por "I"); por último, o "length" vai mostrar a quantidade de letras e espaços que está dentro da frase.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// EXERCÍCIO 1:
// let nome = prompt("Digite seu nome:")
// let email = prompt("Digite seu email:")

// console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem-vinda(o),", nome,"!")

// EXERCÍCIO 2: 
const comidaFavorita = ["morango", "macarrão", "pão de queijo", "pizza", "laranja"]

console.log("Essas são as minhas comidas favoritas:")
console.log("\n", comidaFavorita)

let comidaFavDoUsuario = prompt("Digite a sua comida favorita:")
comidaFavorita[1] = comidaFavDoUsuario ;
console.log(comidaFavDoUsuario)