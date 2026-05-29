print("Match-case - Especialidades Medicas")
especialidad = input("Especialidad (cardiologia/pediatria/traumatologia): ")
match especialidad:
    case "cardiologia":
        print("Derivando a Cardiologia - Piso 3...")
    case "pediatria":
        print("Derivando a Pediatria - Piso 1...")
    case "traumatologia":
        print("Derivando a Traumatologia - Piso 2...")
    case _:
        print(f"Especialidad '{especialidad}' no disponible en este centro")


print("Match - con condiciones de prioridad")
prioridad = int(input("Nivel de urgencia (1-5): "))

match prioridad:
    case n if n <= 0:
        print(f"Nivel {n} no valido")
    case 1:
        print("Urgencia critica - atencion inmediata")
    case n if n == 2:
        print(f"Urgencia alta - espera maxima 15 minutos")
    case n:
        print(f"Urgencia nivel {n} - sala de espera general")
