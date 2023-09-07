const prompt = require("prompt-sync")();
const fs = require('fs');
let contador =0;
try {
    contador = parseInt(fs.readFileSync('contador.txt','utf8'));
} catch (error) {
    contador = 0;
}
contador++;
let continuar = true;
while (continuar) {

    let primerValor= parseInt(prompt("Ingrese el primer valor: "));
    let segundoValor= parseInt(prompt("Ingrese segundo valor: "));
    let opcion= parseInt(prompt("(1)Sumar (2)Restar (3)Multiplicar (4)Dividir "));
    switch (opcion){
        case 1:
        console.log("El resultado es", primerValor+segundoValor);
        break;
    
        case 2:
        console.log("El resultado es", primerValor-segundoValor);
        break;

        case 3:
        console.log("El resultado es", primerValor*segundoValor);
        break;
        
        default:
            if (segundoValor==0){
                console.log("No se puede dividir por cero.")
            }
            else {
                console.log("El resultado es", primerValor/segundoValor);
            };    
        }
        console.log('el programa se ha ejecutado ${contador} veces');
const respuesta = prompt("Desea continuar? (s/n)").toLowerCase();
if (respuesta !=="s") {
    continuar = false;
     } 
}
console.log("El programa ha terminado");
