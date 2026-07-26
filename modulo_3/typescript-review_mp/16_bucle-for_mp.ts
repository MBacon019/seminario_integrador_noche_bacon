// bucle-for.ts

// For clásico
for (let i = 1; i <= 5; i++) {
  console.log(`Turno ${i}`);
}

// Recorrer un array por índice
const sintomas: string[] = ["fiebre", "tos", "dolor de cabeza", "fatiga"];

for (let i = 0; i < sintomas.length; i++) {
  console.log(`${i + 1}. ${sintomas[i]}`);
}

// For hacia atrás
for (let i = sintomas.length - 1; i >= 0; i--) {
  console.log(sintomas[i]);
}

// Tabla de dosis tipada
function tablaDosis(mgPorToma: number): void {
  console.log(`\n--- Dosis acumulada de ${mgPorToma}mg ---`);
  for (let i = 1; i <= 10; i++) {
    const totalMg: number = mgPorToma * i;
    console.log(`  ${mgPorToma}mg x ${i.toString().padStart(2)} tomas = ${totalMg.toString().padStart(3)}mg`);
  }
}

tablaDosis(7);
