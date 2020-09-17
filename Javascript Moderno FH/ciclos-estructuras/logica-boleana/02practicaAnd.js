// ejecutaremos dos funciones pero se ejecutaran si la pimera retorna true
const sumaPar = (a,b)=> (a+b)%2==0;
const exito = (a,b)=>a+b; 
console.log(sumaPar(2,3) &&  exito(2,3));
console.log(sumaPar(2,2) &&  exito(2,4));
