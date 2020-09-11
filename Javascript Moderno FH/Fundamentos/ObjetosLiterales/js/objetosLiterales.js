//Obtenemos el formulario a trabajar
let form=document.getElementById("formulario");
// Escuchamos su evento Submit y pasamos el evento escuchado
form.addEventListener("submit", function (e){
    // evitar hacer submit
    e.preventDefault();
    // Obtenemos todos los elementos inputs del formularios
    let inputs = [].slice.call(e.target.getElementsByTagName('input'));
    // Incialicamos objeto literal persona que tendra la informacion capturada y otras dos variables
    // que contendran la informacion separada
    let persona ={};
    let datos_personales, hobbies;
    // Filtramos solo los datos personales
    datos_personales = inputs.filter(elem=>{
        if(elem.name!="hobbie" && elem.type!="submit"){ return elem}
    })
    // Filtramos solo los hobbies
    hobbies = inputs.filter(elem=>{
        if(elem.name=="hobbie" && elem.checked){ return elem.value;}
    })
    // Obtenemos solo los valores de los inputs
    hobbies = hobbies.map(elem=>elem.value);
    // asignamos atibutos al objetos persona con los datos personales
    datos_personales.forEach(elem => {
        persona[elem.name] = elem.value;
    });
    // creamos y asignamos atributo hobbies con los hobbies obtenidos del formulario
    persona.hobbies=hobbies;
    // Mostramos el objeto persona
    console.log(persona);
    // proceso para armar el mensaje a mostrar
    datos = Object.entries(persona);
    mensaje = 'Gracias, por tu informacion\n\n';
    datos.forEach((element, index) => {
        if(index==datos.length-1){
            mensaje+=`${element[0]}: `;
            element[element.length-1].forEach((elem, index) => {
                mensaje+=(index==element[element.length-1].length-1) ? ` ${elem}`:` ${elem},`;
            });
        }else{
            mensaje+=`${element[0]} : ${element[element.length-1]}\n`
        }
    });
    alert(mensaje);
    this.reset();
});