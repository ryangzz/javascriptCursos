for_principal://sobre nombre que se le pone al ciclo
for(let i=0; i<3; i++){
    console.log("i", i+1);
    for_secundario:
    for (let j = 0; j < 3; j++) {
        console.log("j", j+1);
        for(let k=0;k<3;k++){
            console.log("k", k+1);
            // Esta instruccion puede ser con continue o break, seguida de la rotulacion para que rompa
            // un ciclo entero fuera del que se encuentra el programa
            break for_secundario;
            // break for_principal;
        }
    }
}