// tipos-string.ts
const nombrePaciente:    string = "Ana García";
const saludo:    string = `Hola, ${nombrePaciente}`;
const vacia:     string = "";
const comillas:  string = 'También con comillas simples';

console.log(nombrePaciente);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombrePaciente.toUpperCase());      // ANA GARCÍA
console.log(nombrePaciente.toLowerCase());      // ana garcía
console.log(nombrePaciente.includes("García")); // true
console.log(nombrePaciente.split(" "));         // ["Ana", "García"]
