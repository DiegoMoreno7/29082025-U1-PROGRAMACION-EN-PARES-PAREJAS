//Dentro de este arreglo se almacenarán las tareas
let tareas = []

//Se crea una función para añadir las tareas
function tareaNueva(id, descripcion){
    const nueva = { //La tarea se crea mediante un objeto llamado nueva que cuenta con las propiedades id, descripción y completada (siempre marca false)
        id : id,
        descripcion : descripcion,
        completada : false
    }
    tareas.push(nueva) //Se agrega al arreglo
    console.log("Tarea '" + descripcion + "' agregada")
}
//Se agregan dos tareas
tareaNueva(1,"26/08/2025-ED-EXAMEN DIAGNOSTICO-INDIVIDUAL")
tareaNueva(2,"28/08/2025-ED-EXAMEN DIAGNOSTICO PRACTICO-PAREJAS")

//Se crea una función para eliminar tareas
function borrarTarea(id){
    const pos = tareas.findIndex(tarea => tarea.id === id ) //se busca la tarea a través de su id usando el método "findIndez"

    if(pos !== -1){
        const tareaBorrada = tareas.splice(pos, 1)[0]; //
        console.log("Tarea '"+ tareaBorrada.descripcion +"' eliminada.")
    }else {
        console.log("No se encontró ninguna tarea con ID: ${id}"); //Mensaje en caso de no encontrar la tarea deseada con el id
    }
}

borrarTarea(1)


function tareaCompletada(id){
    const pos = tareas.find(tarea => tarea.id === id ) //se busca la tarea con su id usando find
    if(pos){
        pos.completada = true//el valor de completada pasa de "false" a "true"
        console.log("Tarea '"+ pos.descripcion +"' marcada como completada.")// se indica que ya se marcó como completada
    }else {
        console.log("No se encontró ninguna tarea con ID: "+ id);
    }
}

tareaCompletada(2)
console.log(tareas)