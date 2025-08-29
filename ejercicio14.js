//Se crea una función que retornar una nueva promesa
function promesaCumplida() {
    return new Promise((resolve, reject) => {//se crea la promesa y recibe don funciones como parámetros "resolve" y "reject"
        setTimeout(() => { //se programa la ejecución de la función para después de un retraso 
            resolve("Promesa resuelta"); //se pone la promesa como cumplida
        }, 2000);
    });
}
promesaCumplida().then((mensaje) => {
    console.log(mensaje);
});