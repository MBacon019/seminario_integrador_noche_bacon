// tipos-number.ts
const dosisMg:        number = 42;
const nivelGlucosa:   number = 3.14;
const variacionPresion: number = -100;
const celulasSanguineas: number = 1_000_000;  // el _ es solo visual, no cambia el valor
const promedioSignos:  number = 10 / 3;

console.log(dosisMg);
console.log(nivelGlucosa);
console.log(celulasSanguineas);
console.log(promedioSignos);                   // 3.3333...
console.log(promedioSignos.toFixed(2));        // "3.33"

// Operaciones
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1  (resto de la división)
console.log(2 ** 10);  // 1024  (potencia)
