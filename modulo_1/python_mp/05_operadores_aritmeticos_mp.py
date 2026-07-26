print("Operadores aritmeticos en Consultas Medicas")

peso = float(input("Peso del paciente (kg): "))
altura = float(input("Altura del paciente (m): "))

imc = peso / (altura ** 2)
print("IMC:", imc)
print("Peso + 5kg hipotetico:", peso + 5)
print("Diferencia de peso:", peso - 60)
print("Precio consulta x 2 sesiones:", 45.50 * 2)
print("Minutos por sesion:", 90 // 4)
print("Minutos restantes:", 90 % 4)
