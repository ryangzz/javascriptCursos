
//funcion anonima simple 
(function() {
    a=20;
    console.log(a);
    a=function() {
        a=15;
        return a;
    }();
    console.log(a);
})();
/*  Aqui va el segundo ejemplo*/

function fnejecutar(fn) {

    if (fn()===1) {
        return true;
    } else {
        return false;
    }
    
}
console.log(
    fnejecutar(function() {
        //  console.log("function anonime Execute");
       return 1;  
    })
);
