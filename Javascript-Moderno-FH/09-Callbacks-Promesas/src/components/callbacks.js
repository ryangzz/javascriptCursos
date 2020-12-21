const heroes = {
    iron: {
        nombre: "Ironman",
        poderes: "Absurda cantidad de dinero"
    },
    capi: {
        nombre: "Capitan America",
        poderes: "Fuerza Sobre Humana"
    }
}

export const buscarHeroe = (Id, Callback) => {
    let heroe = heroes[Id];
    (heroe) ? Callback(null, heroe): Callback(`El heroe con id ${Id} no existe, respuesta del callback`, undefined);
}