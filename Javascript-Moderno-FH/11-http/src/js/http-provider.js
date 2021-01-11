const endPoint = "https://api.chucknorris.io/jokes/random";
const getUsers = "https://reqres.in/api/users?page=2";

const preset = "nf1uljmt";
const cloudinary = "https://api.cloudinary.com/v1_1/dca3ybpzx/upload";
/* fetch(endPoint).then(resp =>{
    resp.json().then(({id, value})=>{
        console.log(id, value);
    })
}); */

const obtenerChiste = async() => {
    try {
        const resp = await fetch(endPoint);
        if(!resp.ok) throw 'Error en la peticion';
        const {id, value, icon_url} = await resp.json();
        return {ok:true,  id, value, icon_url};
    } catch (error) {
        return { ok:false, responseText: error};
    }
}

const obtenerU = async()=>{
    const resp = await fetch(getUsers);
    const {data:usuerios} = await resp.json();
    return usuerios;
}

const subirImage = async(archivo)=>{
    const form = new FormData();
    form.append('upload_preset', preset);
    form.append('file', archivo);
    try {
        const resp = await fetch(cloudinary, {
            method:"POST", 
            body:form
        });
        if(resp.ok){
            const ApiResp = await resp.json();
            return ApiResp.secure_url;
        }else{
            throw await ApiResp.json();
        }
    } catch (error) {
        throw error;
    }
}

export {
    obtenerChiste, 
    obtenerU,
    subirImage
}