// procesador-citas.ts

type Cita = {
  id:       number;
  paciente:  string;
  costo:    number;
  estado:   "pendiente" | "confirmada" | "cancelada";
};

function procesarCitas(citas: Cita[]): void {
  console.log("=== RESUMEN DE CITAS ===\n");

  let totalFacturado: number = 0;
  let citasPendientes: number = 0;
  let citasConfirmadas: number = 0;

  for (const cita of citas) {
    // Switch para el estado
    switch (cita.estado) {
      case "confirmada":
        totalFacturado += cita.costo;
        citasConfirmadas++;
        console.log(`✅ #${cita.id} ${cita.paciente.padEnd(15)} ${cita.costo}€`);
        break;
      case "pendiente":
        citasPendientes++;
        console.log(`⏳ #${cita.id} ${cita.paciente.padEnd(15)} ${cita.costo}€`);
        break;
      case "cancelada":
        console.log(`❌ #${cita.id} ${cita.paciente.padEnd(15)} CANCELADA`);
        break;
    }
  }

  console.log("\n--- Estadísticas ---");
  console.log(`  Confirmadas: ${citasConfirmadas}   | Facturado: ${totalFacturado}€`);
  console.log(`  Pendientes:  ${citasPendientes}`);
  console.log(`  Total citas: ${citas.length}`);
}

const citas: Cita[] = [
  { id: 1, paciente: "Ana García",   costo: 150, estado: "confirmada" },
  { id: 2, paciente: "Luis Pérez",   costo: 320, estado: "pendiente"  },
  { id: 3, paciente: "Marta López",  costo: 75,  estado: "confirmada" },
  { id: 4, paciente: "Carlos Ruiz",  costo: 200, estado: "cancelada"  },
  { id: 5, paciente: "Elena Vega",   costo: 490, estado: "confirmada" },
  { id: 6, paciente: "Pedro Sanz",   costo: 110, estado: "pendiente"  },
];

procesarCitas(citas);
