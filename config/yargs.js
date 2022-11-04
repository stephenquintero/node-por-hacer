const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripsion de la tarea por actualizar'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completa o pendiente la tarea '
}

const argv = require('yargs')
.command('crear', 'Crear elemento por hacer' ,{
    descripcion
})
.command('actualizar', 'Actualizar el estado completado de una tarea',{
    descripcion,
    completado
})
.command('borrar','borrar del listado de tarea',{
    descripcion
})
.help()
.argv;

module.exports = {
    argv
}