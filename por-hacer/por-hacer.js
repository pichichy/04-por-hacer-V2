const fs = require('fs');

let listado = [];

const crear = (descripcion) => {

    let por_hacer = {
        descripcion,
        realizado: false
    }


    cargar();
    listado.push(por_hacer);
    guardar();
    return por_hacer

}

const cargar = () => {
    try {
        listado = require('../db/data.json');
    } catch (error) {
        listado = [];
    }
}

const guardar = () => {

    let data = JSON.stringify(listado);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new err('error al tratar de escribir en el archivo');
    })

}

const getListado = (realizado = false) => {
    cargar();

    console.log('getListado', realizado)
    console.log('listado', listado)
    let newArray = listado.filter(tarea => {

        console.log('tarea.realizado', tarea.realizado)
        console.log('realizadoo', realizado)
        if (realizado === false) {
            console.log('SON IGUALES')
        } else {
            console.log('SON DIFERENTES')
        }
        return tarea


    })

    console.log('newArray', newArray)

    return newArray;
}

const actualizar = (descripcion, realizado = true) => {

    cargar();
    let indice = listado.findIndex(tarea => tarea.descripcion === descripcion);

    if (indice >= 0) {
        listado[indice].realizado = realizado;
        guardar();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargar();
    let indice = listado.findIndex(tarea => tarea.descripcion === descripcion);

    if (indice >= 0) {
        listado.splice(indice, 1);
        guardar();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}