import { buscarHeroe } from './components/promesas';
import { buscarHeroe as buscarHeroeAsync } from './components/Async';
import { obtenerHeroesArr, getHeroesArr, obtenerHeroe as obtenerHeroeAwait, heroesCiclo, heroesCiclo2 } from './components/Await';


// buscarHeroe("iron2").then(resp => {
//     console.log(resp);
// }).catch(err => {
//     console.log(err);
// })

// buscarHeroeAsync("capi2")
// .then(console.log)
// .catch(console.warn);

// obtenerHeroesArr().then(console.table);

// getHeroesArr().then(console.table);

// obtenerHeroeAwait("capi2").then(console.log);


heroesCiclo();

// heroesCiclo2();