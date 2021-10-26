//Peça só pode ser cadastrada caso o peso seja maior que 100gr

let peso = 172;

if (peso > 100) {
    console.log("Peça com peso adequado, válida para cadastro!")
} else {    
    console.log("Peso fora do padrão")    
}

//Lista de peças tem capacidade max de 10 peças

let listaPecas = ["Amortecedor", "Filtro de ar", "Velas", "Disco de freio", "Pistão", "Bateria", "Filtro de Combustivel", "Correia dentada", "Pastilha de Freio", "Barra de direcao"]

let numeroPecas = listaPecas.length;

if (numeroPecas < 10) {
    console.log("Lista com espeço disponivel")
} else {
    console.log("Sem espaço! Capacidade maxima atingida")    
}   


// A peça deve ter o nome maior que tres caracteres se nao mostrar erro;

let nomePeca = "Bateria";


if (nomePeca.length > 3) {
    console.log("Nome válido! Favor continuar cadastro")
} else {
    console.log("Numero de caracter insuficiente! Varificar nome da peça")
}