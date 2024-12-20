// Natália Devincenzi Martins_1A-M

//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:


// EXERCÍCIO 1:
// No console será impresso os números 10 e 50.
// Se retirasse os dois "console.log" e deixasse apenas o "minhaFuncao(2)" e "minhaFuncao(10)" não
// aparecerá nada no console


// EXERCÍCIO 2:
// A função faz com que a única palavra verdadeira seja "cenoura" em letras minúsculas, 
// mas com o ".includes", qualquer frase ou palavra que possua "cenoura" dentro irá retornar verdadeira 
// também. O ".toLowerCase" ao lado do "includes" faz com que a frase digitada pelo usuário se transforme toda 
// em letras minúsculas, assim sendo verdadeira mesmo que a frase tenha a palavra 
// "cenoura" ou qualquer outra palavra em maiúscula.

// No console vai retornar "true" para as três frases, pois em todas aparece a palavra "cenoura".




// EXERCÍCIOS DE ESCRITA DE CÓDIGO:


// EXERCÍCIO 1:
function informacao(){
    console.log("Eu sou a Natália, tenho 16 anos, moro em São Leopoldo e sou estudante.")
}

informacao()

function informacaoDoUsuario(nome, idade, cidade, profissao){
    return `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
}
const nome = prompt("Qual é o seu nome?")
const idade = Number(prompt("Qual sua ideda?"))
const cidade = prompt("Onde você mora?")
const profissao = prompt("Qual sua profissão?")

const informaçoes = informacaoDoUsuario(nome, idade, cidade, profissao)
console.log(informaçoes)


// EXERCÍCIO 2:
function soma(numero1, numero2){
    const resultado = numero1 + numero2
    return resultado
}
const variavel = soma(2, 5)
console.log(variavel)

function comparacao(numero1, numero2){
    if(numero1 > numero2){
        console.log(`${numero1} é maior que ${numero2}`)
        return true
    } else {
        console.log(`${numero1} é menor que ${numero2}`)
        return false 
    }
}