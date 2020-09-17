// Con ayuda del operador OR impimiremos en consola no definido si obtenemos undefined
let diasSemana = {
    0:"domingo",
    1:"lunes",
    2:"martes",
    3:"miercoles",
    4:"jueves",
    5:"viernes",
    6:"sabado",
}
// Ejemplo sin or
console.log(diasSemana[1]);
console.log(diasSemana[7]);
// Ejemplo con or
console.log(diasSemana[1] || "Dia no definido");
console.log(diasSemana[7] || "Dia no definido");
