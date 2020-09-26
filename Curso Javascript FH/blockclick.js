
//bloquear boton 
document.oncontextmenu = function(){return false}
document.onmousedown=function(arg) {
    // console.log(arg);
    if (arg.button===2) {
        alert("bloqueado:)");
        return false;
    }
    console.log("No hay problema");
    

}
// Con esto obtenemos lo que selecciono
document.onmouseup=function(arg) {
    var texto=window.getSelection().toString();
    console.log(texto);
    
}
