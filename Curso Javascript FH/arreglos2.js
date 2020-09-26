arr=[
    true,
    {
        nombre:"Jorge",
        apellido:"Gonzalez"
    },
    function(persona) {
        console.log(`Nombre: ${persona.nombre} Apellido: ${persona.apellido}`);
    },
    [
        "Fernando",
        "Carlos",
        "Elisa",
        "Mario"
    ]
];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2](arr[1]));
console.log(arr[3][3]);



