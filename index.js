console.log("TIENDA PELUCHES");
console.log("==============");
console.log("1. Comprar");
console.log("2. Ver Orden");
console.log("3. Anular Orden");
console.log("4. Pagar Orden");
console.log("5. Salir");

const readline = require("readline");
const { promisify } = require("util");

const captura = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pregunta = promisify(captura.question).bind(captura);

let opcionUsuario = "";
let volverAPreguntar = true; //  Variable tipo boolean

captura.question("Hola como te Llamas: ", async(respuesta) => {
console.log("Hola y bienvenid@ " + respuesta + " Ingrese una opcion de nuestro menu: "); 

while(volverAPreguntar) { //Mientras volverAPreguntar sea verdadero
  var  opcionSel = await pregunta("OPCION: ");
  //captura.question("OPCION: ", (opcionSel) => {
    console.log("Seleccionaste la opcion: " + opcionSel);
  
    if ( ["1" , "2" , "3" , "4" ,"5"].includes(opcionSel) ) {// Esto no es una variable, es un valor)
      console.log("La opcion es correcta. ");
      opcionUsuario = opcionSel;
      volverAPreguntar = false;
      
    } else {
      console.log("Upss Opcion no valida. ");
      volverAPreguntar = true;
    }
      
    //});
}
});
