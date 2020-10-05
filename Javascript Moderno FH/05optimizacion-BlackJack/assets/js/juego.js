(() => {
    'use strict'
    // Variables gloables
    let deck = [], //conetera las cartas del juego
        tipos = ["C", "D", "H", "S"], // elementos de commbinacions de cartas
        especiales = ["A", "J", "Q", "K"], // elementos de commbinacions de cartas
        puntosJugadores = [0, 0]; //puntos del jugador
    //puntos de la computadora
    //Las constantes que empiezan con btn son la instancia de los botones que luego se les escucha el evento click
    const btnNuevo = document.querySelector("#btnNuevo"),
        btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        puntosHTML = document.querySelectorAll("small"), //Contiene los elementos small que  muestran los puntos
        //Constantes que contienes la instancia de los divs que contienen las cartas del jugador y la computadora
        divCartasJugador = document.querySelectorAll(".jugador-cartas");
    // Funcion que permite crear la baraja de y barajearla
    const crearDeck = () => {
            deck = [];
            for (let i = 2; i <= 10; i++)
                tipos.forEach(tipo => deck.push(i + tipo));
            tipos.forEach(el => especiales.forEach(el2 => deck.push(el2 + el)));
            return _.shuffle(deck);
        }
        // Funcion que eliminar carta del deck y retorna la carta eliminada emulando carta que se pide
    const pedirCarta = () => {
            if (deck.length == 0) throw "Ya no hay cartas en el deck";
            return deck.pop();
        }
        // Funcion que determina el valor de la carta pedida
    const valorCarta = (carta) => {
            let val = carta[0];
            return (isNaN(val)) ? (val == "A") ? 11 : 10 : carta.replace(/[^0-9]/g, "");
        }
        // Rutina que se ejecuta cuando el jugador pierde o detiene el juego para perdir las cartas de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let turno = puntosJugadores.length - 1;
        do {
            const carta = pedirCarta();
            asignarPuntos(turno, carta);
            if (puntosMinimos > 21) break;
        } while ((puntosJugadores[turno] <= puntosMinimos) && (puntosMinimos <= 21))
        setTimeout(() => { //En este punto de la rutina se determina quien gano
            if (puntosJugadores[turno] === puntosMinimos) {
                alert("Nadie Gano");
            } else if (puntosMinimos > 21 || puntosJugadores[turno] === 21 || ((puntosJugadores[turno] < 21) && (puntosJugadores[turno] > puntosMinimos))) {
                alert("Perdiste, gano la computadora");
            } else if (puntosJugadores[turno] > 21 || puntosMinimos === 21 || ((puntosMinimos < 21) && (puntosJugadores[turno] < puntosMinimos))) {
                alert("Ganaste!!");
            }
        }, 120);
    }
    const asignarPuntos = (jugador, carta) => {
        puntosJugadores[jugador] += valorCarta(carta) * 1;
        puntosHTML[jugador].innerText = puntosJugadores[jugador];
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/img/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugador[jugador].append(imgCarta);
    }
    const initJuego = () => {
            deck = [];
            deck = crearDeck();
            puntosJugadores = puntosJugadores.map(jugador => jugador = 0);
            puntosHTML.forEach(puntos => puntos.innerHTML = 0);
            divCartasJugador.forEach(cartas => cartas.innerHTML = "");
            btnPedir.disabled = false;
            btnDetener.disabled = false;
        }
        // Evento que escucha el click del boton pedir y emula  el pedir una carta por parte del usuario
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();
        asignarPuntos(0, carta);
        if (puntosJugadores[0] > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugadores[0]);
        } else if (puntosJugadores[0] === 21) {
            btnPedir.disabled = true;
            turnoComputadora(puntosJugadores[0]);
        }
    });
    // Evento que detiene el juego por desicion del jugador
    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });
    // Evento que reinicia el juego, limpa variables reinicia el dek, y  hablilita elementos
    btnNuevo.addEventListener("click", () => {
        initJuego();
    });
})();