// tipo-unknown.ts

function procesarSignoVital(valor: unknown): string {
  // No puedo usar valor directamente — debo verificar primero

  if (typeof valor === "string") {
    // Aquí TypeScript sabe que es string
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    // Aquí TypeScript sabe que es number
    return valor.toFixed(2);
  }

  if (typeof valor === "boolean") {
    return valor ? "Sí" : "No";
  }

  return "Tipo no reconocido";
}

console.log(procesarSignoVital("taquicardia"));   // TAQUICARDIA
console.log(procesarSignoVital(3.14159));  // 3.14
console.log(procesarSignoVital(true));     // Sí
console.log(procesarSignoVital(null));     // Tipo no reconocido
