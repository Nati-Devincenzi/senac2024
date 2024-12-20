// Natália Devincenzi Martins_1A-M

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

// EXERCÍCIO 1:
/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

Cada vez que o código roda, é somado mais um valor ao índice e o valor sendo o resultado que rodou 
anteriormente. O valor do "i" no código pode ir até 4, e assim as somas de cada rodada irão
resultar em 10. irá ser imprimido no console "10".
*/

// EXERCÍCIO 2:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a) No console aparecerá todos os números maiores que 18, pois foi declarado que: se o número for maior 
// que 18, escreva o número.

// b) Não, pois o "for... of" percorre todo o vetor e não é possível acessar suas posições. 
// Para fazer isso, teríamos que utiliuzar o laço "for". 

// EXERCÍCIO 3: 
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Se o usuário digitar 4, irá aparecer no console quatro linhas, aumentando um asterisco a cada linha.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO.

// EXERCÍCIO 1:
// let quantidadeAnimais = Number(prompt("Qual a quantidade de bichinhos estimação você tem?"))

// if (quantidadeAnimais === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else if(quantidadeAnimais > 0) {
//     for (let i = 0; i < quantidadeAnimais; i++) {
//         nomeAnimais[i] = prompt("Escreva o nome dos seus animais de estimação:")
// }
//     console.log("Esses são os nomes dos seus animais de estimação:", nomeAnimais)
// }

// EXERCÍCIO 2:
// const arrayOriginal = [1, 2, 3, 4, 5, 6]
// let novoArray = []
// let stringsFormatadas = []
// let numMaior = arrayOriginal[0]
// let numMenor = arrayOriginal[0]
 
// for (let ordem of arrayOriginal) {
//     console.log(ordem);
//     console.log(`Esses valores são as divisões do 10: ${ordem / 10}`)
   
//     if (ordem % 2 === 0) {
//         novoArray.push(`Esse é o array formado por somente números pares: ${ordem}\n`)
//     }
// }

// for (let i = 0; i < arrayOriginal.length; i++) {
//     stringsFormatadas.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}\n`)
// }

// for (let i = 0; i < arrayOriginal.length; i++) {
//     if (arrayOriginal[i] > numMaior) {
//         numMaior = arrayOriginal[i]
//     }
// }
// console.log(`Esse é o maior número do array: ${numMaior}`)
// console.log(`Esse é o menor número do array: ${numMenor}`)
 
 
// console.log(novoArray.join(''))
 
// console.log(stringsFormatadas.join(''))


// DESAFIOS:

// DESAFIO 1:
// let numeroEscolha = Number(prompt("Digite um número para o outro participante acertar:"))
// let contador = 0

// console.log("Vamos jogar!")
 
// while(numeroEscolha != numeroParticipante){
//     var numeroParticipante = Number(prompt("Tente acertar o número"))
//     if(numeroEscolha === numeroParticipante){
//         contador++
//         console.log("O número chutado foi:", numPart)
//         console.log("Acertou!!")
 
//     } else if(numeroParticipante > numeroEscolha){
//         console.log("O número chutado foi:", numPart)
//         console.log("Errrrrrrrou, é menor")
//         contador++

//     } else if(numeroParticipante < numeroEscolha){
//         console.log("O número chutado foi:", numeroParticipante)
//         console.log("Errrrrrrrou, é maior")
//         contador++
//     }
// }
//     console.log(`Esse foi o numero de tentativas ${contador}`)

// DESAFIO 2:
// const numeroEscolha = Math.floor(Math.random() * 100) + 1
// let contador = 0;
 
// console.log("Vamos jogar!")
 
// while(numeroEscolha != numeroParticipante){
//     var numeroParticipante = Number(prompt("Tente acertar o número"))
//     if(numeroEscolha === numeroParticipante){
//         contador++
//         console.log("O número chutado foi:", numeroParticipante)
//         console.log("Acertou!!")
 
//     } else if(numeroParticipante > numeroEscolha){
//         console.log("O número chutado foi:", numeroParticipante)
//         console.log("Errrrrrrrou, é menor")
//         contador++
 
//     } else if(numeroParticipante < numeroEscolha){
//         console.log("O número chutado foi:", numeroParticipante)
//         console.log("Errrrrrrrou, é maior")
//         contador++
//     }
// }
//     console.log(`Esse foi o numero de tentativas ${contador}`)
