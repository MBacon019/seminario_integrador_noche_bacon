// Concepto puro
class Medicamento {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  // Método: acción que puede realizar la instancia
  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.nombre} — $${this.precio} (${estado})`;
  }
}

const ibuprofeno = new Medicamento("Ibuprofeno 400mg", 12, true);
const amoxicilina = new Medicamento("Amoxicilina 500mg", 25, false);

console.log(ibuprofeno.describir()); // Ibuprofeno 400mg — $12 (disponible)
console.log(amoxicilina.describir()); // Amoxicilina 500mg — $25 (agotado)
