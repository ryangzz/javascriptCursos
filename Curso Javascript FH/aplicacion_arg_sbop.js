function fnCrearProducto(nombre, precio) {
    nombre=nombre || "Sin Nombre";
    precio=precio || 0;
    console.log(`Producto: "${nombre}" Precio: ${precio}`);
}
function fnCrearPruducto100(nombre) {
    fnCrearProducto(nombre, 100);
}

function fnCrearPhone(precio) {
    fnCrearProducto("Phone", precio);
}

function fnValidate(nombre, precio) {
    if (arguments.length===0) {
        fnCrearProducto();
    }else if(arguments.length!==0){
        if(arguments.length===1){
            if(typeof arguments[0]=="number"){
                fnCrearPhone(arguments[0]);
            }else if(typeof arguments[0]=="string"){
                fnCrearPruducto100(arguments[0]);
            }

        }else{
            fnCrearProducto(nombre, precio);
        }
    }
}
function fnAddElements() {
    var nombre=document.getElementById("nombre").value;
    var precio=document.getElementById("numero").value;
    if(nombre=="" && precio==""){
        fnValidate();
    }else if(nombre!="" && precio!=""){
        fnValidate(nombre, precio);
    }else if(nombre!="" && precio==""){
        fnValidate(nombre);
    }else{
        precio=parseFloat(precio);
        // console.log(typeof precio);
        
        fnValidate(precio);
    }
 
}