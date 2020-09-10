var hoy= new Date();
var fmli=new Date(0);
var fFija=new Date(2020, 10, 25, 20, 10, 15, 1);
console.log(hoy);
console.log(fmli);
console.log(fFija);

console.log(`
Año: ${hoy.getFullYear()},
Mes: ${hoy.getMonth()}, 
dia: ${hoy.getDate()},
hora: ${hoy.getHours()}, 
minutos: ${hoy.getMinutes()},
Segundos: ${hoy.getSeconds()},
Hoy en MilSeg: ${hoy.getTime()}
`);

var incio = new Date();
for(let i=0; i<15000; i++){
    console.log("Algo ......");
}    
var fin=new Date();
console.log(incio);
console.log(fin);
var duracion=(fin.getTime()-incio.getTime())/1000;
console.log(`Tardo ${duracion} segundos`);

