// Poliformismo cuando soluciones multiples derivadas de un problema, en este caso validamos por cada tipo y damos soluciones mediante
//condiciones ademas, en este caso se cumple en mas de una, osea dos condiciones nos dan soluciones esperadas en el caso planteado.

function fnValidar(a) {
    if (a===undefined) {
        console.log(`Soy undefined, no puedo operar`);
    }else if (typeof a=="number") {
        console.log(`Doy un numero y puedo operar`);
        
    } else if(typeof a=="string"){
        console.log(`Soy un string, hablame`);
        
    } else if(typeof a=="object"){
        console.log(`soy un objecto, soludos`);
    }
    if (a instanceof Number) {
        console.log("Esto es un numero...");
    }
}
var a = new Number(1);
fnValidar(a);