const {leerArchivo, guardarDatos}= require ("./modulos/leerYGuardar");


let archivo = leerArchivo();


let a= parseInt(process.argv[2])

let b= parseInt(process.argv[3])

let operacion = process.argv[4]


let { sumar } = require("./modulos/suma.js");
let { resta } = require("./modulos/resta.js");
let { multiplicacion } = require("./modulos/multiplicacion.js");
let { division } = require("./modulos/division.js");



function calculadora (a, b, callback) {

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
    
        resultado :calculadora(cb,a,b)
     }
     variableLeerArchivo.push(objeto)
     guardarDatos(variableLeerArchivo)

    return resultado;
}
 
console.log(calculadora())