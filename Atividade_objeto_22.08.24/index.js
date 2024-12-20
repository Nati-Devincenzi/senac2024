// Natália Devincenzi Martins_1A-M

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1:
/*No primeiro "console.log" irá aparecer o segundo nome do elenco (Finn Wolfhard), pois o "[1]" está acessando a segunda posição dos nomes do elenco.
No segundo "console.log" vai acessar um elemento de "elenco" e irá retornar a quinta posição de quinta posição, "Sadie Sink".
No terceiro "console.log" ele irá acessar "episodiosHoje" e vai aparecer a segunda linha, pois o "[1]" está acessando a segunda posição.
*/


// EXERCÍCIO 2:
/*Nos dois "console.log" vai acessar a informação guardada dentro do objeto de "proprietario", com isso, irá imprimir "Carlos" e "true".
Para acessar o modelo do carro precisaria digitar "console.log(carro.modelo)"
*/


// EXERCÍCIO 3:
/* a) Como está pedindo para somar 5 e 3, e subtrair 10 e 4, vai ser impresso no console os números 8 e 6.
b) Para adicionar os números 7 e 2, precisaria tirar o 5 e 3, ou seja, "console.log(calculadora.somar(7, 2))"
c) As funções ficariam: 
const calculadora = {
  multiplicar: function(a, b) {
    return a * b;
  },
  dividir: function(a, b) {
    return a / b;
  }
}

d) Serve para retornar a soma e a subtração dos valores que foram passados como parâmetros.
*/




// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1:
// const pessoa = {
//     nome: "Natália",
//     apelidos: ["Nati", "Natieli", "Natinha"]
// }
// console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)


// // EXERCÍCIO 2:
// const listaDeTarefas = {
//     nome: "João",
//     tarefas: [
//       { descricao: "Estudar para a prova", concluida: false, prioridade: "alta" },
//       { descricao: "Limpar o quarto", concluida: false, prioridade: "média" }
//     ]
// };
// listaDeTarefas.tarefas.push({
//     descricao: "Lavar a louça",
//     concluida: false,
//     prioridade: "baixa"
// })
// listaDeTarefas.tarefas[0].concluida = true
// console.log(listaDeTarefas)


// // EXERCÍCIO 3:
// function fichaDoUsuario() {

// const usuario = {
//     nome: prompt("Qual o seu nome?"),
//     idade: prompt("Quantos anos você tem?"),
//     profissao: prompt("Qual a sua profissão?")
// }
// console.log(`Nome: ${nome}, sua idade é: ${idade} e sua profissão é: ${profissao}`)
// }
// fichaDoUsuario()


// // EXERCÍCIO 4:
// var carrinho = []

// const fruta1 = {
//     nome: "morango",
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "laranja",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: "limão",
//     disponibilidade: true
// }

// carrinho.push(fruta1)
// carrinho.push(fruta2)
// carrinho.push(fruta3)

// console.log(carrinho)



// // DESAFIOS:

// // DESAFIO 1:
// const filme1 = {
//     nome: "Um olhar do paraíso",
//     dataDeLançamento: "19 de fevereiro de 2010",
// }
// console.log(filme1.nome)
// console.log(filme1["dataDeLançamento"])


// const filme2 = {
//     nome: "Uma vida em um ano",
//     dataDeLançamento: "27 de novembro de 2020",
// }
// console.log(filme2.nome)
// console.log(filme2["dataDeLançamento"])

// if(filme1.dataDeLançamento > filme2.dataDeLançamento){
//     return "O primeiro filme foi lançado antes do segundo "+false+" O primeiro filme foi lançado no mesmo ano do segundo?"+ false

// }else if(filme1.dataDeLançamento < filme2.dataDeLançamento){
//     return "O primeiro filme foi lançado antes do segundo "+true+" O primeiro filme foi lançado no mesmo ano do segundo?"+ false

// } else {
//     return "O primeiro filme foi lançado antes do segundo "+false+" O primeiro filme foi lançado no mesmo ano do segundo?"+ true 
// }


// DESAFIO 2 e 3:
// var carrinho = []

// const fruta1 = {
//     nome: "morango",
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "laranja",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: "limão",
//     disponibilidade: true
// }

// carrinho.push(fruta1)
// carrinho.push(fruta2)
// carrinho.push(fruta3)

// function listarCarrinho(){
// carrinho.push(fruta1.nome,fruta2.nome,fruta3.nome)
// console.log(carrinho)
// }
// listarCarrinho()

// function inversa(fruta1){
//     fruta1.disponibilidade = !fruta1.disponibilidade
//     return fruta1
// }
// console.log(inversa(fruta1))