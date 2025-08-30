// Importamos el módulo readline para poder leer la entrada del usuario desde la consola.
const readline = require('readline');

// Creaamos una interfaz de lectura y escritura para interactuar con el usuario.
const rl = readline.createInterface({
    input: process.stdin, // Lee la entrada desde el teclado.
    output: process.stdout // Escribe la salida en la consola.
});

// Pregunta al usuario su edad y ejecuta una función de callback con la respuesta.
rl.question('¿Cuál es tu edad? ', (edad) => {
  
    // Convierte la edad a un número y comprueba si es menor de 18.
    if(parseInt(edad) < 18) {
        // Si es menor de 18, imprime un mensaje indicando que es menor de edad.
        console.log("Eres menor de edad.");
    }

  // Cierra la interfaz de lectura, finalizando el programa.
  rl.close();
});
