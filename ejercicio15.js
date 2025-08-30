// Definimos una función asíncrona
async function promesaCumplida() {
    // Creamos una nueva promesa que se resuelve después de 2 segundos.
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // Resuelve la promesa con el mensaje "Promesa resuelta".
            resolve("Promesa resuelta");
        }, 2000);
    });
    // Espera a que la promesa se resuelva y asigna el resultado a la variable 'mensaje'.
    let mensaje = await promise;
    // Imprime el mensaje resuelto en la consola.
    console.log(mensaje);
}
// Llama a la función asíncrona para iniciar la ejecución.
promesaCumplida();
