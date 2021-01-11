import { obtenerChiste } from './http-provider';
const documento = document.body;
let btnOtro, olList;

const CrearDocument = ()=>{
    const html = /* html */`
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro Chiste</button>

        <ol class="mt-2 list-group">

        </ol>
    `;
    const divChistes = document.createElement("div");
    divChistes.innerHTML = html;
    documento.append(divChistes);
}

const eventos = ()=>{
    olList = document.querySelector("ol");
    btnOtro = document.querySelector("button");
    btnOtro.addEventListener('click', async()=>{
        insertChiste( await obtenerChiste());
    })
}
let i = 0;
const insertChiste = ({id, value})=>{
    i++;
    const olItem = document.createElement("li");
    olItem.innerHTML  = `<b>${`${i}. ${id}`}</b>: ${value}`;
    olItem.classList.add("list-group-item");
    olList.append(olItem);
}

export const init = ()=>{
    CrearDocument();
    eventos();
}