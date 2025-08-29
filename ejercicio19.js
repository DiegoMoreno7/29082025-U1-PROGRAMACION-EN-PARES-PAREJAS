fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(respuesta => respuesta.json())
      .then(datos => {
        console.log("Resultado:", datos);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });