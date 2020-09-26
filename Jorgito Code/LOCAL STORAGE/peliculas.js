let formulario2 = document.getElementById("formPelicula")
formulario2.addEventListener('submit', function (event) {
	event.preventDefault();
	let tituloPelicula = document.getElementById("nomPelicula").value;
	if (tituloPelicula.length == 0) {
		alert("No puede dejar vacio el campo");
	} else {
		let peliculas = localStorage.getItem("peliculas");

		if (peliculas == null) {
			//No tenemos nada guardado, por lo cual vamos a guardar el carListFav
			let newPelicula = [{
				name: tituloPelicula
			}]
			localStorage.setItem('peliculas', JSON.stringify(newPelicula))
		} else {
			//Tenemos algo, por lo cual vamos a añadir un nuevo coche
			let data = JSON.parse(peliculas)
			console.log(data);

			let newPelicula = {
				name: tituloPelicula
			}
			//Asegurate que lo que guardes es realmente un array.
			data.push(newPelicula);
			localStorage.setItem('peliculas', JSON.stringify(data))
		}

		//Check si se guardo bien
		// console.log(localStorage.getItem('peliculas'))
	}
	document.getElementById("nomPelicula").value = "";
	fnGetPeliculas();
})

fnGetPeliculas = () => {
	let peliculas = JSON.parse(localStorage.getItem("peliculas"));
	let ul = document.getElementById("listaPeliculas");
	if (peliculas !== null) {
		document.getElementById("listaPeliculas").innerHTML = '';

		peliculas.forEach((elem) => {
			let li = document.createElement("li");
			li.append(elem.name);
			ul.append(li);

		});
	}
}

fnGetPeliculas();
let botonElminar = document.getElementById("elminarItem");
botonElminar.addEventListener("click", () => {
	localStorage.removeItem("peliculas");
	document.getElementById("listaPeliculas").innerHTML = '';
	fnGetPeliculas();
})