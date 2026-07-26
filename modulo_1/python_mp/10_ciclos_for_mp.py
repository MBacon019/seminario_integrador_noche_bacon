print("Ciclos for - Consultas Medicas")
print("for basico")

for i in range(1, 6):
    print(f"Turno de consulta #{i}")

pacientes = ["Ana Torres", "Luis Mendez", "Maria Vega", "Pedro Salas"]
for paciente in pacientes:
    print(paciente)

print("control de interrupciones")
for i in range(1, 10):
    if i == 3: continue
    if i == 7: break
    print(f"Consultorio {i} disponible")
else:
    print("Recorrido de consultorios terminado")

print("for con range step")
for i in range(8, 18, 2):
    print(f"Turno a las {i}:00 hs")

print("for con range regresivo")
for i in range(5, 0, -1):
    print(f"{i} pacientes en sala de espera")

print("for con enumerate")
medicamentos = {"Ibuprofeno", "Paracetamol", "Amoxicilina", "Metformina"}
for indice, medicamento in enumerate(medicamentos):
    print(indice, medicamento)

print("for con zip")
dosis = {500, 1000, 250, 850}
for medicamento, mg in zip(medicamentos, dosis):
    print(medicamento, mg, "mg")

print("for anidados")
for consultorio in range(1, 4):
    for hora in range(1, 4):
        print(f"Consultorio {consultorio} - Turno {hora}")


cantidad = int(input("Cuantas consultas registrar: "))
suma = 0

for i in range(1, cantidad + 1):
    costo = float(input(f"Costo consulta {i}: "))
    suma += costo

promedio = suma / cantidad
print("Costo promedio por consulta: ", promedio)

if promedio >= 50:
    print("Aplica plan de descuento mensual")
else:
    print("No aplica descuento")
