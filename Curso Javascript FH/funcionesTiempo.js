var juan={
    nombre:"juan",
    edad:30,
    imprimir:function() {
        var self=this;
        setTimeout(function() {
            console.log(self);
            console.log(self.nombre, self.edad, "---Paso un segundo");
            
        }, 1000)
    }
}

juan.imprimir();

var segs=0;
var intervalo=setInterval(function() {
    segs++;
    console.log("segundo", segs);
    if (segs===3) {
        console.log("Terminamos el intervalo");
        clearInterval(intervalo);
    }
}, 1000)