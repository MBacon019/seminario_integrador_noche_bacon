class Temperatura {
  valorCelsius: number;
  valorFarenheit: number;

  constructor(celsius: number) {
    this.valorCelsius = celsius;
    this.valorFarenheit = celsius
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  aCelsius(): number {
    return this.valorFarenheit =  
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }

  describir(): string {
    return (
      `${this.valorFarenheit}°F = ` +
      `${this.acelsius()}°C = ` +
      `${this.aKelvin()}K`
    )
  }
}


const hervor = new Temperatura(100);
const congelacion = new Temperatura(0);



console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K


