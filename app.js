const {leerArchivo}= require ("./modulos/archivos.js");
const { argv } = require("process");

let archivo= leerArchivo;
let a =process.argv[2];
    let b =process.argv[3];
    let operacion =process.argv[4];


function calculadora (a, b, callback) {
   callback =operacion;
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
         "ingrese una operacion de las siguientes opciones: suma/ resta/ multiplicar/dividir."
            break;
    }
    return callback;
}
    
//revisar

console.log(calculadora(a,b,operacion))