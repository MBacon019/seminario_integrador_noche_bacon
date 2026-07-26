// condicionales.ts

const temperaturaCorporal: number = 38;

if (temperaturaCorporal > 39) {
  console.log("Fiebre alta");
} else if (temperaturaCorporal > 37.5) {
  console.log("Fiebre moderada");   // ← este se ejecuta
} else if (temperaturaCorporal > 37) {
  console.log("Febrícula");
} else {
  console.log("Temperatura normal");
}

// Con boolean
const requiereHospitalizacion: boolean = true;

if (requiereHospitalizacion) {
  console.log("Debe quedarse internado");
} else {
  console.log("Puede irse a casa");
}

// Con string
const rolPersonal: string = "medico";

if (rolPersonal === "medico") {
  console.log("Acceso total al historial");
} else if (rolPersonal === "enfermero") {
  console.log("Puede actualizar signos vitales");
} else {
  console.log("Solo lectura");
}
