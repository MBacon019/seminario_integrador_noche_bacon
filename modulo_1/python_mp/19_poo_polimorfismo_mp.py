# poo_polimorfismo_mp.py

# POLIMORFISMO POR HERENCIA — override de métodos
class InformeMedico:
    """Clase base abstracta."""
    def __init__(self, destinatario, contenido):
        self.destinatario = destinatario
        self.contenido    = contenido

    def enviar(self):
        raise NotImplementedError("Las subclases deben implementar enviar()")

    def __str__(self):
        return f"{self.__class__.__name__} → {self.destinatario}"

class InformeEmail(InformeMedico):
    def __init__(self, destinatario, contenido, asunto="Informe medico"):
        super().__init__(destinatario, contenido)
        self.asunto = asunto

    def enviar(self):
        return f"Email a {self.destinatario}: [{self.asunto}] {self.contenido}"

class InformeSMS(InformeMedico):
    MAX_CHARS = 160

    def enviar(self):
        msg = self.contenido[:self.MAX_CHARS]
        return f"SMS a {self.destinatario}: {msg}"

class InformeApp(InformeMedico):
    def enviar(self):
        return f"Notificacion App a {self.destinatario}: {self.contenido[:50]}..."

class InformeSlack(InformeMedico):
    def __init__(self, canal, contenido):
        super().__init__(canal, contenido)

    def enviar(self):
        return f"Slack #{self.destinatario}: {self.contenido}"

# Polimorfismo en accion — misma funcion, distintos tipos
def notificar_todos(informes: list):
    for informe in informes:
        print(f"  {informe.enviar()}")   # cada uno envia a su manera

alertas = [
    InformeEmail("ana.torres@hospital.com", "Resultados de analisis listos", "Analisis #5021"),
    InformeSMS("0991234567",               "Su turno es manana a las 10:00"),
    InformeApp("dispositivo-paciente",     "Dr. Lopez ha actualizado su diagnostico"),
    InformeSlack("alertas-medicos",        "Paciente Torres - signos vitales fuera de rango"),
]

print("Enviando informes medicos:")
notificar_todos(alertas)

# POLIMORFISMO DUCK TYPING — sin herencia
# "Si camina como un pato y grazna como un pato, es un pato"
class RegistroLocal:
    def leer(self):   return "historial desde sistema local"
    def escribir(self, datos): print(f"Guardando en sistema local: {datos[:40]}...")

class RegistroNube:
    def leer(self):   return "historial desde la nube medica"
    def escribir(self, datos): print(f"Sincronizando con nube: {datos[:40]}...")

class RegistroBD:
    def leer(self):   return "historial desde base de datos del hospital"
    def escribir(self, datos): print(f"Insertando en BD del hospital: {datos[:40]}...")

# Esta funcion funciona con CUALQUIER objeto que tenga leer() y escribir()
def procesar_historial(registro):
    contenido = registro.leer()
    print(f"Procesando: {contenido}")
    registro.escribir(f"actualizacion_{contenido}")

for registro in [RegistroLocal(), RegistroNube(), RegistroBD()]:
    procesar_historial(registro)
