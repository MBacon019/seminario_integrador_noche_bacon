// Concepto puro
interface Paciente {
  readonly id: number;      // no se puede cambiar después de crear el objeto
  nombre: string;           // obligatoria
  email: string;            // obligatoria
  avatar?: string;          // opcional: puede estar o no
}

const p: Paciente = { id: 1, nombre: "Ana", email: "ana@mail.com" };

// p.id = 99; // ERROR: no se puede asignar a 'id' porque es de solo lectura

// La propiedad opcional puede omitirse sin error:
const p2: Paciente = { id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png" };

interface Medicamento {
  readonly codigo: string;
  nombre: string;
  precio: number;
  descripcion?: string;   // texto largo, no siempre presente
  disponible: boolean;
}

function mostrarMedicamento(m: Medicamento): void {
  const desc = m.descripcion ? ` — ${m.descripcion}` : "";
  const stock = m.disponible ? "Disponible" : "Agotado";
  console.log(`[${m.codigo}] ${m.nombre} $${m.precio}${desc} (${stock})`);
}

const ibuprofeno: Medicamento = {
  codigo: "IBU-001",
  nombre: "Ibuprofeno 400mg",
  precio: 12,
  descripcion: "Caja de 20 comprimidos",
  disponible: true,
};

const amoxicilina: Medicamento = {
  codigo: "AMX-042",
  nombre: "Amoxicilina 500mg",
  precio: 25,
  disponible: false,
};

mostrarMedicamento(ibuprofeno);
mostrarMedicamento(amoxicilina);

interface Medico {
  nombre: string;
  apellido: string;
  especialidad: string;
  sede: string;
}

function mostrarMedico(m: Medico): void {
  console.log(`${m.nombre} ${m.apellido} — ${m.especialidad} (${m.sede})`);
}

const med1: Medico = { nombre: "Marcelo", apellido: "Bacon", especialidad: "Cardiología", sede: "Quito" };
const med2: Medico = { nombre: "Ivan", apellido: "Arias", especialidad: "Dermatología", sede: "Guayaquil" };

mostrarMedico(med1);
mostrarMedico(med2);
