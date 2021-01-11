import { subirImage } from './http-provider';
const body  = document.body;

let inputFile, imgFoto;

const crearInputFileHtml = ()=>{
    const html = `
        <h1 class="mt-5"> Subir Archivos</h1>
        <hr>
        <label>Selecciona una imagen</label>
        <input type="file" accept="image/png, image/jpeg, image/jpg"/>
        <br>
        <img id="foto" class="img-thumbnail" src="">
        `;
        const div = document.createElement("div");
        div.innerHTML = html;
        body.append(div);
        inputFile = document.querySelector("input");
        imgFoto = document.querySelector("#foto");
}

const eventos = ()=>{
    inputFile.addEventListener('change', (event)=>{
        const file = event.target.files[0];
        subirImage(file).then(url=>imgFoto.src = url);
    })
}

const init = ()=>{
    crearInputFileHtml();
    eventos();
}
export {
    init,
}