print("Funciones en Python - Consultas Medicas")
print("Funcion basica")

def bienvenida():
    print("Bienvenido al sistema de consultas medicas")

bienvenida()
print("Funcion con parametros")

def registrar_paciente(nombre):
    print(f"Paciente {nombre} registrado correctamente")

registrar_paciente("Carlos Ruiz")
registrar_paciente("Elena Mora")


print("Funcion con retorno")
def calcular_imc(peso, altura):
    return peso / (altura ** 2)

print(calcular_imc(70, 1.70))

print("Funcion por posicion y por nombre")
def agendar_cita(paciente, especialidad, hora):
    print(f"Cita agendada para {paciente} - {especialidad} a las {hora}")
agendar_cita("Ana Torres", "Cardiologia", "10:00")
agendar_cita("Luis Vega", "Pediatria", "14:30")
agendar_cita(especialidad="Traumatologia", paciente="Pedro Salas", hora="09:00")

print("Funcion con valor por defecto")
def diagnostico(paciente, estado="en evaluacion", prioridad="normal"):
    print(f"Paciente {paciente} - Estado: {estado} - Prioridad: {prioridad}")
diagnostico("Maria Lopez", "fiebre alta", "urgente")
diagnostico("Jose Ruiz", prioridad="baja")
diagnostico("Clara Vega", "consulta rutinaria")

print("Funcion con parametros posicionales")
def sumar_costos(*args):
    print(f"Costos recibidos: {args}")
    return sum(args)
print(sumar_costos(30, 45, 60))
print(sumar_costos(25, 50, 75, 80, 90))
print(sumar_costos(100, 200))

print("Funcion con parametros combinados")
def resumen_consultas(doctor, *pacientes):
    print(f"Pacientes recibidos {pacientes}, Dr. {doctor}")
    print("Doctor:")
    for p in pacientes:
        print(f" - {p}")
print(resumen_consultas("Gomez", "Torres", "Mendez", "Vega"))

print("Funcion parametros clave valor variables")
def crear_ficha(**kwargs):
    print(f"Datos recibidos: {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")
crear_ficha(nombre="Ana Torres", edad=35, sangre="A+", alergias="ninguna")


print("Funcion parametros combinacion con todos los tipos")
def configurar_consulta(medico, *especialidades, urgente=False, **opciones):
    print(f"Configuracion de consulta")
    print(f"Medico: {medico}")
    print(f"Especialidades: {especialidades}")
    print(f"Opciones: {opciones}")
    print(f"Urgente: {urgente}")

configurar_consulta("Dr. Lopez", "Cardiologia", "Neurologia", urgente=True, turno=3, sala="B")


print("Funcion con multiples valores")
def rango_presion(mediciones):
    return min(mediciones), max(mediciones)

minima, maxima = rango_presion([120, 130, 115, 140, 110])

print(f"Presion minima: {minima}, Presion maxima: {maxima}")
_, maxima = rango_presion([120, 130, 115, 140, 110])
print(f"Presion maxima: {maxima}")
minima, _ = rango_presion([120, 130, 115, 140, 110])
print(f"Presion minima: {minima}")


print("Devolver diccionario en el caso de muchos valores")
def analizar_costos(costos):
    total = sum(costos)
    n = len(costos)
    return {"total": total,
"promedio": total / n if n > 0 else 0,
"minimo": min(costos) if costos else None,
"maximo": max(costos) if costos else None,
"cantidad": n}
consultas = [45, 60, 30, 75, 50]
stats = analizar_costos(consultas)
print(f"Total: {stats['total']}")
print(f"Promedio: {stats['promedio']}")
print(f"Rango: {stats['minimo']} - {stats['maximo']}")
print(f"Cantidad: {stats['cantidad']}")

print("Funciones lambda")
def doble_costo(precio):
    return precio * 2
duplicar = lambda x: x * 2
print(doble_costo(45))
print(duplicar)
