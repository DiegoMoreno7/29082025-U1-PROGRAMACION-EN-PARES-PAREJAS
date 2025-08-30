Ejercicios en parejas

1.- Variables y tipos de datos
  Para este ejercicio, se declara una variable para almacenar un nombre y luego se imprime un mensaje de saludo en la consola utilizando esa variable.

2.-Operaciones matemáticas
  Para este ejercicio se buscaba realizar las 4 operaciones básicas entre dos números.
  Simplemente se declararon las variables con su valor y se realizaron las operaciones asignando el resultado en una nueva variable (la variable era especial para cada operación).
  
3.-Condicionales(if-else)
  Este ejercicio solicita al usuario que ingrese su edad a través de la consola. Luego, utiliza una estructura condicional `if` para verificar si la edad es menor a 18 y muestra un mensaje indicando si el usuario es menor de edad.

4.-Bucles(for-loop)
  Para este ejercicio se buscaba mostrar los números del 1 al 10 de manera secuencial.
  Se hizo uso de un for, en cada vuelta se mostraba el valor de i (inicialmente 1) así hasta que llegó al 10.
  
5.-Funciones básicas
  Se define una función simple llamada saludar que acepta un nombre como parámetro y devuelve un saludo personalizado. Finalmente, se llama a la función con un nombre de ejemplo y se imprime el resultado en la consola.

6.-Manipulación de arreglos
  Para este ejercicio se buscaba mostrar un valor en concreto de un arreglo, para esta ocasión se trataba de ciudades.
  Se llenó un arreglo con 5 ciudades y se mostró la segunda ciudad con "console.log(arr[1])" debido a que la primera ciudad se encuentra en la posición 0.
  
7.-Recorriendo arreglos con forEach
  En este ejercicio, se crea un arreglo de números. Se utiliza el método forEach para iterar sobre cada elemento del arreglo y mostrarlo individualmente en la consola.

8.-Uso de objetos
  Para este ejercicio se buscaba imprimir una de las propiedas de un objeto, en este caso "nombre".
  Se creo el objeto "persona" con sus respectivas propiedades y se mostró colocando "consolo.log("nombre " + persona.nombre)", al colocar el objeto, 
  seguido colocar un punto y el nombre de la propiedad hará que de el valor que se guarda para ese elemento.
  
9.-Manipulación de objetos
  Se crea un objeto literal para representar a una persona con propiedades como nombre, edad y profesión. Luego, se le añade dinámicamente una nueva propiedad (nacionalidad) al objeto y se imprime el valor de esta nueva propiedad.

10.-Filtrar elementos de un array
  Para este ejercicio se buscaba filtrar los valores númericos(edades) de un array y así saber cuales serían mayor de edad.
  Se colocaron los valores dentro de un array y se usó el método "filter". Se indicó que el valor que se compare debe de ser mayor a 18.
  
11.-Mapear un array
  Este ejercicio demuestra el uso del método map. A partir de un arreglo de números, se crea un nuevo arreglo que contiene el cuadrado de cada número del arreglo original. El nuevo arreglo se imprime en la consola.

12.-Reducir un array
  Para este ejercicio se buscaba conseguir la sumatoria de los valores que se encuentran dentro de un array.
  Se usó el método "reduce" el cual hará uso de dos variables "acum" para estar acumulando la sumatoria de los valores y "precio" en donde se almacenan 
  temporalmente los valores, además, se indica que el valor inicial es 0.
  
13.-Funciones asíncronas(setTimeout)
  Se utiliza la función setTimeout para demostrar la asincronía en JavaScript. Se define una función que imprime un mensaje y se programa para que se ejecute después de un retardo de 3 segundos.

14.-Manejo de promesas
  Para este ejercicio se buscaba crear una promesa que se resuelva después de dos segundos y mostrar el mensaje de "Promesa resuelta".
  Se creó una función llamada "promesaCumplida" que cuando una promesa se cumpla muestre el mensaje pero antes debe esperar 2 segundos debido al
  "setTimeout", después se manda a llamar a la función y se usa el "then" que está asociado a que una promesa fue cumplida ("catch" es el responsable cuando es rechazada).
  
15.-Uso de async/await
  Este ejercicio muestra el uso de async/await para manejar operaciones asíncronas de una manera más legible. Se crea una función asíncrona que espera la resolución de una promesa (que se resuelve después de 2 segundos) y luego imprime el resultado.

16.-Expresiones regulares
  Para este ejercicio se buscaba validar un correo eléctronico con una expresión regular.
  Se creó una función en donde recibirá el "correo" en cuestió y este será analizado por la expresión regular valida, esto es posible gracias al método "test" el cual retorna un true o false.
17.-Transformación de texto
  Trabajamos con la manipulación de cadenas de texto. Una cadena inicial es transformada primero a mayúsculas usando toUpperCase() y luego se le elimina una coma usando los métodos split() y join(). El resultado final se muestra en la consola.

18.-Ordenamiento de un array
  Para este ejercicio se buscaba ordener de manera alfabetica las palabras que se encuentran dentro de un array.
  Se creó el arreglo y simplemente se hizo uso del método "sort" para que automáticamente ordenara las palabras.
19.-Simulación de un endpoint con fetch(JSONPlaceholder)
  Se utiliza la API fetch para realizar una solicitud HTTP a un endpoint público de JSONPlaceholder. Se procesa la respuesta para convertirla a formato JSON y se imprimen los datos obtenidos. También se incluye el manejo de posibles errores con .catch().

20.-Creación de un pequeño CRUD en memoria
  Para este ejercicio se buscaba generar un crud en el que puedas crear una tarea, eliminarla o bien mostrarla como completada.
  Se creó un array en donde guardaremos todas las tareas. Se crearon las funciones "tareaNueva", "borrarTarea" y "tareaCompletada".
  En la creación se crea un objeto llamado nueva para se agregado a tareas.
  En la eliminación se busca la tarea a través de su id con ayuda del método "findIndex".
  En la confirmación igualmente se busca a través del id pero ahora se utiliza el método "find" y se le cambia el valor a la propiedad "completada" a true.
