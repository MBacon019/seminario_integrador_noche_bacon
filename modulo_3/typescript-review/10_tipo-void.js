"use strict";
// tipo-void.ts
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
    // No hay return — esta función solo hace algo, no devuelve nada
}
saludar("Ana");
// Comparación: esto sí devuelve algo
function duplicar(n) {
    return n * 2;
}
const resultado = duplicar(5);
console.log(resultado); // 10
