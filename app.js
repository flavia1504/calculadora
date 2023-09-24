const {leerArchivo}= require ("./modulos/leerYGuardar.js");
const { argv } = require("process");
const { guardarDatos } = require("./modulos/leerYGuardar.js");

let archivo= leerArchivo;

function calculadora (cb,a, b) {
 let resultado=cb(a,b)
    let operacion= cb;   
    switch (operacion) {
        case "suma":
         const sumar= require ("./modulos/suma.js");
            break;
        case "resta":
         const restar= require ("./modulos/resta.js");  
            break;
        case "multiplicacion":
         const multiplicacion= require("./modulos/multiplicacion.js");
            break; 
        case "dividir":
         const dividir= require("./modulos/division.js");
            break;                   
        default:
         return "ingrese una operacion de las siguientes opciones: suma/ resta/ multiplicar/dividir."
            break;
            } 
         let objeto={
         operacion :callback,
    
         resultado :resultado
         }
      newLista.push(objeto)
      guardarDatos(archivo)

    return resultado;
}
    let a =+process.argv[3];
    let b =+process.argv[4];
    let operacion =process.argv[2];
// //revisar
 
console.log (calculadora("suma",a,b))