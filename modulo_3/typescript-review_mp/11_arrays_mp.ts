// arrays.ts

const pacientes:   string[]  = ["Ana", "Luis", "Marta"];
const edades:    number[]  = [28, 31, 25];
const enTratamiento:   boolean[] = [true, false, true];

console.log(pacientes);
console.log(pacientes[0]);        // "Ana"
console.log(pacientes.length);    // 3

// Los métodos de array funcionan igual que en JS
pacientes.push("Carlos");
console.log(pacientes);

const mayusculas = pacientes.map(p => p.toUpperCase());
console.log(mayusculas);

const adultos = edades.filter(e => e >= 18);
console.log(adultos);

// TypeScript avisa si añades el tipo incorrecto
// pacientes.push(42);  // ❌ Error: 'number' no es 'string'
