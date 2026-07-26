// Concepto puro
type ID = string | number;           // unión de primitivos
type NombrePaciente = string;                // alias de primitivo (documenta intención)
type Coordenadas = [number, number]; // alias de tupla (presión sistólica, diastólica)

// Alias de objeto
type Ubicacion = {
  piso: number;
  habitacion: number;
};

const presionArterial: Coordenadas = [120, 80];
const camaPaciente: Ubicacion = { piso: 3, habitacion: 12 };
const id: ID = 42;          // válido
const id2: ID = "pac-001";  // también válido

type TicketID = string | number;
type Prioridad = "baja" | "media" | "alta" | "critica";

type Consulta = {
  id: TicketID;
  titulo: string;
  prioridad: Prioridad;
  resuelta: boolean;
};

function imprimirConsulta(c: Consulta): void {
  const estrella = c.prioridad === "critica" ? " ⚠️" : "";
  console.log(`[${c.id}] ${c.titulo} — ${c.prioridad}${estrella}`);
}

const c1: Consulta = { id: "C-001", titulo: "Dolor torácico",  prioridad: "critica", resuelta: false };
const c2: Consulta = { id: 42,      titulo: "Control de rutina", prioridad: "baja",    resuelta: true  };

imprimirConsulta(c1); // [C-001] Dolor torácico — critica ⚠️
imprimirConsulta(c2); // [42] Control de rutina — baja
