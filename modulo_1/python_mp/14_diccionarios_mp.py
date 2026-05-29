print("Diccionarios - Consultas Medicas")
print("Crear un diccionario")
vacio = {}
paciente = {"nombre": "Ana Torres", "edad": 35, "especialidad": "Cardiologia"}
config = dict(medico="Dr. Lopez", consultorio=3, turno_activo=True)
# ACCESO
print(paciente["nombre"])
# modificar
paciente["nombre"] = "Ana Maria Torres"
print(paciente["nombre"])
del paciente["edad"]
print(paciente)
# verificar
print("nombre" in paciente)
print("especialidad" in paciente)
# metodos esenciales
print(paciente.keys())
print(paciente.values())
print(paciente.items())
# iterar
for clave, valor in paciente.items():
    print(f"{clave}: {valor}")
