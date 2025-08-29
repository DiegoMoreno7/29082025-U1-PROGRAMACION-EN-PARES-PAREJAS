
let tareas = []

function tareaNueva(id, descripcion){
    const nueva = {
        id : id,
        descripcion : descripcion,
        completada : false
    }
    tareas.push(nueva)
    console.log("Tarea '" + descripcion + "' agregada")
}

tareaNueva(1,"26/08/2025-ED-EXAMEN DIAGNOSTICO-INDIVIDUAL")
tareaNueva(2,"28/08/2025-ED-EXAMEN DIAGNOSTICO PRACTICO-PAREJAS")


function borrarTarea(id){
    const pos = tareas.findIndex(tarea => tarea.id === id )

    if(pos !== -1){
        const tareaBorrada = tareas.splice(pos, 1)[0];
        console.log("Tarea '"+ tareaBorrada.descripcion +"' eliminada.")
    }else {
        console.log("No se encontró ninguna tarea con ID: ${id}");
    }
}

borrarTarea(1)


function tareaCompletada(id){
    const pos = tareas.find(tarea => tarea.id === id )
    if(pos){
        pos.completada = true
        console.log("Tarea '"+ pos.descripcion +"' marcada como completada.")
    }else {
        console.log("No se encontró ninguna tarea con ID: "+ id);
    }
}

tareaCompletada(2)
console.log(tareas)