/* 4.- Invertir un array (10 ptos).
Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
mismo pero invertido.
Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
[7,”cadena”,98,56,34,5,23]. */
const prompt = require("prompt-sync")();
let answer = 1;
let arrayOriginal = [];
let arrayInvertido = [];

while(answer == 1) {
    arrayOriginal.push(prompt("Ingrese algo al array: "));
    answer = prompt("Ingrese '1' para seguir agregando elementos o cualquier otra tecla para salir: ");
}

for (let i = 0; i <= arrayOriginal.length - 1; i++) {
    arrayInvertido.unshift(arrayOriginal[i]);
}

console.log(arrayOriginal);
console.log(arrayInvertido);

