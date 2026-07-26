// null-undefined.ts

// En JS esto no da error, en TS sí (modo estricto)
// let diagnostico: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente
let diagnostico: string | null = null;   // ✅ puede ser string o null

diagnostico = "Gripe común";
console.log(diagnostico);  // "Gripe común"
diagnostico = null;
console.log(diagnostico);  // null

// undefined — variable declarada pero sin valor
let alergias: string | undefined;
console.log(alergias);  // undefined

alergias = "Penicilina";
console.log(alergias);  // "Penicilina"
