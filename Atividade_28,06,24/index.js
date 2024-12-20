// Natália Devincenzi Martins_Turma: 1A-M

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// Exercício 1 [A]:
// Primeiro o código começa perguntando o número que o usuário quer testar. 
// Mas a pergunta é uma variável de texto, então é String. 
// Mas como a resposta tem que ser em número, a variável é trocada de String para Number.
// Então, o código fará o teste: se o resto da divisão por 2 for estritamente igual à 0, o código digitará
// que o usuário passou no teste. Senão o usuário não passou no teste. 

// Exercício 1 [B]: 
// Ele vai imprimir números pares.

// Exercício 1 [C]:
// Números ímpares.


// Exercício 2 [A]:
// O código serve para mostrar o preço da fruta escolhida pelo usuário.

// Exercício 2 [B]:
// A mensagem impressa será: "O preço da fruta maçã é R$ 2.25"

// Exercício 2 [C]:
// Se retirarmos o "brake", o código irá entender a fruta, mas errará o reço. 
// O brake é um "pare". Então se não tiver o brake, o código seguirá rodando para o preço da linha de baixo, que no caso é 5 reais.

// Exercício 3 [A]:
// A primeira linha está pedindo para o usuário digitar um número. 
// Portanto, a resposta para a pergunta é um número, então, foi feita a mudança de variável: de String para Number.

// Exercício 3 [B]:
// Se o usuário digitar o número 10 o código vai ver que 10 > 0, então vai imprimir a seguinte frase: "Esse número passou no teste".
// Caso o usuário digite "-10" dará erro.

// Exercício 3 [C]:
// Haverá erro no console, pois se o número for menor que 0 o código não vai rodar o "if", ele irá direto pro "console.log". 
// Portanto, não haverá mensagem porque o if deu erro. 
// Se o número for mair que 0, ele vai rodar o "if" e depois passará para a mensagem guardada na variável com nome "mensagem".

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// Exercício 1:
// let idade = Number(prompt("Qual a sua idade? "))

// if(idade < 18){
//     console.log("Você não pode dirigir.")

// } else {
//     console.log("Você pode dirigir.")
// }

// Exercício 2:
// let turnoDoDia = prompt("Digite o turno do dia que você estuda: M (Matutino); V (Vespertino); N (Noturno).")

// if(turnoDoDia == "M"){
//     console.log("Bom dia!")
// } else if (turnoDoDia == "V"){
//     console.log("Boa tarde!")
// } else {
//     console.log("Boa noite!")
// }

// Exercício 3:
// let turnoDoDia = prompt("Digite o turno do dia que você estuda: M (Matutino); V (Vespertino); N (Noturno).")

// switch (turnoDoDia) {
//     case "M":
//         console.log("Bom dia!")
//         brake
//     case "V":
//         console.log("Boa tarde!")
//         brake
//     case "N":
//         console.log("Boa noite!")
//         brake
//     default:
//         console.log("Turno do dia não encontrado.")
//         brake
// }

// Exercício 4:
// let generoDoFilme = prompt("Qual o gênero de filme que você irá assistir?")
// let precoDoIngresso = prompt("Qual o preço do ingresso?")
// let lanche = prompt("Qual lanche você vai querer?")

// if (precoDoIngresso < 15 && generoDoFilme == "Fantasia") {
//     console.log("Bom filme!")
//     console.log("Aproveite o seu/sua", lanche, "!")
// }
//  else {
//     console.log("Escolha outro filme :(")
// }

// DESAFIO:
// Exercício 1: (já modificado no exercício acima)

// Exercício 2:
// let nome = prompt("Escreva o seu nome: ")
// let tipo = prompt("Escreva o tipo de jogo: ")
// let etapa = prompt("Digite a etapa do jogo: ")
// let categoria = Number(prompt("Digite a categoria: "))
// let qtd = Number(prompt("Digite a quantidade de ingressos: "))
// let preco

// switch (etapa) {
//     case "SF":
//       switch (categoria) {
//         case 1:
//           preco = 1320;
//             break;
//         case 2:
//             preco = 880;
//             break;
//         case 3:
//             preco = 550;
//             break;
//         case 4:
//             preco = 220;
//             break;
//         default:
//             console.log("Não tem essa categoria.");
//             break;
//       }
//       break;
//     case "DT":
//       switch (categoria) {
//         case 1:
//             preco = 660;
//             break;
//         case 2:
//             preco = 440;
//             break;
//         case 3:
//             preco = 330;
//             break;
//         case 4:
//             preco = 170;
//             break;
//         default:
//             console.log("Categoria não existe.");
//             break;
//       }
//       break;
//     case "FI":
//       switch (categoria) {
//         case 1:
//             preco = 1980;
//             break;
//         case 2:
//             preco = 1320;
//             break;
//         case 3:
//             preco = 880;
//             break;
//         case 4:
//             preco = 330;
//             break;
//         default:
//           console.log("Categoria não tem.");
//           break;
//         }
//         break;
//     default:
//         console.log("Etapa do jogo inválida.");
//         break;
// }
// if (tipo === "IN") {
//     preco = preco * 4.1;
// }
// console.log("----Dados da Compra:----")
// console.log("Nome completo: ", nome)
// console.log("Tipo de jog: ", tipoDeJogo)
// console.log("Etapa do jogo: ", etapaDoJogo)
// console.log("Categoria: ", categoria)
// console.log("Quantidade de ingresso: ", quantidadeIngresso)
// console.log("Valor total: ")