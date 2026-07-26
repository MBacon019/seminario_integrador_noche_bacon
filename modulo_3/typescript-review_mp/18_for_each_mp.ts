// Concepto puro
const numeroPacientes: number[] = [1, 2, 3, 4];

// forEach: para "hacer algo" con cada elemento
numeroPacientes.forEach((n) => console.log(n * 10));  // 10, 20, 30, 40

// map: para CREAR una lista transformada
const dobles: number[] = numeroPacientes.map((n) => n * 2);
console.log(dobles);  // [2, 4, 6, 8]

const correosPacientes: string[] = ["  ANA@MAIL.COM ", "Luis@Mail.com", " PEPE@MAIL.COM"];

const limpios: string[] = correosPacientes.map((e) => e.trim().toLowerCase());
console.log(limpios);  // ["ana@mail.com", "luis@mail.com", "pepe@mail.com"]

limpios.forEach((e, i) => console.log(`Paciente ${i + 1}: ${e}`));

const dosisN: number[] = [100, 250, 80, 500];
const conRecargo: number[] = dosisN.map((p) => Number((p * 1.19).toFixed(2)));
conRecargo.forEach((p) => console.log(p));


