// const professor = {
//     nome: "Vitor",
//     idade: 29,
//     tarefas: ['Dar aula', 'Responder dúvidas'],
//     gritar: function(){
//         console.log('Fecha o notebook!')
//     }
// }
// console.log(professor.nome)
// console.log(professor.tarefas[0])
// console.log(professor.tarefas[1])
// console.log(professor.gritar())



// // EXERCÍCIO 1:
// const euMesma = {
//     nome: 'Natália',
//     idade: 16,
//     genero: 'F',
//     comidasFavoritas: ['morango', 'massa', 'lasanha'],
//     hobbie: function(){
//         console.log('Gosto de desenhar')
// }
// }
// console.log(euMesma['nome'])
// console.log(euMesma.idade)
// console.log(euMesma.genero)
// console.log(euMesma.comidasFavoritas[0])
// console.log(euMesma.comidasFavoritas[1])
// console.log(euMesma.comidasFavoritas[2])
// console.log(euMesma.hobbie())


// euMesma.comidasFavoritas[2] = 'pizza' //alteração de valor
// console.log(euMesma.comidasFavoritas)



// // EXERCÍCIO 2:
// const filme = {
//     nome: "Um olhar do paraíso",
//     diretor: "Peter Jackson",
//     dataDeLançamento: "19 de fevereiro de 2010",
//     listaElenco: ["Saoirse Ronan", "Mark Wahlberg", "Stanley Tucci"]
// }

// console.log(filme.nome)
// console.log(filme.diretor)
// console.log(filme["dataDeLançamento"])
// console.log(filme.listaElenco[0])
// console.log(filme.listaElenco[1])
// console.log(filme.listaElenco[2])




// //ACESSANDO OBJETOS DENTRO DE OBJETOS:



// //ARRAY DE OBJETOS:
// const professores = [
//     {nome: "Andrei", ano: 1},
//     {nome: "Vitor", ano: 2},
//     {nome: "Guilherme", ano: 3}
// ]

// console.log(professores[1].nome)




// // ULTIMA ATIVIDADE
// filme.personagem = ["Susie Salmon", "Jack Salmon", "George Harvey"]

// console.log(`A atriz é ${filme.listaElenco[0]} e a sua personagem é ${filme.personagem[0]}`)
// console.log(`O ator é ${filme.listaElenco[1]} e o seu personagem é ${filme.personagem[1]}`)
// console.log(`O ator é ${filme.listaElenco[2]} e o seu personagem é ${filme.personagem[2]}`)


// filme.listaElenco[0] = "Xuxa"





// EXERCÍCIO 1: objeto parte 2
const pessoa = {
    nome: "Natália",
    idade: 16,
    gênero: "F"
}
const novaPessoa = {
    ...pessoa,
    comidasFavoritas: ["lasanha", "pizza", "hamburguer"],
    nome: "Pedro",
    idade: 16
}