// Rock paper and scissors made with JavaScripts by Esielote for odinproject
let options = ["piedra", "papel", "tijera"]; // Declaro las opciones disponibles

function getPlayerChoice(){
    // Funcion para recibir el movimiento a jugar del usuario y lo retorna en minuscula
    let index = prompt("Elige piedra papel o tijera: ").toLowerCase();
    return index
}

function getRandomComputerChoice(options) {
    // Funcion para que la computadora tenga su movimiento de juego
    let index = Math.floor(Math.random() * options.length);
    return index
}

let playerWins = 0; // Declaro las victorias del jugador
let computerWins = 0; // Declaro las victorias de la computadora
let draw = 0; // Declaro los empates

for (i=0; i<5; i++) { // Mientras que el numero de partidas sea menor a 5, jugamos
    // Seteamos las opciones por vuelta 
    let computerChoice;
    computerChoice = options[getRandomComputerChoice(options)]; // Hago que la computadora tenga su opcion
    let playerFinalChoice;
    playerFinalChoice = getPlayerChoice();
    
    // declaramos victorias y derrotas con piedra 
    if ( playerFinalChoice == "piedra" && computerChoice == "tijera") {
        console.log("Jugador gana una");
        playerWins += 1;
    } else if (playerFinalChoice == "piedra" && computerChoice == "papel") {
        console.log("Computadora gana una");
        computerWins += 1;
    } else if (playerFinalChoice == "piedra" && computerChoice == "piedra") {
        console.log("Empate");
        draw += 1;
    // declaramos victorias y derrotas con papel
    } else if (playerFinalChoice == "papel" && computerChoice == "piedra") {
        console.log("Jugador gana una");
        playerWins +=1 ;
    } else if (playerFinalChoice == "papel" && computerChoice == "papel") {
        console.log("Empate");
        draw += 1;
    } else if (playerFinalChoice == "papel" && computerChoice == "tijera") {
        console.log("Computadora gana una");
        computerWins += 1;
    //declaramos victorias y derrotas con tijera
    } else if (playerFinalChoice == "tijera" && computerChoice == "piedra"){
        console.log("Computadora gana  una");
        computerWins += 1;
    } else if (playerFinalChoice == "tijera" && computerChoice == "papel") {
        console.log("Jugador gana una");
        playerWins += 1;
    } else if (playerFinalChoice == "tijera" && computerChoice == "tijera") {
        console.log("Empate");
        draw += 1;
    }
}

if (playerWins > computerWins){
    console.log("Jugador ganador final");
} else if (playerWins == computerWins){
    console.log("Empataron a morir");
} else {
    console.log("Computadora ganador final");
}