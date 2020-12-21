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

export const buscarHeroe = (Id) => {
    let heroe = heroes[Id];
    return new Promise((resolve, reject) => {
        (heroe) ? resolve(heroe): reject(`El heroe con el Id ${Id} No Existe! desde una promesa`);
    });
}