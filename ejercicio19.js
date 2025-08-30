// Realizamos una solicitud a la URL
fetch("https://jsonplaceholder.typicode.com/todos/1")
      // El primer '.then' se ejecuta cuando la solicitud es exitosa y recibe la respuesta.
      // y conviertimos la respuesta a formato JSON.
      .then(respuesta => respuesta.json())
      // El segundo '.then' se ejecuta con los datos ya en formato JSON.
      .then(datos => {
        // Imprime los datos obtenidos en la consola.
        console.log("Resultado:", datos);
      })
      // El '.catch' se ejecuta si ocurre un error durante la solicitud.
      .catch(error => {
        // Imprime un mensaje de error en la consola.
        console.error("Error al obtener los datos:", error);
      });
