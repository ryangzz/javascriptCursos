var i=0;
console.log("Wile==============================");
while (i<10) {
    i++;
    if(i==5){
        // continue sirve para saltarse la iteracinon
        continue;
    }
    console.log(i);
    
}
console.log("do-while===========================");

do{
    console.log(i);
    i--;
    if (i==2) {
        console.log("Terminamos el ciclo con break en la i="+i);
        
        break;
    }
    
}while (i>0);