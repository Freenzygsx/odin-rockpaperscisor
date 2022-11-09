// Rock paper and scissors made with JavaScripts by Esielote for odinproject
let options = ["piedra", "papel", "tijera"]; // Declaro las opciones disponibles
// OLD GETPLAYERCHOICE()
// function getPlayerChoice(){
//     // Funcion para recibir el movimiento a jugar del usuario y lo retorna en minuscula
//     let index = prompt("Elige piedra papel o tijera: ").toLowerCase();
//     return index
// }

// function getPlayerChoice(selectedbutton){
//     return options[selectedbutton];
// };
const container = document.querySelector('#container');
const content = document.createElement('div');
const result = document.createElement('h1');
result.textContent = "Resultados"
const empate = document.createElement('div');
const player = document.createElement('div');
const pc = document.createElement('div');
content.appendChild(result)
function getRandomComputerChoice(options) {
    // Funcion para que la computadora tenga su movimiento de juego
    let index = Math.floor(Math.random() * options.length);
    return index
}

let playerWins = 0; // Declaro las victorias del jugador
let computerWins = 0; // Declaro las victorias de la computadora
let draw = 0; // Declaro los empates

// Inicializo las variables de opciones
let computerChoice;
let playerFinalChoice;


function playRound(playerChoice){
    if (playerWins + computerWins + draw === 5){
        if (playerWins > computerWins){
            return alert("Game ended, player wins");
        } else if (computerWins > playerWins){
            return alert("Game ended, computer wins");
        } else if (computerWins == playerWins){
            return alert("Game ended, draw")
        }
    };
    computerChoice = options[getRandomComputerChoice(options)];
    playerFinalChoice = playerChoice;
    
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

    empate.textContent = `draw: ${draw}`
    player.textContent = `player wins: ${playerWins}`
    pc.textContent = `computer wins: ${computerWins}`

    content.appendChild(empate)
    content.appendChild(player)
    content.appendChild(pc)
    container.appendChild(content)
}

function getButtons(options){
    for(let i = 0;i<options.length;i++){
        let tempbtn = document.createElement('button');
        tempbtn.classList.add(options[i])
        tempbtn.textContent = options[i];
        tempbtn.addEventListener('click', () => {
            playRound(options[i])
        })
        container.appendChild(tempbtn);
    };
}

getButtons(options);
