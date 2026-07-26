// bucle-while.ts

// While básico
let turno: number = 1;
while (turno <= 5) {
  console.log(`Turno: ${turno}`);
  turno++;
}

// do...while — se ejecuta al menos una vez
let dosisRestante: number = 10;
do {
  console.log(`Dosis restante: ${dosisRestante}`);
  dosisRestante -= 3;
} while (dosisRestante > 0);

// Mientras con TypeScript — adivinar el número de expediente
function simularBusquedaExpediente(): void {
  const expedienteSecreto: number = Math.floor(Math.random() * 10) + 1;
  const intentos: number[] = [3, 7, 5, expedienteSecreto]; // simulamos intentos
  let intentoActual: number = 0;
  let encontrado: boolean = false;

  while (intentoActual < intentos.length && !encontrado) {
    const intento: number = intentos[intentoActual];
    intentoActual++;

    if (intento === expedienteSecreto) {
      console.log(`¡Expediente encontrado! Era el ${expedienteSecreto} (intento ${intentoActual})`);
      encontrado = true;
    } else if (intento < expedienteSecreto) {
      console.log(`${intento} → Número demasiado bajo`);
    } else {
      console.log(`${intento} → Número demasiado alto`);
    }
  }
}

simularBusquedaExpediente();
