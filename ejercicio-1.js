/* 1.- Random par o impar(10 ptos).
Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
devuelva si el número generado es par o impar.
Ejemplo:
Primera iteración: numeroGenerado = 5 // el número es impar
Segunda iteración: numeroGenerado = 12 // el número es par */ 

for (let i = 1; i < 6; i++) {
    let numeroGenerado = parseInt(Math.random()*100);
    if (numeroGenerado % 2 == 1) {
        console.log(`El numero ${numeroGenerado} es impar`);
    } else {
        console.log(`El numero ${numeroGenerado} es par`);
    }
}