class TemperaturaPaciente {
  valorCelsius: number;

  constructor(celsius: number) {
    this.valorCelsius = celsius;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}


const esterilizacion = new TemperaturaPaciente(100);
const compresaHielo = new TemperaturaPaciente(0);



console.log(esterilizacion.describir());     // 100°C = 212°F = 373.15K
console.log(compresaHielo.describir()); // 0°C = 32°F = 273.15K

