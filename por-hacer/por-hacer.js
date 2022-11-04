const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`por-hacer/db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
        else console.log("se ha guardado correctamente")
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../por-hacer/db/data.json');
       //console.log('LO que trae cargar -> ',listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {

    cargarDB();

    return listadoPorHacer;

}

const actualizar = (descripcion, completado  ) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion.descripcion 
        //, console.log('muestre de tarea ', completado)
    })

    if (index >= 0 ) {

        listadoPorHacer[index].completado = descripcion.completado;
        guardarDB();
        return true;

    }else{
        return false;
    }
     
}

const borrar = (descripcion) => {

    cargarDB();

   // console.log('lo que trae descripcion -> ', descripcion);

    //console.log('lo que trae el cargado -> ', listadoPorHacer);

    let nuevoListado = listadoPorHacer.filter( 
        tarea => tarea.descripcion !== descripcion,
       // console.log('index de borrar ->' , tarea.descripcion)
        )
       // console.log('index -> ', index);

    if(nuevoListado.length !== listadoPorHacer.length) {
        listadoPorHacer = nuevoListado; 
        guardarDB();
        return true;
    }
    else{
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}