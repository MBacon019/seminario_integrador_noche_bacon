// Concepto puro
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class Cita implements Serializable, Validable {
  constructor(
    public id: string,
    public sintomas: string[],
    public costo: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, sintomas: this.sintomas, costo: this.costo });
  }

  esValido(): boolean {
    return this.sintomas.length > 0 && this.costo > 0;
  }
}

const cita = new Cita("C-001", ["fiebre", "tos"], 150);
console.log(cita.esValido());    // true
console.log(cita.serializar());
// {"id":"C-001","sintomas":["fiebre","tos"],"costo":150}

interface RepositorioLectura<T> {
  buscarPorId(id: number): T | undefined;
  listarTodos(): T[];
}

interface RepositorioEscritura<T> {
  guardar(entidad: T): void;
  eliminar(id: number): boolean;
}

interface Repositorio<T> extends RepositorioLectura<T>, RepositorioEscritura<T> {}

interface PacienteEntidad {
  id: number;
  nombre: string;
}

class RepositorioPacientes implements Repositorio<PacienteEntidad> {
  private datos: PacienteEntidad[] = [];

  guardar(p: PacienteEntidad): void {
    this.datos.push(p);
  }

  eliminar(id: number): boolean {
    const idx = this.datos.findIndex((p) => p.id === id);
    if (idx === -1) return false;
    this.datos.splice(idx, 1);
    return true;
  }

  buscarPorId(id: number): PacienteEntidad | undefined {
    return this.datos.find((p) => p.id === id);
  }

  listarTodos(): PacienteEntidad[] {
    return [...this.datos];
  }
}

const repo = new RepositorioPacientes();
repo.guardar({ id: 1, nombre: "Ana" });
repo.guardar({ id: 2, nombre: "Luis" });
console.log(repo.buscarPorId(1));  // { id: 1, nombre: 'Ana' }
console.log(repo.listarTodos().length); // 2
repo.eliminar(1);
console.log(repo.listarTodos().length); // 1
