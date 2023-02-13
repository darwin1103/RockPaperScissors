let pc = 0
let jugador = 0

let triunfos = 0
let derrotas = 0
let empates = 0

let counter = 0
let intervalId
let images

function startGame() {
    let buttonRefresh = document.getElementById("button-refresh")
    buttonRefresh.style.display = "none"

    let buttonRock = document.getElementById("rock-button")
    let buttonPaper = document.getElementById("paper-button")
    let buttonScissors = document.getElementById("scissors-button")
    
    buttonRock.addEventListener("click", rockAttack)
    buttonPaper.addEventListener("click", paperAttack)
    buttonScissors.addEventListener("click", scissorsAttack)
}

function rockAttack() {
    let playerCard = document.getElementById("player-card")
    playerCard.setAttribute("src", "./assets/images/player-piedra.png")
    jugador = 1
    pcAnimation()
}
function paperAttack() {
    let playerCard = document.getElementById("player-card")
    playerCard.setAttribute("src", "./assets/images/player-papel.png")
    jugador = 2
    pcAnimation()
}
function scissorsAttack() {
    let playerCard = document.getElementById("player-card")
    playerCard.setAttribute("src", "./assets/images/player-tijera.png")
    jugador = 3
    pcAnimation()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pcAnimation() {
    images=document.querySelectorAll("#pc-card-cont img")
    let resultText = document.getElementById("result-text")
    resultText.innerHTML = "..."

    intervalId = setInterval(function() {
        images[counter].style.display = "none"
        counter = (counter + 1) % images.length
        images[counter].style.display = "block"
    }, 120)
    pcAttack()
}

function pcAttack() {
    pcRandomAttack = aleatorio(1, 3)

    if (pcRandomAttack == 1) {
        //let pcCard = document.getElementById("pc-card")
        //pcCard.setAttribute("src", "./assets/images/piedra.png")
        setTimeout(function() {
            clearInterval(intervalId);
            images[counter].style.display = "none";
            counter = 1;
            images[counter].style.display = "block";
            battle()
        }, 2000);
        pc = 1
    } else if (pcRandomAttack == 2) {
        //let pcCard = document.getElementById("pc-card")
        //pcCard.setAttribute("src", "./assets/images/papel.png")
        setTimeout(function() {
            clearInterval(intervalId);
            images[counter].style.display = "none";
            counter = 2;
            images[counter].style.display = "block";
            battle()
        }, 3000);
        pc = 2
    } else {
        //let pcCard = document.getElementById("pc-card")
        //pcCard.setAttribute("src", "./assets/images/tijera.png")
        setTimeout(function() {
            clearInterval(intervalId);
            images[counter].style.display = "none";
            counter = 3;
            images[counter].style.display = "block";
            battle()
        }, 3000);
        pc = 3
    }
}

function battle() {
    let winsMarker = document.getElementById("wins-marker")
    let lossesMarker = document.getElementById("losses-marker")
    let tiesMarker = document.getElementById("ties-marker")

    let resultText = document.getElementById("result-text")

    if(pc == jugador){
        resultText.innerHTML = "Is a Tie"
        empates = empates + 1
        tiesMarker.innerHTML = empates
    } else if(jugador == 1 && pc == 3) {
        resultText.innerHTML = "You win!!"
        triunfos = triunfos + 1
        winsMarker.innerHTML = triunfos
    } else if (jugador == 2 && pc == 1) {
        resultText.innerHTML = "You win!!"
        triunfos = triunfos + 1
        winsMarker.innerHTML = triunfos
    } else if (jugador == 3 && pc == 2) {
        resultText.innerHTML = "You win!!"
        triunfos = triunfos + 1
        winsMarker.innerHTML = triunfos
    } else {
        resultText.innerHTML = "You Loss :("
        derrotas = derrotas + 1
        lossesMarker.innerHTML = derrotas
    }

    checkPoints()
}

function checkPoints() {
    let resultText = document.getElementById("result-text")

    if (triunfos == 3) {
        resultText.innerHTML = "¡¡You are the WINNER!!"
        playFinish()
    } else if (derrotas == 3) {
        resultText.innerHTML = "You are the LOSSER :("
        playFinish()
    }
}

function playFinish() {
    let rockButtonCont = document.getElementById("rock-button")
    rockButtonCont.style.display = "none"
    let paperButtonCont = document.getElementById("paper-button")
    paperButtonCont.style.display = "none"
    let sissorsButtonCont = document.getElementById("scissors-button")
    sissorsButtonCont.style.display = "none"

    let buttonRefresh = document.getElementById("button-refresh")
    buttonRefresh.style.display = "block"
}

window.addEventListener("load", startGame)