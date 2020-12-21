import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './components/callbacks'
import { buscarHeroe } from './components/promesas'
buscarHeroeCallback("iron", (err, heroe) => {
    (err) ? console.log(err): console.log(heroe);
});


buscarHeroe("iron2").then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
}).finally(() => console.log("Termino la promesa"));

console.log("Fin del Programa");