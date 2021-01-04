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
//El asincronismo nos da la oportunidad de devolver una promesa sin necesidad de instanciar el objeto Promise
export const buscarHeroe = async (id) => {
    let heroe = heroes[id];
    if(heroe) return heroe;
    else throw `El super Heroe con id ${id} no esta registrado`;
}
export const buscarHeroeSlow = async (id) => {
    let heroe = heroes[id];
    return new Promise((resolve, reject)=>{
        if(heroe){
            setTimeout(() => {
                resolve(heroe);
            }, 1000);
        }else reject(`El Heroe con id ${id} no esta registrado`);
    })
}