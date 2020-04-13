descripcion = {
    alias: 'd',
    describe: 'descripcion de la tarea',
    demand: true
}

realizado = {
    default: false,
    alias: 'c',
    describe: 'marcar como completado una tarea'
}

const argv = require('yargs')
    .command('crear', 'crea una tarea ', {
        descripcion
    })
    .command('actualizar', 'actualizar una tarea creada', {
        descripcion,
        realizado
    })
    .command('borrar', 'borra una tarea ', {
        descripcion
    })
    .command('listar', 'lista las tareas', {
        realizado
    }).argv;

module.exports = {
    argv
}