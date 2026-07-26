// Concepto puro
const especialidades: Record<string, number> = {
  CARDIOLOGIA: 80,
  DERMATOLOGIA: 60,
  PEDIATRIA: 50,
};

for (const especialidad in especialidades) {
  console.log(`${especialidad} → costo $${especialidades[especialidad]}`);
}
// CARDIOLOGIA → costo $80, DERMATOLOGIA → costo $60, PEDIATRIA → costo $50

const configClinica = {
  nombre: "Clínica San Rafael",
  capacidad: 50,
  urgencias: true,
  maxPacientesDia: 100,
};

console.log("=== Configuración activa ===");
for (const clave in configClinica) {
  const valor = configClinica[clave as keyof typeof configClinica];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}
