cantidad = int(input(" Cuantos productos compro? "))
total = 0
contador = 1
while contador <= cantidad:
    precio =float(input(f"Precio del producto {contador+1}: "))
    total += precio
    contador += 1
print("Total :", total)
if total >= 100:
    print("aplica descuento")
else:
    print("no aplica descuento")


cantidad_empleados = int(input("Cuantos empleados va a registrar: "))
total_salarios = 0
contador = 1

while contador <= cantidad_empleados:
    salario = float(input(f"Ingrese el salario del empleado {contador}: "))
    total_salarios += salario
    contador += 1

print("Total pagado:", total_salarios)

if total_salarios > 1000:
    print("Gasto alto")
else:
    print("Gasto controlado")