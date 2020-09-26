function Partido(visitTeam, localTeam) {
    this.visit=visitTeam;
    this.local=localTeam;
    this.marcador=function() {
        console.info("Visitante "+this.visit.name + ": " +this.visit.marker);
        console.info("Local "+this.local.name + ": " +this.local.marker);
    }
    this.gamesSart=function() {
        this.visit.marker=0;
        this.local.marker=0;
        console.info("Visitante "+this.visit.name + ": " +this.visit.marker);
        console.info("Local "+this.local.name + ": " +this.local.marker);
        console.info("INICIA EL PARTIDOOOOO SEÑOR MARTINOLI!! PARTIDASO! TRAIGO UNOS PORDUCTOS POR SI LE INTERESAN Y UNOS CUPONES")
    }
    this.gameFinished=function() {
        console.info("Visitante "+this.visit.name + ": " +this.visit.marker);
        console.info("Local "+this.local.name + ": " +this.local.marker);
        if (this.visit.marker>this.local.marker) {
            console.log("Equipo Ganador: "+this.visit.name+ " con "+this.visit.marker+" Goles");
            
        } else if(this.visit.marker<this.local.marker) {
            console.log("Equipo Ganador: "+this.local.name+ " con "+this.local.marker+" Goles");

        }
        else{
            console.log("Tiempo Extra Gol Gana!!!");
            console.log("Marcador Global: ");
            this.marcador();
            this.ExtraTime();
        }
    }
}

function Team(nombre) {
    this.name=nombre;
    this.marker=0;
    this.annotation=function() {
        this.marker+=1;
        console.log("GOOOOOOL de : "+this.name);
        PartidoAmistoso.marcador();
    }

}
Partido.prototype.ExtraTime=function() {
    console.log("Iniciamos Tiempo Extra!!");
}
var Team1= new Team("Monterrey");
var Team2= new Team("Tigres");
var PartidoAmistoso = new Partido(Team1, Team2);
