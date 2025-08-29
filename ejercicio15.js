async function promesaCumplida() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 2000);
    });
    let mensaje = await promise;
    console.log(mensaje);
}
promesaCumplida();