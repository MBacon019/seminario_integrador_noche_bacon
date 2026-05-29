print("Manipulacion de listas - Consultas Medicas")
print("Crear una lista")
vacia = []
print(vacia)
turnos = [1, 2, 3, 4, 5]
print(turnos)
pacientes = ["Ana Torres", "Luis Mendez", "Clara Vega"]
print(pacientes)
ficha = [10045, "Carlos Ruiz", 38.5, True]
print(ficha)
historiales = [[1, "Torres"], [2, "Mendez"], [3, "Vega"]]
print(historiales)
print("Acceso a los elementos de una lista")
print(pacientes[1])
print(pacientes[-1])
print(pacientes[1:3])
print(pacientes[::-1])

print("Crud de listas")
medicamentos = ["Ibuprofeno", "Paracetamol", "Amoxicilina"]
# Agregar elementos
medicamentos.insert(3, "Metformina")
medicamentos.append("Aspirina")
print(medicamentos)
medicamentos.extend(["Losartan", "Atorvastatina"])
# modificar
medicamentos[0] = "Diclofenaco"
print(medicamentos)
# eliminar
medicamentos.remove("Paracetamol")
print(medicamentos)
eliminado = medicamentos.pop(2)
print(eliminado)
print(medicamentos)
del medicamentos[0]
print(medicamentos)


print("Buscar valores en una lista")
print("Amoxicilina" in medicamentos)
print(medicamentos.index("Aspirina"))
print(medicamentos.index("Aspirina"))

print("Ordenar en una lista")
costos_consulta = [75, 30, 90, 45, 60, 50]
print(costos_consulta)
costos_consulta.sort()
print(costos_consulta)
costos_consulta.sort(reverse=True)
print(costos_consulta)
ordenada = sorted(costos_consulta)
print(ordenada)
print(costos_consulta)
