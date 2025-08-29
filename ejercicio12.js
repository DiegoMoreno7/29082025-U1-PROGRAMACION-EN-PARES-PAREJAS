//Se crea un arreglo con los valores de "precio"
let precios = [10,20,30,40];
//Se usa el método "reduce" para estar sumando los valores del arreglo de uno en uno y estarlos acumulando para que el valor final
//sea asignado en la variable "total", el número 0 indica el valor inicial.
let total = precios.reduce((acum, precio) => acum + precio, 0);
//Se muestra el total
console.log("Total: " + total);