import { obtenerU } from './http-provider.js';
const body  = document.body;
let tbody;
const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );
    tbody = document.querySelector("tbody");

}


let i = 0;
const crearFilaUsuario = ( {id, email, first_name, last_name, avatar} ) => {
    i++;0
    const html = `
        <td scope="col"> ${`${i} ${id}`} </td>
        <td scope="col"> ${email} </td>
        <td scope="col"> ${`${first_name} ${last_name}`} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.append(tr);
}


export const init = async() => {

    crearHtml();
    const usuarios = await obtenerU();
    usuarios.forEach(usuario => crearFilaUsuario(usuario));
}

