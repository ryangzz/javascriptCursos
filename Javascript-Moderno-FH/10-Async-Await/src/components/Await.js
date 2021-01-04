import {buscarHeroe, buscarHeroeSlow} from './Async';

const heroesIds = ["iron", "capi"];

const heroresPromesas = heroesIds.map(buscarHeroeSlow);
// Forma de esperar a que se resuelva una peticion Asyncrona para returnar la respuesta de la peticion
export const obtenerHeroesArr = async ()=>{
    const heroesArr = [];
    for (const id of heroesIds) {
        const heroe = await buscarHeroe(id);
        heroesArr.push(heroe);
    }
    return heroesArr;
}
// Forma elegante que consume menos recursos
export const getHeroesArr = async () => {
    return await Promise.all(heroesIds.map(buscarHeroeSlow));
}

export const obtenerHeroe = async (id) =>{
    try {
        const heroe = await buscarHeroe(id);
        return heroe;   
    } catch (err) {
        return {
            nombre:'No Registrado',
            poderes:'No registrado'
        }
    }
}

export const heroesCiclo = async() =>{
    console.time();
    const heroes = await Promise.all(heroresPromesas);
    heroes.forEach(console.log);
    console.timeEnd();
}

export const heroesCiclo2 = async() =>{
    console.time();
    for await (const heroePromesa of heroresPromesas){
        console.log(heroePromesa);
    }
    console.timeEnd();
}