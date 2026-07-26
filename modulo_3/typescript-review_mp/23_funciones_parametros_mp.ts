// Concepto puro

// Opcional: el parámetro puede no llegarse a pasar
function crearEtiquetaDiagnostico(texto: string, mayusculas?: boolean): string {
  // Dentro, mayusculas es boolean | undefined
  if (mayusculas) {
    return `[${texto.toUpperCase()}]`;
  }
  return `[${texto}]`;
}

console.log(crearEtiquetaDiagnostico("gripe"));          // [gripe]
console.log(crearEtiquetaDiagnostico("alerta", true)); // [ALERTA]

// Por defecto: si no se pasa, usa el valor indicado
function repetirAviso(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetirAviso("ha"));    // hahaha  (usa el default 3)
console.log(repetirAviso("ha", 5)); // hahahahaha

type NivelAlerta = "info" | "warn" | "error";

function registrarLog(
  mensaje: string,
  nivel: NivelAlerta = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<NivelAlerta, string> = {
    info:  "ℹ️  INFO ",
    warn:  "⚠️  WARN ",
    error: "❌ ERROR",
  };

  const hora = timestamp ? ` [${new Date().toISOString()}]` : "";
  return `${prefijos[nivel]}${hora}: ${mensaje}`;
}

console.log(registrarLog("Paciente estable"));
// ℹ️  INFO : Paciente estable

console.log(registrarLog("Presión alta", "warn"));
// ⚠️  WARN : Presión alta

console.log(registrarLog("Paro cardíaco", "error", true));
// ❌ ERROR [2026-06-23T...]: Paro cardíaco
