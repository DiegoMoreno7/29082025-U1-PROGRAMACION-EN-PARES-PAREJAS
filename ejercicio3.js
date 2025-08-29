const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu edad? ', (edad) => {
  
    if(edad < 18) {
        console.log("Eres menor de edad.");
    }

  // 4. Cierra la interfaz cuando hayas terminado
  rl.close();
});