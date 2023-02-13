function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
    resultado = "Piedra ✊"
    } else if(jugada == 2) {
        resultado = "Papel ✋"
    } else if(jugada == 3) {
        resultado = "Tijera ✌"
    } else {
        resultado = "Nulo"
    }
    return resultado
}

//1 es piedra - 2 es papel - 3 es piedra
let = jugador = 0
let pc = 0
let triunfos = 0
let derrotas = 0
let empates = 0

while (triunfos < 3 && derrotas < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1-Piedra 2-Papel 3-Tijera")
    //alert("Elegiste: " + jugador)
    alert("You Chose: " + eleccion(jugador))
    alert("PC Chooses: " + eleccion(pc))

    //COMBATE
    if(pc == jugador){
        alert("Tie")
        empates = empates + 1
    } else if(jugador == 1 && pc == 3) {
        alert("You win!!")
        triunfos = triunfos + 1 
    } else if (jugador == 2 && pc == 1) {
        alert("You win!!")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("You win!!")
        triunfos = triunfos + 1
    } else {
        alert("You loss :(")
        derrotas = derrotas + 1
    }
}
alert("En esta partida tuviste: " + triunfos + " triunfos," + derrotas + " derrotas y " + empates + " empates")