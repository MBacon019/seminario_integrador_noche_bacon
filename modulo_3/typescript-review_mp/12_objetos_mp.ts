// objetos.ts

// Declarar el tipo del objeto
const paciente: { nombre: string; edad: number; enTratamiento: boolean } = {
  nombre: "Ana García",
  edad:   28,
  enTratamiento: true
};

console.log(paciente.nombre);
console.log(paciente.edad);

// TypeScript avisa si falta una propiedad o tiene el tipo incorrecto
// const paciente2: { nombre: string; edad: number } = {
//   nombre: "Luis"
//   // ❌ Error: falta 'edad'
// };

// Propiedad opcional — se añade ? después del nombre
const consulta: { especialidad: string; costo: number; descuento?: number } = {
  especialidad:  "Dermatología",
  costo:  50
  // descuento es opcional, no hace falta incluirlo
};

console.log(consulta.descuento); // undefined — no se lanza error
