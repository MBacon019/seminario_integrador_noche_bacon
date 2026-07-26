// Concepto puro
class ApositoCircular {
  private _radio: number;

  constructor(radio: number) {
    this._radio = radio;
  }

  get radio(): number {
    return this._radio;
  }

  set radio(valor: number) {
    if (valor <= 0) throw new Error("El radio debe ser positivo");
    this._radio = valor;
  }

  get area(): number {
    return Math.PI * this._radio ** 2;
  }
}

const a = new ApositoCircular(5);
console.log(a.radio);          // 5   ← usa el getter
console.log(a.area.toFixed(2)); // 78.54

a.radio = 10;                  // usa el setter
console.log(a.area.toFixed(2)); // 314.16

// a.radio = -3;  // Error: El radio debe ser positivo
