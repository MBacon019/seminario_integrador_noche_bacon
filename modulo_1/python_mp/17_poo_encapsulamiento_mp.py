# poo_encapsulamiento_mp.py

class HistorialMedico:
    def __init__(self, paciente, saldo_inicial=0):
        self.paciente       = paciente
        self.__saldo        = saldo_inicial     # __ → privado (name mangling)
        self.__diagnosticos = []
        self.__activo       = True
        self.__registrar(f"Historial creado con saldo inicial ${saldo_inicial}")

    # Property — getter (acceso como atributo, no como método)
    @property
    def saldo(self):
        return self.__saldo

    @property
    def activo(self):
        return self.__activo

    @property
    def diagnosticos(self):
        return list(self.__diagnosticos)   # devuelve copia, no referencia

    # Método público — la "ventanilla"
    def depositar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        self.__saldo += cantidad
        self.__registrar(f"Pago recibido: +${cantidad}")
        return self

    def cobrar_consulta(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        if cantidad > self.__saldo:
            raise ValueError(f"Saldo insuficiente (disponible: ${self.__saldo})")
        self.__saldo -= cantidad
        self.__registrar(f"Consulta cobrada: -${cantidad}")
        return self

    def agregar_diagnostico(self, origen, descripcion):
        self.cobrar_consulta(50)
        origen.__registrar_externo(f"Diagnostico enviado a {self.paciente}")
        self.__registrar(f"Diagnostico de {origen.paciente}: {descripcion}")
        return self

    # Método privado — solo para uso interno
    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__diagnosticos.append(f"[{hora}] {operacion}")

    def __registrar_externo(self, nota):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__diagnosticos.append(f"[{hora}] {nota}")

    def __str__(self):
        return f"Historial({self.paciente}: ${self.__saldo})"

# Uso
h1 = HistorialMedico("Ana Torres", 200)
h2 = HistorialMedico("Luis Mendez", 150)

h1.depositar(100).cobrar_consulta(50)     # encadenamiento
h1.agregar_diagnostico(h2, "Hipertension leve controlada")

print(h1)    # Historial(Ana Torres: ...)
print(h2)    # Historial(Luis Mendez: ...)
print(f"Saldo Ana: ${h1.saldo}")   # acceso como atributo (property)

# h1.__saldo = 99999  # AttributeError — acceso directo denegado
# h1.saldo = 99999    # AttributeError — no hay setter

for entrada in h1.diagnosticos:
    print(f"  {entrada}")
