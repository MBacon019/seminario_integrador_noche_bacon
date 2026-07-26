print("Condicional if - Consultas Medicas")


print("if simple")
camas_disponibles = 3
if camas_disponibles > 0:
    print("Hay camas disponibles para internar al paciente")


print("if else - dos caminos")
saldo_paciente = 25
if saldo_paciente >= 50:
    print("Pago de consulta aprobado")
else:
    print("Saldo insuficiente para la consulta")


print("if multiples condiciones")
temperatura_paciente = 38.5
if temperatura_paciente < 37.0:
    print("Temperatura normal")
elif temperatura_paciente < 38.0:
    print("Temperatura levemente elevada")
else:
    print("Fiebre - requiere atencion medica")


print("if condiciones anidadas")
medico_disponible = True
turno_asignado = False

if medico_disponible:
    if turno_asignado:
        print("Paciente pasa a consulta")
    else:
        print("Turno no asignado, solicitar cita")
else:
    print("No hay medico disponible en este momento")


print("if con operadores logicos")
documento_identidad = True
pago_realizado = True
if documento_identidad and pago_realizado:
    print("Consulta confirmada")

es_emergencia = False
tiene_derivacion = True
if es_emergencia or tiene_derivacion:
    print("Paciente puede ser atendido de inmediato")

dado_de_alta = False
if not dado_de_alta:
    print("Paciente aun en seguimiento medico")
