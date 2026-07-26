# poo_clase_mp.py

class Paciente:
    # Atributo de clase — compartido por TODAS las instancias
    centro_medico = "Hospital Central"

    # __init__ es el constructor — se ejecuta al crear la instancia
    def __init__(self, nombre, edad):
        # Atributos de instancia — propios de cada objeto
        self.nombre = nombre
        self.edad   = edad

    # Método de instancia — self es la referencia al objeto
    def presentarse(self):
        return f"Soy el paciente {self.nombre} y tengo {self.edad} años."

    def cumplir_anios(self):
        self.edad += 1
        print(f"Feliz cumpleanos, {self.nombre}! Ahora tienes {self.edad} anos.")

    # __str__ — representación legible (para print y str())
    def __str__(self):
        return f"Paciente({self.nombre}, {self.edad})"

    # __repr__ — representación oficial (para depuración)
    def __repr__(self):
        return f"Paciente(nombre={self.nombre!r}, edad={self.edad!r})"

# Crear instancias (objetos) con la clase como función
ana  = Paciente("Ana Torres", 35)
luis = Paciente("Luis Mendez", 42)

print(ana.presentarse())       # Soy el paciente Ana Torres y tengo 35 años.
print(luis.presentarse())      # Soy el paciente Luis Mendez y tengo 42 años.
ana.cumplir_anios()            # Feliz cumpleanos, Ana Torres! Ahora tienes 36.
print(str(ana))                # Paciente(Ana Torres, 36)
print(repr(ana))               # Paciente(nombre='Ana Torres', edad=36)
print(Paciente.centro_medico)  # Hospital Central — atributo de clase
