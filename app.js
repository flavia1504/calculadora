const {leerArchivo}= require ("./modulos/archivos.js");
const { argv } = require("process");
const { guardarDatos } = require("./modulos/leerYGuardar.js");

let archivo= leerArchivo;
let a =process.argv[2];
    let b =process.argv[3];
    let operacion =process.argv[4];


function calculadora (a, b, callback) {
let resultado= callback(a,b)
   callback =operacion;
   let operacion
    switch (operacion) {
        case callback="suma":
         const sumar= require ("./modulos/suma.js");
            break;
        case callback="resta":
         const restar= require ("./modulos/resta.js");  
            break;
        case callback="multiplicacion":
         const multiplicacion= require("./modulos/multiplicacion.js");
            break; 
        case callback="dividir":
         const dividir= require("./modulos/division.js");
            break;                   
        default:
         "ingrese una operacion de las siguientes opciones: suma/ resta/ multiplicar/dividir."
            break;
    } 
    let objeto={
        operacion :callback,
    
        resultado :resultado
     }
     variableLeerArchivo.push(objeto)
     guardarDatos(variableLeerArchivo)

    return resultado;
}
    
//revisar
 
console.log(calculadora())
