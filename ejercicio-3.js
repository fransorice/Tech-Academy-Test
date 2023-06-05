/* 3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto.
Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
“hola como estas”. */
const prompt = require("prompt-sync")();

let texto = prompt("Ingrese un texto: ");
let caracterABuscar = prompt("Ingrese el caracter a buscar: ");
let cantidadCaracterEncontrado = 0;

let textoArray = Array.from(texto);

for (let i = 0; i <= textoArray.length - 1; i++) {
    if (textoArray[i] == caracterABuscar) {
        cantidadCaracterEncontrado++;
    }
}

cantidadCaracterEncontrado == 1 ? console.log(`El texto "${texto}" tiene el caracter "${caracterABuscar}" repetido ${cantidadCaracterEncontrado} vez.`) : console.log(`El texto "${texto}" tiene el caracter "${caracterABuscar}" repetido ${cantidadCaracterEncontrado} veces.`)


