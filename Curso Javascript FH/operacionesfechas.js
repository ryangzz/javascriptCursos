var fecha= new Date(2020, 3, 5);

// Creamos un prototipo para sumar dias a las fechas
Date.prototype.sumarDias=function(dias) {
    this.setDate(this.getDate() + dias);
    return this;
}

// Agregamos prototipos para sumar años
Date.prototype.sumarAños=function(años) {
    this.setFullYear(this.getFullYear()+años);
    return this;
}

console.log(fecha);
console.log(fecha.sumarDias(5));
console.log(fecha.sumarAños(1));


