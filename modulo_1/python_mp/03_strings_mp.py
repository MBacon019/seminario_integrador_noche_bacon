cadena_string = "Consulta", "General", "Hospital", "Central"
print(cadena_string)
print("Consulta", "General", "Hospital", "Central")
print("Consulta", "General", "Hospital", "Central", sep=",")
print("Recepcion", "Triaje", "Consulta", "Egreso", sep=" - ")
print("Recepcion", "Triaje", "Consulta", "Egreso", end="")
print("Recepcion", "Triaje", "Consulta", "Egreso", sep=" - ")
print("Recepcion", "Triaje", "Consulta", "Egreso", end=" | ")
print("Recepcion", "Triaje", "Consulta", "Egreso", end=" | ")


nombre_paciente = "Carlos Ruiz"
edad_paciente = 42
print(nombre_paciente, edad_paciente)
datos_consulta = f"Paciente: {nombre_paciente}, {edad_paciente} años"
print(datos_consulta)
print(f"Paciente: {nombre_paciente}, {edad_paciente} años")
print(f"Edad en meses de {nombre_paciente}: {edad_paciente * 12}")
print(f"{'Dra. Lopez':>15}")
temperatura = 38.75
print(f"{temperatura:.2f}")
print(f"{1000000:,}")
