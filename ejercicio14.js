function promesaCumplida() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 2000);
    });
}
promesaCumplida().then((mensaje) => {
    console.log(mensaje);
});