from types import NoneType


MAX_CONSULTAS_DIA = 20
nombre_paciente = "JUAN PEREZ"
edad_paciente = 35
temperatura = 37.5
urgente = True
diagnostico = None

print(nombre_paciente, "tipo ", type(nombre_paciente))
print(edad_paciente, "tipo ", type(edad_paciente))
print(temperatura, "tipo ", type(temperatura))
print(urgente, "tipo ", type(urgente))
print(None, "tipo ", type(None))


nombre_doctor : str = "DRA. MARIA GOMEZ"
numero_historia : int = 10045
peso_paciente : float = 72.5
activo : bool = True
cita_pendiente : NoneType = None

print(nombre_doctor, "tipo ", type(nombre_doctor))
print(numero_historia, "tipo ", type(numero_historia))
print(peso_paciente, "tipo ", type(peso_paciente))
print(activo, "tipo ", type(activo))
print(cita_pendiente, "tipo ", type(cita_pendiente))
