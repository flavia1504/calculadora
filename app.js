const {leerArchivo, guardarDatos}= require ("./modulos/leerYGuardar");


let archivo = leerArchivo();


let a= parseInt(process.argv[2])

let b= parseInt(process.argv[3])

let operacion = process.argv[4]


let { sumar } = require("./modulos/suma.js");
let { resta } = require("./modulos/resta.js");
let { multiplicacion } = require("./modulos/multiplicacion.js");
let { division } = require("./modulos/division.js");



function calculadora(a, b, operacion) {
    
  operacion = operacion.toLowerCase();
  
    switch (operacion) {
    case "suma":
      return sumar(a, b);
      break;
    case "resta":
      return resta(a, b);
      break;
    case "multiplicacion":
      return multiplicacion(a, b);
      break;
    case "dividir":
      if(b!=0){
return division(a, b);
      }else{
return "No se puede dividir por 0"
      }
      
      break;
    default:
      return "ingrese una operacion de las siguientes opciones: suma/ resta/ multiplicar/dividir.";
      break;
  }
}
let objeto={
        operacion : operacion,
    
        resultado :calculadora(a,b,operacion)
    }
    archivo.push(objeto)
    guardarDatos(archivo)



//revisar

console.log(calculadora(a, b, operacion));
console.log(archivo)

