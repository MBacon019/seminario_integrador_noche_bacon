// ternario.ts

const edadPaciente: number = 20;

// Forma larga
let acceso: string;
if (edadPaciente >= 18) {
  acceso = "Autorizado";
} else {
  acceso = "Requiere tutor";
}

// Forma corta con ternario
const acceso2: string = edadPaciente >= 18 ? "Autorizado" : "Requiere tutor";

console.log(acceso);   // Autorizado
console.log(acceso2);  // Autorizado

// Muy útil dentro de template literals
const nivelDolor: number = 7.5;
const evaluacion = nivelDolor >= 5 ? "Requiere analgésico" : "Dolor leve";
console.log(`Nivel de dolor: ${nivelDolor} — ${evaluacion}`);

// No anidar ternarios — difícil de leer
// ✅ Mejor usar if/else para tres o más casos
const resultado =
  nivelDolor >= 9 ? "Dolor severo" :
  nivelDolor >= 7 ? "Dolor moderado-alto"       :
  nivelDolor >= 5 ? "Dolor moderado"      : "Dolor leve";

console.log(resultado);  // Dolor moderado-alto
