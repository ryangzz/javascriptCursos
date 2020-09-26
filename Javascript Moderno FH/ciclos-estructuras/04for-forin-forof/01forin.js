let mario   = {nombre:"mario", edad:34}
let zalo    = {nombre:"zalo",  edad:23};
let emma    = {nombre:"emma",  edad:23};
let personas = [mario, zalo, emma];
for( persona in personas){
    console.log(personas[persona].nombre, personas[persona].edad);
}