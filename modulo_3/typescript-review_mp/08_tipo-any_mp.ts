// tipo-any.ts

let resultadoExamen: any = "negativo";
resultadoExamen = 42;        // ✅ sin error
resultadoExamen = true;      // ✅ sin error
resultadoExamen = [1, 2, 3]; // ✅ sin error

// Parece útil pero es trampa: pierdes el autocompletado
// y los errores vuelven a aparecer en tiempo de ejecución
console.log(resultadoExamen.metodoQueNoExiste()); // TypeScript no avisa, pero falla al ejecutar
