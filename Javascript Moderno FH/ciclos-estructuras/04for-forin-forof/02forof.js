let mario   = {nombre:"mario", edad:34}
let zalo    = {nombre:"zalo",  edad:23};
let emma    = {nombre:"emma",  edad:23};
let personas = [mario, zalo, emma];
for( persona of personas){
    console.log(persona.nombre, persona.edad);
}