// comentario de una linea
/* comentario de más
de una línea*/
const prompt = require("prompt-sync")(); //esto para pdoer usar prompt
// ejecutar por terminal: npm install prompt-sync

var nombre; 
var n1,n2, suma;

seguir = prompt("Calculadora");
if (seguir == "si"){
    opcion = parseInt(prompt("1.-Suma, 2.-Resta, 3.-Multiplicacion, 4.-Division, ¿que desea hacer?:"));
    if (opcion == 1){
    nombre = prompt("Calculadora Ingrese nombre: ");
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    
    suma = n1+n2;
    console.log(suma);
    suma= "hola mundo";
    console.log(suma);   
}}
   console.log("txiao")
