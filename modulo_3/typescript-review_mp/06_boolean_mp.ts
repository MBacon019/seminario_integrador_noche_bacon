// tipos-boolean.ts
const presentaFiebre:  boolean = true;
const tieneAlergias:  boolean = false;

console.log(presentaFiebre);
console.log(!presentaFiebre);              // false  (negación)
console.log(presentaFiebre && tieneAlergias); // false  (ambos deben ser true)
console.log(presentaFiebre || tieneAlergias); // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const edadPaciente = 20;
const esAdulto: boolean = edadPaciente >= 18;
console.log(`¿Es adulto? ${esAdulto}`); // ¿Es adulto? true
