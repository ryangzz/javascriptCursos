function fnValidate(param) {
    // console.log(typeof param);
    if(typeof param=="number"){
        console.log("Esto es de tipo numerico");
    }else if(typeof param=="string"){
        console.log("Esto es de tipo String");
    }else if (typeof param=="object") {
        console.log("Esto es de tipo objeto");
        (param instanceof Persona)? console.log("Ademas es de tipo Persona")
        : console.log("Objeto No contemplado");
        console.log(param);
        
    }else{
        console.log("Tipo No contemplado");
    }
}

function Persona() {
    this.nombre="Jesus";
    this.edad=19;
}

var chuy=new Persona();

fnValidate(chuy);