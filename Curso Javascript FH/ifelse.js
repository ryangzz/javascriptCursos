var numero=10;
// Condiciones simples
if(numero<=10)
    console.log("Esto es correcto");
else
    console.log("No es correcto");
// Condiciones anidadas
if(numero<10)
    console.log("Esto es correcto");
else if(numero=10)
    console.log("Esto Tambien es correcto");
else
    console.log("Esto no es correcto");
    
// termarios similares a los if e if else 
(numero<=10) ? function () {
    console.log("Esto es correcto");
    return true;
    }()
    :function () {
    console.log("Esto no es correcto");
    false;
    } ;
// Ternarios Anidados
(numero<10) ? console.log("Esto es correcto final")
:(numero=10) ? console.log("Esto tambien es correcto Final")
: console.log("Esto no es correcto");
