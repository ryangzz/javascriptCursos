// Variables gloables
let deck = [], //conetera las cartas del juego
    tipos = ["C", "D", "H", "S"], // elementos de commbinacions de cartas
    especiales = ["A", "J", "Q", "K"], // elementos de commbinacions de cartas
    puntosJugador = 0, //puntos del jugador
    puntosComputadora = 0; //puntos de la computadora
//Las constantes que empiezan con btn son la instancia de los botones que luego se les escucha el evento click
const btnNuevo = document.querySelector("#btnNuevo");
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const puntosHTML = document.querySelectorAll("small"); //Contiene los elementos small que  muestran los puntos
//Constantes que contienes la instancia de los divs que contienen las cartas del jugador y la computadora
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputa = document.querySelector("#computadora-cartas");
// Funcion que permite crear la baraja de y barajearla
const crearDeck = () => {
        for (let i = 2; i <= 10; i++) {
            for (const tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (const tipo of tipos) {
            for (const esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        deck = _.shuffle(deck);
    }
    // Funcion que eliminar carta del deck y retorna la carta eliminada emulando carta que se pide
const pedirCarta = () => {
        if (deck.length == 0) { throw "Ya no hay cartas en el deck"; }
        const carta = deck.pop();
        return carta;
    }
    // Funcion que determina el valor de la carta pedida
const valorCarta = (carta) => {
        let val = carta[0];
        return (isNaN(val)) ? (val == "A") ? 11 : 10 : carta.replace(/[^0-9]/g, "");
    }
    // Rutina que se ejecuta cuando el jugador pierde o detiene el juego para perdir las cartas de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta) * 1;
        puntosHTML[1].innerText = puntosComputadora;
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/img/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasComputa.append(imgCarta);
        if (puntosMinimos > 21) break;
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos < 21))
    setTimeout(() => { //En este punto de la rutina se determina quien gano
        if (puntosComputadora === puntosMinimos) {
            alert("Nadie Gano");
        } else if (puntosMinimos > 21 || puntosComputadora === 21 || ((puntosComputadora < 21) && (puntosComputadora > puntosMinimos))) {
            alert("Perdiste, gano la computadora");
        } else if (puntosComputadora > 21 || puntosMinimos === 21 || ((puntosMinimos < 21) && (puntosComputadora < puntosMinimos))) {
            alert("Ganaste!!");
        }
    }, 120);
}
crearDeck();
// Evento que escucha el click del boton pedir y emula  el pedir una carta por parte del usuario
btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta) * 1;
    puntosHTML[0].innerText = puntosJugador;
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/img/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta);
    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    }
});
// Evento que detiene el juego por desicion del jugador
btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});
// Evento que reinicia el juego, limpa variables reinicia el dek, y  hablilita elementos
btnNuevo.addEventListener("click", () => {
    deck = [];
    crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerHTML = 0;
    puntosHTML[1].innerHTML = 0;
    divCartasComputa.innerHTML = "";
    divCartasJugador.innerHTML = "";
    btnPedir.disabled = false;
    btnDetener.disabled = false;
});