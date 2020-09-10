function Personaje(nombre) {
    this.nombre=nombre;
    this.pv=100;
    this.ps=100;
    this.curar=function(PersonajeObjetivo) {
        if(this.ps>=40){
        this.ps-=40;
        PersonajeObjetivo.pv+=20;
        }else{
            console.info(this.nombre + "No Cuenta con PS SUFICIEMTE");
        }
        this.estado(PersonajeObjetivo)
    }
    this.estado=function(ObjetivePlayer) {
        console.info(this);
        console.info(ObjetivePlayer);
    }
    this.ataque=function(ObjetivePlayer) {
        if (ObjetivePlayer.pv>40) {
            ObjetivePlayer.pv-=40;
        } else {
            ObjetivePlayer.pv=0;
            console.log(ObjetivePlayer.nombre+" Ha Muerto!");
        }
        this.estado(ObjetivePlayer);
    }
}
/* 
kirito= new Personaje("Kirito");
Usuna = new Personaje("Usuna");
console.log(kirito);
console.log(Usuna);
 */