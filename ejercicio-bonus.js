/* Ejercicio bonus - Convertir caracteres a mayúsculas. (15 ptos).
Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
antes y el después. */
const prompt = require("prompt-sync")();

let palabra = prompt("Ingrese una cadena de texto: ");
console.log(`Palabra inicial: ${palabra}`);

var palabra_array = palabra.split('.');
palabra_array[0] = palabra_array[0].toUpperCase();

let unir = (item) => {
    if (palabra != '') palabra += '.';
    palabra += item;
}

palabra = '';
palabra_array.forEach(unir);

console.log(`Palabra con mayusculas agregadas: ${palabra}`);