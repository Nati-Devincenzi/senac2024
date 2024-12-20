// Natália Devincenzi Martins_1A-M

let nomeDoTime = "Xarrados"
let corDoTime = "roxo"
let turma = "1A-M"
let mascote = "pantera"
 
console.log(`Nome do time: ${nomeDoTime}`)
console.log(`Cor do time: ${corDoTime}`)
console.log(`Turma: ${turma}`)
console.log(`Mascote: ${mascote}`)
console.log(`Bem-vindo, ${nomeDoTime} da turma ${turma}!`)
 
function adicionarTime() {
    nomeDoTime = prompt("Qual o nome do seu time?")
    corDoTime = prompt("Qual a cor do seu time?")
    turma = prompt("Qual a turma do time?")
    mascote = prompt("Qual o mascote do seu time?")
    let gritoDeGuerra = prompt("Digite um grito de guerra!")
    console.log(`\nInformações do time do usuário:\nNome do time: ${nomeDoTime}\nCor do time: ${corDoTime}\nTurma: ${turma}\nMascote: ${mascote}`)
    console.log(`Grito de guerra em minúsculas: ${gritoDeGuerra.toLowerCase()}`)
    console.log(`Grito de guerra em maiúsculas: ${gritoDeGuerra.toUpperCase()}`)
}
 
function listarAtletas(atletas) {
    console.log('Os atletas do time são:')
    for (let i = 0; i < atletas.length; i++) {
        console.log(`${i + 1}. ${atletas[i]}`)
    }
}
 
function adicionarAtleta(atletas) {
    let novoAtleta = prompt("Adicione um atleta: ")
    atletas.push(novoAtleta)
}
 
function escolherEsporte() {
    let esporte = prompt("Escolha um esporte: futebol, vôlei, basquete, xadrez ou FIFA").toLowerCase()
 
    switch (esporte) {
        case 'futebol':
            console.log("Esporte escolhido: futebol")
            break
        case 'fifa':
            console.log("Incrível! Vamos torcer para o time com muita energia!")
            break
        case 'vôlei':
            console.log("Esporte escolhido: vôlei")
            break
        case 'basquete':
            console.log("Esporte escolhido: basquete")
            break
        case 'xadrez':
            console.log("Esporte escolhido: xadrez")
            break
        default:
            console.log("Esporte escolhido não está na lista disponível")
            break
    }
}
 
function gerenciarEsportes(time) {
    let escolha = prompt("Escolha um esporte para adicionar ou remover da lista: futebol, vôlei, basquete, xadrez ou FIFA. Digite 'fim' para encerrar.")
 
    while (escolha.toLowerCase() !== 'fim') {
        let index = time.esportes.indexOf(escolha.toLowerCase())
        if (index === -1) {
            time.esportes.push(escolha.toLowerCase())
            console.log(`${escolha} adicionado à lista de esportes`)
        } else {
            time.esportes.splice(index, 1)
            console.log(`${escolha} removido da lista de esportes`)
        }
        escolha = prompt("Escolha um esporte para adicionar ou remover da lista: futebol, vôlei, basquete, xadrez ou FIFA. Digite 'fim' para encerrar.")
    }
    console.log(`Lista de esportes atualizada: ${time.esportes.join(', ')}`)
}
 
let atletas = ["Laura", "Manuela", "Pedro", "Rodrigo", "Natália"]
console.log(`Lista de atletas: ${atletas.join(', ')}`)
 
adicionarAtleta(atletas)
console.log(`Lista atualizada de atletas: ${atletas.join(', ')}`)
 
adicionarTime()
listarAtletas(atletas)
escolherEsporte()
 
let time = {
    nome: nomeDoTime,
    cor: corDoTime,
    turma: turma,
    mascote: mascote,
    atletas: atletas,
    esportes: [],
    pontos: 0
}
 
let esporte1 = prompt("Escolha um esporte: futebol, vôlei, basquete, xadrez ou FIFA").toLowerCase()
let esporte2 = prompt("Escolha outro esporte: futebol, vôlei, basquete, xadrez ou FIFA").toLowerCase()
time.esportes.push(esporte1, esporte2)
 
listarAtletas(time.atletas)
 
gerenciarEsportes(time)
 
function mostrarPerfilTime() {
    console.log(`Nome do time: ${time.nome}`)
    console.log(`Cor do time: ${time.cor}`)
    console.log(`Turma: ${time.turma}`)
    console.log(`Mascote: ${time.mascote}`)
    listarAtletas(time.atletas)
    console.log(`Esportes escolhidos: ${time.esportes.join(', ')}`)
    if (time.atletas.length > 5) {
        console.log("Parabéns! Você tem vários atletas.")
    }
}
 
let novoMascote = prompt("Adicione um mascote:")
time.mascote = novoMascote
 
function pontuacao() {
    let quantidadeEsportes = prompt("Quantos esportes você jogou? 1, 2, 3, 4 ou 5?")
    if (quantidadeEsportes == 1) {
        time.pontos += 10
    } else if (quantidadeEsportes == 2) {
        time.pontos += 20
    } else if (quantidadeEsportes == 3) {
        time.pontos += 30
    } else if (quantidadeEsportes == 4) {
        time.pontos += 40
    } else if (quantidadeEsportes == 5) {
        time.pontos += 50
    }
}
 
function encerrarInterseries() {
    console.log(`Nome do time: ${time.nome}`)
    console.log(`Cor do time: ${time.cor}`)
    console.log(`Turma: ${time.turma}`)
    console.log(`Mascote: ${time.mascote}`)
    listarAtletas(time.atletas)
    console.log(`Esportes escolhidos: ${time.esportes.join(', ')}`)
    console.log(`Pontuação final: ${time.pontos}`)
    if (time.pontos > 50) {
        console.log("Parabéns, seu time obteve uma excelente pontuação!")
    }
}
 
mostrarPerfilTime()
pontuacao()