const argv = require('./conf/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

let comand = argv._[0];

switch (comand) {
    case 'crear':
        {

            let tarea = porHacer.crear(argv.descripcion)
            console.log(tarea);
            break;
        }
    case 'listar':
        {
            let listado = porHacer.getListado(argv.realizado);
            for (tarea of listado) {
                console.log("========= POR HACER ===============")
                console.log(tarea.descripcion)
                console.log('Estado: ', tarea.realizado)
            }

            break;
        }
    case 'actualizar':
        {
            let hecho = porHacer.actualizar(argv.descripcion, argv.realizado);
            console.log(hecho);
            break;
        }
    case 'borrar':
        {


            console.log('argv.descripcion: ', argv.descripcion);

            let hecho = porHacer.borrar(argv.descripcion);
            console.log('borrar: ', hecho);
            break;
        }

    default:
        {
            console.log('opcion no valida');
            break;

        }

}