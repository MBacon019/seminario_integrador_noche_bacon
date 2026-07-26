// Concepto puro
function sumarDosis(a: number, b: number): number {
  return a + b;
}

function saludarPaciente(nombre: string): string {
  return `Hola, ${nombre}`;
}

// TypeScript verifica el argumento Y el retorno
console.log(sumarDosis(3, 4));        // 7
console.log(saludarPaciente("Sofía")); // Hola, Sofía

// Error de compilación — a propósito (descoméntalo para verlo):
// sumarDosis("3", 4);  // Argument of type 'string' is not assignable to 'number'

function calcularDescuentoConsulta(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenConsulta(especialidad: string, precio: number, descuento: number): string {
  const final = calcularDescuentoConsulta(precio, descuento);
  return `${especialidad}: $${precio} → $${final} (${descuento}% off)`;
}

console.log(resumenConsulta("Cardiología", 120, 15));   // Cardiología: $120 → $102 (15% off)
console.log(resumenConsulta("Dermatología", 350, 20));   // Dermatología: $350 → $280 (20% off)
console.log(resumenConsulta("Pediatría", 45, 0));       // Pediatría: $45 → $45 (0% off)
