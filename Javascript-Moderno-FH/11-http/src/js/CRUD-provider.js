const url = 'https://reqres.in/api/users/';

const getUser = async(id)=>{
    const resp = await fetch(`${url + id}`);
    const {data} = await resp.json();
    return data;
}

const crearUser = async(usuario)=>{
    const resp = await fetch(url, {
        method:'POST',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type':'application/json'
        }
    })
    return await resp.json();
}
const actualizarUser = async(id,usuario)=>{
    const resp = await fetch(url+id, {
        method:'PUT',
        body: JSON.stringify(usuario),
        headers:{
            'Content-Type':'application/json'
        }
    })
    return await resp.json();
}

const borrarUser = async(id)=>{
    const resp = await fetch(url+id, {
        method:'DELETE'
    });
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
}
export {
    getUser,
    crearUser,
    actualizarUser,
    borrarUser
}