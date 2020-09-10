
// inicializar local storage

// Insertar datos en el localstorage setItem

// localStorage.setItem("key", "value");

// // Leer datos del localstorage getItem
// var nombre = localStorage.getItem("key");

// // Eliminar datos del localStorage
// localStorage.removeItem("key");

function ClickContador(){
    if(typeof(Storage) !== undefined){
        if(localStorage.clickcount){
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        }else{
            localStorage.clickcount = 1;
        }
        console.log("Has cliqueado "+ localStorage.clickcount+ " veses");
    }else{
        console.log("no acepta LocalStorage")
    }
}