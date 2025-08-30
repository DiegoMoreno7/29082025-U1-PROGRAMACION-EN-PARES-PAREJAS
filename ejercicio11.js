// Declaramos un arreglo llamado 'numeros'
let numeros = [1,2,3,4,5];

// Creamos un nuevo arreglo llamado 'cuadrados' aplicando la función map al arreglo 'numeros'.
// La función map multiplica cada número por sí mismo, calculando su cuadrado.
let cuadrados = numeros.map((num) => num * num);

// Imprime en la consola el arreglo 'cuadrados', que contiene los cuadrados de los números originales.
console.log(cuadrados);
