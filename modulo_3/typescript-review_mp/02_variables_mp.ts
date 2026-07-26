// Con tipo explícito
const nombrePaciente: string  = "Ana";
const edadPaciente:   number  = 28;
const tieneCitaHoy: boolean = true;

// Sin tipo — TypeScript lo infiere automáticamente del valor
const nombrePaciente2 = "Ana";   // TypeScript sabe que es string
const edadPaciente2   = 28;      // TypeScript sabe que es number
const tieneCitaHoy2 = true;    // TypeScript sabe que es boolean
