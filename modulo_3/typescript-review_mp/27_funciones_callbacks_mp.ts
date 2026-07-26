// Concepto puro

// Tipo de función nombrado
type Transformador = (x: number) => number;
type Predicado     = (x: number) => boolean;

// Función que RECIBE una función (orden superior)
function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

// Función que DEVUELVE una función
function multiplicadorDe(factor: number): Transformador {
  return (x) => x * factor;
}

// Uso
const triple = multiplicadorDe(3);
const cuadrado: Transformador = (x) => x * x;

console.log(aplicar(5, triple));    // 15
console.log(aplicar(5, cuadrado)); // 25
console.log(aplicar(5, (x) => x + 10)); // 15 (lambda inline)

// Filtrar con un predicado tipado
function filtrarPacientes(edades: number[], condicion: Predicado): number[] {
  return edades.filter(condicion);
}

const edades = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filtrarPacientes(edades, (n) => n % 2 === 0)); // [2, 4, 6, 8]
console.log(filtrarPacientes(edades, (n) => n > 5));       // [6, 7, 8]

type Cita = { id: number; costo: number; paciente: string };
type ProcesadorCita = (cita: Cita) => Cita;

// Funciones que transforman una cita
const aplicarIVA: ProcesadorCita = (c) => ({
  ...c,
  costo: Number((c.costo * 1.19).toFixed(2)),
});

const aplicarDescuentoVIP = (descuento: number): ProcesadorCita =>
  (c) => ({ ...c, costo: Number((c.costo * (1 - descuento)).toFixed(2)) });

// Pipeline: aplica una lista de procesadores en orden
function procesarCita(cita: Cita, pasos: ProcesadorCita[]): Cita {
  return pasos.reduce((c, fn) => fn(c), cita);
}

const cita: Cita = { id: 101, costo: 100, paciente: "Ana" };

const resultado = procesarCita(cita, [
  aplicarDescuentoVIP(0.10),  // 10% descuento VIP → $90
  aplicarIVA,                 // + 19% IVA         → $107.10
]);

console.log(resultado);
// { id: 101, costo: 107.1, paciente: 'Ana' }
