// for-of.ts

const pacientes: string[] = ["Ana", "Luis", "Marta", "Carlos"];
const costosConsulta: number[] = [100, 250, 75, 320, 50];

// TypeScript sabe que 'paciente' es string
for (const paciente of pacientes) {
  console.log(`Hola, ${paciente}!`);
  // paciente.toUpperCase() ✅ — TypeScript sabe que es string
}

// TypeScript sabe que 'costo' es number
let totalConsulta: number = 0;
for (const costo of costosConsulta) {
  totalConsulta += costo;
  // costo.toFixed(2) ✅ — TypeScript sabe que es number
}
console.log(`Total: ${totalConsulta}€`);

// Con índice usando entries()
for (const [indice, paciente] of pacientes.entries()) {
  console.log(`${indice + 1}. ${paciente}`);
}

interface ItemReceta {
  medicamento: string;
  costo: number;
  cantidad: number;
}

const receta: ItemReceta[] = [
  { medicamento: "Ibuprofeno",  costo: 25, cantidad: 2 },
  { medicamento: "Amoxicilina", costo: 80, cantidad: 1 },
  { medicamento: "Paracetamol", costo: 200, cantidad: 3 },
];

let totalReceta = 0;
for (const item of receta) {
  const subtotal = item.costo * item.cantidad;
  console.log(`${item.medicamento}: $${subtotal}`);
  totalReceta += subtotal;
}
console.log(`TOTAL: $${totalReceta}`);  // TOTAL: $730

const temperaturas = [18, 22, 25, 30, 19, 27];
let max = 0;
for ( const temp of temperaturas) {
  if (temp>max){
    max=temp
  }
}
console.log(max);
