let paísDeOrigem = prompt("Qual seu país de origem? ")
switch (paísDeOrigem) {
    case "Brasil": 
        console.log("brasileiro")
        break
    case "EUA":
        console.log("norte americano")
        break
    case "Inglaterra":
        console.log("inglês")
        break
    default:
        console.log("nacionalidade não encontrada")
        break
}