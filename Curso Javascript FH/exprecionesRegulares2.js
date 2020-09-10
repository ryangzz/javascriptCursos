// var texto="Aeropuerto";
var texto="La Respuesta de la suma es :45 + 20 =653";

console.log(texto);
// var arr=texto.match(/[aeiou]{2,2}/gi);
// var arr=texto.match(/\w{2,2}/ig);
var arr=texto.match(/\d{1,}|respuesta/ig);
console.log(arr);
