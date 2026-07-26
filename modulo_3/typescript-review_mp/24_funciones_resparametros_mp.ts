// Concepto puro

// El rest parameter SIEMPRE es el último
function sumarDosisTotales(...dosis: number[]): number {
  return dosis.reduce((acc, n) => acc + n, 0);
}

console.log(sumarDosisTotales(1, 2, 3));          // 6
console.log(sumarDosisTotales(10, 20, 30, 40));   // 100
console.log(sumarDosisTotales());                 // 0

// Combinado con parámetros normales
function construirRutaExpediente(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRutaExpediente("https://clinica.ejemplo.com", "v1", "pacientes", "42"));
// https://clinica.ejemplo.com/v1/pacientes/42

function registrarEventoClinico(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? ` | ${detalles.join(" · ")}` : "";
  console.log(`[${timestamp}] ${tipo.toUpperCase()}${cuerpo}`);
}

registrarEventoClinico("ingreso");
// [10:05:01] INGRESO

registrarEventoClinico("consulta", "paciente: ana", "sala: 3");
// [10:05:02] CONSULTA | paciente: ana · sala: 3

registrarEventoClinico("emergencia", "área: urgencias", "código: 503", "reintento: sí");
// [10:05:03] EMERGENCIA | área: urgencias · código: 503 · reintento: sí
