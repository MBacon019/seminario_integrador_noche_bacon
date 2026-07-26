// Concepto puro
class ExpedienteMedico {
  readonly id: string;           // no cambia tras la creación
  public paciente: string;        // visible desde fuera
  private visitas: number;         // solo accesible dentro de la clase
  protected hospital: string;      // accesible también en subclases

  constructor(id: string, paciente: string, visitasIniciales: number) {
    this.id = id;
    this.paciente = paciente;
    this.visitas = visitasIniciales;
    this.hospital = "Clínica San Rafael";
  }

  // Método público que expone las visitas de forma controlada
  obtenerVisitas(): number {
    return this.visitas;
  }

  registrarVisita(cantidad: number): void {
    if (cantidad <= 0) throw new Error("Cantidad inválida");
    this.visitas += cantidad;
  }
}

const expediente = new ExpedienteMedico("EXP-001", "Ana García", 3);
console.log(expediente.paciente);         // Ana García
console.log(expediente.id);              // EXP-001
console.log(expediente.obtenerVisitas());  // 3
expediente.registrarVisita(2);
console.log(expediente.obtenerVisitas());  // 5

// expediente.visitas = 9999;  // Error: 'visitas' is private
// expediente.id = "otro";   // Error: 'id' is readonly
