//Se crea un arreglo con valores "aleatorios"
let edades = [12,18,25,10,30,16];
//Se crea una variable llamada "mayores" en donde se le asignará el valor
//del resultado de la filtración del método filter, siendo "edad" los valores individuales que se encuentran dentro del arreglo.
let mayores = edades.filter((edad) => edad >= 18);
//Se muestra los valores que resultaron se "mayores de edad"
console.log(mayores);