function fnCrearProducto(nombre, precio) {
    nombre = nombre || "Sin Nombre";
    precio = precio || 0;
    console.log(`Producto: "${nombre}" Precio: ${precio}`);
}

function fnCrearProducto100(nombre) {
    fnCrearProducto(nombre, 100);
}

function fnCrearCamisa(precio) {
    fnCrearProducto("Camisa", precio);
}
fnCrearProducto();
fnCrearProducto100("Lapiz");
fnCrearCamisa(150)
