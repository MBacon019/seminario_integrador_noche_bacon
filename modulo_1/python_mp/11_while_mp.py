print("Ciclos while - Consultas Medicas")
print("while basico")

turno = 1
while turno <= 5:
    print(f"Llamando al paciente turno {turno}")
    turno += 1

especialidad = ""
while especialidad != "salir":
    especialidad = input("Buscar especialidad (salir para terminar): ")
    print("Buscando:", especialidad)

cantidad_consultas = int(input("Cuantas consultas registrar? "))
total = 0
contador = 1
while contador <= cantidad_consultas:
    costo = float(input(f"Costo de la consulta {contador}: "))
    total += costo
    contador += 1
print("Total acumulado:", total)
if total >= 200:
    print("Aplica descuento por volumen de consultas")
else:
    print("No aplica descuento")
