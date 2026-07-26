print("Ciclos for")
print("for basico")

for i in range(1,6):
    print(i)

frutas = ["manzana", "pera", "naranja", "platano"]
for fruta in frutas:
    print(fruta)

print("control de interrupciones")
for i in range(1,10):
    if i == 3: continue
    if i == 7: break
    print(i)
else:    print("terminado el ciclo")

print("for con range step")
for i in range(1,10,2):
    print(i)
 
print("for con range regresivo")
for i in range(10,0,-1):
    print(i)

print("for con enumerate")
nombres={"juan","luis","pedro","maria"}
for indice,nombres in enumerate(nombres):
    print(indice,nombres)
    
print("for con zip") #une las dos el zip tanto nombres como edades
edades={18,11,25,56}
for nombres, edad in zip(nombres,edades):
    print(nombres,edad)

print("for anidados")

for i in range(1,4):
    for x in range(1,4):
        print(i, x)   


cantidad = int(input("ingrese cantidad de notas"))
suma = 0

for i in range(1, cantidad + 1):
    nota = float(input(f"Nota {i} : "))
    suma += nota

promedio = suma / cantidad
print("Promedio: ", promedio)

if promedio >= 7:
    print("Aprobado")
else:
    print("Reprueba")    
     