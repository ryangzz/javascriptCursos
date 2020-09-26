class Producto{
    constructor (nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año; 
    }
}
class UI{
    addProducto(product){
        const listar = document.getElementById("product-list");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${product.nombre.toUpperCase()}
                    <strong>Precio</strong>: ${product.precio}
                    <strong>Año</strong>: ${product.año}
                    <button type="button"class="btn btn-danger" name="eliminar" >Eliminar</button>
                </div>
            </div>
        `;
        listar.appendChild(elemento);
    }
    deleteProducto(elemento){        
        if(elemento.name==="eliminar"){
            elemento.parentElement.parentElement.parentElement.remove();  
            this.mostrarMensaje("El producto se ha eliminado correctamente", "success");
        }
        
    }
    mostrarMensaje(mensaje, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(mensaje));
        // Mostrando mensaj en el DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#app");
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000)
    }
    resetForm(){
        document.getElementById("product-form").reset();
        document.getElementById("nombre").focus();
    }
}

// DOM EVENTS
document.getElementById('product-form').addEventListener("submit", function (event){
    event.preventDefault();
    const ui = new UI();
    if(this.nombre.value==='' || this.precio.value==='' || this.año.value==='')
        return ui.mostrarMensaje("COMPLETE LOS CAMPOS POR FAVOR", "info")
    const product = new Producto(this.nombre.value, this.precio.value, this.año.value);
    ui.addProducto(product);
    ui.mostrarMensaje("SE AGREGO CORRECTAMENTE EL PRODUCTO", "success");
    Swal.fire(
        'Good job!',
        'Se agrego correctamente el producto',
        'info'
      )
    ui.resetForm();

});

document.getElementById('product-list').addEventListener("click", function(e){
    console.log(e.target);
    
    const ui = new UI();
    ui.deleteProducto(e.target);
})