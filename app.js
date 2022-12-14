
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');



let comando = argv._[0];

switch ( comando ) {
    case 'crear':
       let tarea = porHacer.crear( argv.descripcion );
        console.log('Lo que muestra al final -> ',tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado( argv );

        for (let tarea of listado ){

        console.log('==== Por Hacer ====='.green);
        console.log('Descripcion: ',tarea.descripcion);
        console.log('Estado: ', tarea.completado);
        console.log('==== Por Hacer ====='.green);

        }
        
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv);
            console.log('actualizado: ',actualizado);
    break;   
    
    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion );
        console.log(borrado);

    break;

    default:
        console.log("comando no es reconocido");
  
}