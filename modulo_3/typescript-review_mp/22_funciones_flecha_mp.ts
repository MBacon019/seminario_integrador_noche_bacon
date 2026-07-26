// Concepto puro

// Declaración tradicional
function calcularPuntajeRiesgo(n: number): number {
  return n * n;
}

// Flecha equivalente — con cuerpo explícito
const calcularPuntajeRiesgoFlecha = (n: number): number => {
  return n * n;
};

// Flecha con retorno implícito (una expresión, sin llaves)
const calcularPuntajeRiesgoCorto = (n: number): number => n * n;

// Sin parámetros
const horaConsulta = (): string => new Date().toLocaleTimeString();

// Un solo parámetro (paréntesis opcionales, pero recomendados en TS)
const duplicarDosis = (n: number): number => n * 2;

console.log(calcularPuntajeRiesgo(5));       // 25
console.log(calcularPuntajeRiesgoFlecha(5)); // 25
console.log(calcularPuntajeRiesgoCorto(5));  // 25
console.log(duplicarDosis(7));          // 14
console.log(horaConsulta());           // e.g. "10:34:22"


const trim      = (s: string): string => s.trim();
const aMinusculas = (s: string): string => s.toLowerCase();
const capitalizar = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const quitarEspacios = (s: string): string => s.replace(/\s+/g, "_");

// Encadenar transformaciones manualmente
function normalizarNombrePaciente(nombre: string): string {
  return quitarEspacios(capitalizar(aMinusculas(trim(nombre))));
}

const entradas = ["  ANA GARCÍA  ", " luis rodríguez", "PEDRO  LÓPEZ "];
entradas.forEach((e) => console.log(normalizarNombrePaciente(e)));
// Ana_garcía
// Luis_rodríguez
// Pedro__lópez  (doble espacio interno → doble guión)
