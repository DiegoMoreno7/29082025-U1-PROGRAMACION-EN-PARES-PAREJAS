// Declaramos una variable 'saludo' y le asignamos una cadena de texto.
let saludo = "Hola, cómo estás?";

// Convierte la cadena de texto a mayúsculas.
saludo = saludo.toUpperCase();

// Divide la cadena en un arreglo usando la coma como separador y luego une los elementos sin separador, eliminando así la coma.
saludo = saludo.split(",").join("");

// Imprime la cadena de texto modificada en la consola.
console.log(saludo);
