let deck = [];
let tipos = ["C", "D", "H", "S"];
let especiales = ["A", "J", "Q", "K"];

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
const pedirCarta = () => {
    if (deck.length == 0) { throw "Ya no hay cartas en el deck"; }
    const carta = deck.pop();
    return carta;
}
const valorCarta = (carta) => {
    let val = carta[0];
    return (isNaN(val)) ? (val == "A") ? 11 : 10 : carta.replace(/[^0-9]/g, "");
}
crearDeck();
console.log(valorCarta(pedirCarta()));