//Se crea una función para validar que un correo saea válido
function correoValido(correo){
    let correoRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/; //Se crea la expresión regular con la que se verifica que el correo sea correcto.

    if(correoRegex.test(correo)){ //se usa el método "test" para retornar un true o false, dependiendo de si el correo cumple con las condiciones
        console.log("correo valido")//true
    }else{
        console.log("correo invalido")//false
    }
}

correoValido("juhubecerrapaittepic.edu.mx")