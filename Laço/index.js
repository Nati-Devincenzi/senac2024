// LAÇO DE REPETIÇÃO:

// WHILE (enquanto):
// let i = 0 

// while (i < 10){
//     console.log(i)
//     i++
// }

//exemplo:
// let estomago = 0

// while(estomago < 100){
//     console.log("Quero comer mais coxinha")
//     estomago = estomago + 10
// }

// EXERCÍCIO:
// let numeros
// let soma = 0

// while(numeros !== 0){
    
//     numeros = Number(prompt("Digite um número:"))
//     soma = soma + numeros
// }

// console.log(soma)


// FOR (para):
// for(let i = 0; i < 10; i++){
//     console.log(i)
// } 

//uma das principais utilidades deste tipo de estrutura é 
//para percorrermos os valores contidos em um array:

// const numeros = [114, 67, 89, 15, 23]

// for(let i = 0; i < 10; i++){
//     const elemento = numeros [i]
//     console.log(elemento)
// }

// EXERCÍCIO:
// let numeros = [11, 15, 18, 14, 12, 14]
// let numeroMaior = 0

// for(let i = 0; i < 6; i++){

//     if(numeroMaior < numeros[i]){
//         numeroMaior = numeros[i]
//     }
// }
//     console.log(numeroMaior)


// FOR... OF... (para... cada...):
// const numeros = [14, 67, 89, 15, 23]

// for (let numero of numeros){
//     console.log(numero)
// }

// EXERCÍCIO:

const palavras = ["Oi", "sumido", "Tudo", "Bem?", "Saudades"]
let fraseMontada = ""

for (let frase of palavras){
    fraseMontada += palavras+" "
}
console.log(fraseMontada)





// let teste = ["Gato", "Cachorro", "Macaco", "Jaguatirica", "Onça", "Urso"]

// // for(let i = 0; i < teste.length; i++){
// //   console.log(teste[i])
// // };

// for (const i of teste) {
//   if(i === "Cabra"){
//     console.log("Você tem um cachorro!");
//   }else{
//     console.log("Ahh, que pena! Deveria adotar um!")
//   }
// }