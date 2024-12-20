// SWITCH CASE:
//let paisDeOrigem
 
//switch(paisDeOrigem) {
//    case 'Brasil':
//        console.log('brasileiro')
//        break
//    case 'EUA':
//        console.log('norte americano')
//        break
//    case 'Inglaterra':
//        console.log('inglês')
//        break
//    default:
//        console.log('nacionalidade não encontrada')
//        break
//}
 
 
 
 
 
// WHILE (enquanto):
 
// ENQUANTO A CONDIÇÃO FOR VERDADEIRA, AS LINHAS DE CÓDIGO DENTRO DESTE BLOCO SERÃO EXECUTADAS
// ASSIM QUE A CONDIÇÃO FICAR FALSA, O LOOP/LAÇO VAI PARAR
 
// EXEMPLO 1: imprimindo alguns números
//let i = 0
 
//while (i < 10) {
//    console.log(i)
 
//    i++
//}
 
//EXEMPLO 2: vou comer até 100 coxinhas
//let estomago = 0
 
//while (estomago < 100){
//    console.log("Quero comer mais coxinhas")
//    estomago = estomago + 10
//}
 
 
 
 
// FOR (para):
//for(let i = 0; i < 10; i++){
//    console.log(i)
//}
 
// EXEMPLO 1:
//const numeros = [14, 67, 89, 15, 23]
 
//for(let i = 0; i < 5; i++){
//    const elemento = numeros[i]
//    console.log
//}
 
// EXEMPLO 2:
//const numeros = [11, 15, 18, 14, 12, 13]
 
//function devolveMaiorNumero(array){
//    let maiorNumero = 0
 
//    for(let i = 0; i < array.lengt; i++){
//        let numeroAtual = array[i]
 
//        if(numeroAtual >= maiorNumero) {
//            maiorNumero = numeroAtual
//        }
//    }
//    console.log(`O maior número do array é ${maiorNumero}`)
//}
//devolveMaiorNumero(numeros)
 
 
 
 
// FOR... OF...(para... cada...):
 
// PERCORRE ARRAYS E OBJETOS, ALOCANDO O VALOR DE CADA POSIÇÃO DO ARAY EM UM VARIÁVEL,
// PERITINDO EXECUTAR ALGUMA AÇÃO PARA CADA VALOR DISTINTO.
 

// EXEMPLO:
//const numeros = [14, 67, 89, 15, 23]
 
//for (let numero of numeros){
//    console.log(numero)
//}
 
 
 
 
// CONCATENAÇÃO DE STRINGS:
//const nome = "Mika"
//const idade = 27
//const frase = "Meu nome é " + nome + " e tenho " + idade + " anos"
 
 
 
 
// TEMPLATE STRINGS: ${}
//const nome = "Mika"
//const idade = 27
 
//const frase = `meu nome é ${nome} e tenho ${idade} anos`
 
 
 
 
// PROPRIEDADE LENGTH:
 
// DIZ QUAL É O TAMANHO DE UMA STRING, INCLUINDO ESPAÇOS.
 
//const nome = "Vitor Hugo"
 
//console.log(nome.length) //10

 
 
 
// MÉTODO toLowerCase():

// TRANFORMA TODAS AS LETRAS EM MINÚSCULAS

//const frase = "OieEeEee"
//const fraseMinuscula = frase.toLowerCase()

// fraseMinuscula = oieeeeee!




// MÉTODO toUpperCase():

// TRANSFORMA TODAS AS LETRAS EM MAIÚSCULAS

//const frase = "OieEeEee"
//const fraseMinuscula = frase.toLowerCase()

//fraseMaiuscula = OIEEEEEE!




// MÉTODO trim():

// RETIRA OS ESPAÇOS QUE EXIXTEM ANTES E DEPOIS DA SUA STRING

//const email = "  mika@gmail.com  "
//console.log(email.trim())

//"mika@gmail.com"




// MÉTODO includes(caracteres):

//DETERMINA SE UM CONJUNTO DE CARACTERES PODE SER ENCONTRADO DENTRO DE OUTRA STRING, 
//RESTORNANDO TRUE OU FALSE

//const frase = "Hoje comi cenoura"
//frase.includes("cenoura") //true
//frase.includes("batata") //false




// MÉTODO replaceAll(chars1, chars2):

// TROCA TODOS AS OCORRÊNCIAS DE UM CONJUNTO DE CARACTERES (chars1)
// POR ALGUMA OUTRA COISA (chars2)

//const frase = "Hoje comi cenoura, adoro cenoura"
//const novaFrase = frase.replaceAll("cenoura", "batata")

//novaFrase = Hoje comi batata, adoro batata




// MÉTODO push(elementos)

// ADICIONA UM OU MAIS ELEMENTOS AO FINAL DE UM ARRAY

const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros) //[1, 2, 3, 4]

numeros.push(5, 6, 7)
console.log(numeros) //[1, 2, 3, 4, 5, 6, 7]




// MÉTODO pop():

// REMOVE O ÚLTIMO ELEMENTO DE UM ARRAY

const meusPeixes = ["palhaço", "mandarim", "esturjão"]

meusPeixes.pop()
console.log(meusPeixes) //["palhaço", "mandarim"]




//console.log(variável.toFixed(4))
