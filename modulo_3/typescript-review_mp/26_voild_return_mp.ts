// Concepto puro

// void — no hay valor de retorno significativo
function registrarNota(texto: string): void {
  console.log(texto);
  // No hay return, o hay un "return;" vacío
}

// never — la función nunca retorna
function lanzarErrorClinico(mensaje: string): never {
  throw new Error(mensaje);
  // TypeScript sabe que el código tras throw es inalcanzable
}

function monitoreoContinuo(): never {
  while (true) {
    // proceso eterno de monitoreo de signos vitales, por ejemplo
  }
}

// Inferencia — TypeScript deduce "number"
function calcularDosisTotal(mgPorToma: number, tomas: number) {
  return mgPorToma * tomas; // tipo inferido: number
}

// Pero el retorno explícito actúa de contrato:
function calcularProporcion(a: number, b: number): number {
  if (b === 0) lanzarErrorClinico("División por cero"); // never encaja en cualquier tipo
  return a / b;
}

type CodigoTriage = 200 | 400 | 401 | 403 | 404 | 500;

function manejarResultadoExamen(codigo: CodigoTriage, datos?: string): void {
  if (codigo === 200) {
    console.log(`Éxito: ${datos ?? "sin datos"}`);
    return; // return vacío en void
  }
  procesarErrorClinico(codigo); // never — el flujo no sigue
}

function procesarErrorClinico(codigo: CodigoTriage): never {
  const mensajes: Partial<Record<CodigoTriage, string>> = {
    400: "Solicitud inválida",
    401: "No autenticado",
    403: "Sin permisos",
    404: "Paciente no encontrado",
    500: "Error interno del sistema",
  };
  throw new Error(`Código ${codigo}: ${mensajes[codigo] ?? "error desconocido"}`);
}

manejarResultadoExamen(200, "resultado normal");  // Éxito: resultado normal
// manejarResultadoExamen(404);                 // Lanza Error: Código 404: Paciente no encontrado
