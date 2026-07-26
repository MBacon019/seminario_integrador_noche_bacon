// break-continue.ts

// break — sale del bucle
console.log("Buscar el primer paciente mayor de 50 años:");
const edadesPacientes: number[] = [23, 45, 12, 67, 34, 89, 56];

for (const edad of edadesPacientes) {
  if (edad > 50) {
    console.log(`  Encontrado: ${edad} años`);
    break;  // para de buscar
  }
  console.log(`  ${edad} años no es mayor de 50`);
}

// continue — salta a la siguiente iteración
console.log("\nSolo turnos pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;  // salta los impares
  console.log(`  ${i}`);
}

// Útil para saltar valores inválidos
const lecturasPresion: Array<number | null> = [1, null, 3, null, 5, 6];
let suma: number = 0;

for (const lectura of lecturasPresion) {
  if (lectura === null) continue;  // salta las lecturas faltantes
  // Aquí TypeScript sabe que lectura es number
  suma += lectura;
}
console.log(`\nSuma ignorando lecturas faltantes: ${suma}`);  // 15
