// tipo-void.ts

function registrarIngreso(nombrePaciente: string): void {
  console.log(`Paciente ingresado: ${nombrePaciente}!`);
  // No hay return — esta función solo hace algo, no devuelve nada
}

registrarIngreso("Ana");

// Comparación: esto sí devuelve algo
function duplicarDosis(mg: number): number {
  return mg * 2;
}

const resultado = duplicarDosis(5);
console.log(resultado); // 10
