const fs = require("fs");
const path = "../data/archivo.json"
function leerArchivo() {
  const json = fs.readFileSync(path, "utf-8");
  const array = JSON.parse(json);
  return array;
}



function guardarDatos(objeto){
  let newLista = JSON.stringify(objeto);
  fs.writeFileSync(path,newLista);
}


module.exports={
    leerArchivo,
    guardarDatos
}
