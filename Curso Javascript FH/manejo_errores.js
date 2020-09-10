 
// throw Sirve para crear errores de tipo cadena, arr, 
/* try{ throw function() { console.log("Error");}}catch(e){e();} */

 try {
     var a=100;
     console.log(`El valor de a es: ${a}`);
 } catch (e) {
console.log("Fallo la instruccion anterior", e);
     
 }finally{
     console.log("Termino");
     
 }