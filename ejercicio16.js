function correoValido(correo){
    let correoRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

    if(correoRegex.test(correo)){
        console.log("correo valido")
    }else{
        console.log("correo invalido")
    }
}

correoValido("juhubecerrapaittepic.edu.mx")