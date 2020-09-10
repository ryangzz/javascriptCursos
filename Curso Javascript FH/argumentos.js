function fnMiFuncion(a,b,c,d) {
    if(arguments.length!==4){
    console.log("Nesecitamos 4 parametros");
    alert("Necesitamos 4 parametros");
    return;
    }
    for(let i=0; i<arguments.length; i++){
        if(! (typeof arguments[i]=="number")){
            console.log(`El argumento ${i+1} no es un numero`);
            return;
        }
        
    }
    console.log(a+b+c+d);
}

fnMiFuncion();