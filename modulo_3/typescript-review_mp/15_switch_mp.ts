// switch.ts

const diaConsulta: number = 3;

switch (diaConsulta) {
  case 1:
    console.log("Lunes: consulta general");
    break;
  case 2:
    console.log("Martes: cardiología");
    break;
  case 3:
    console.log("Miércoles: pediatría");  // ← este se ejecuta
    break;
  case 4:
    console.log("Jueves: dermatología");
    break;
  case 5:
    console.log("Viernes: traumatología");
    break;
  case 6:
  case 7:
    console.log("Fin de semana: solo urgencias");
    break;
  default:
    console.log("Día no válido");
}

// Switch con string
type EstadoCita = "pendiente" | "confirmada" | "atendida" | "cancelada";

function mensajeCita(estado: EstadoCita): string {
  switch (estado) {
    case "pendiente":
      return "Tu cita está pendiente de confirmación";
    case "confirmada":
      return "Tu cita ha sido confirmada";
    case "atendida":
      return "Tu consulta ya fue atendida";
    case "cancelada":
      return "Tu cita fue cancelada";
  }
}

// TypeScript sabe que los 4 casos son todos los posibles
// No necesita default — si añades un estado nuevo, exige manejarlo

console.log(mensajeCita("confirmada"));    // Tu cita ha sido confirmada
console.log(mensajeCita("atendida"));  // Tu consulta ya fue atendida
