print("Match-case")
comando = input("Comando iniciar/parar/reiniciar: ")
match comando:
    case "iniciar":
        print("Sistema iniciado...")
    case "parar":
        print("Sistema deteniendose...")
    case "reiniciar":
        print("Sistema reiniciando...")
    case _:
        print(f"Comando {comando} no valido")
        
        
print("Match - con condiciones")
numero = int(input("Incluya numero")) 

match numero:
    case n if n < 0:
        print(f"{n} es negativo")
    case 0:
        print("Es cero")
    case n if n % 2 == 0:
        print(f"el numero {n} es positivo y par")
    case n:
        print(f"El numero {n} es positivo e impar")