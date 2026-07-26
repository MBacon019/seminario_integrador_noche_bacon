# poo_abstraccion_mp.py
from abc import ABC, abstractmethod

# ABC (Abstract Base Class) — clase abstracta que no puede instanciarse
class Consulta(ABC):
    def __init__(self, paciente="sin asignar"):
        self.paciente = paciente

    # Método abstracto — CADA subclase DEBE implementarlo
    @abstractmethod
    def calcular_costo(self) -> float:
        pass

    @abstractmethod
    def duracion_minutos(self) -> int:
        pass

    # Método concreto — compartido por todos los tipos de consulta
    def describir(self) -> str:
        return (f"{self.__class__.__name__} - Paciente: {self.paciente}: "
                f"costo=${self.calcular_costo():.2f}, duración={self.duracion_minutos()} min")

# Consulta()  # TypeError — no puede instanciarse

class ConsultaGeneral(Consulta):
    def __init__(self, paciente, tiene_seguro=False):
        super().__init__(paciente)
        self.tiene_seguro = tiene_seguro

    def calcular_costo(self):
        base = 40.00
        return base * 0.7 if self.tiene_seguro else base

    def duracion_minutos(self):
        return 20

class ConsultaEspecialista(Consulta):
    def __init__(self, paciente, especialidad, tiene_seguro=False):
        super().__init__(paciente)
        self.especialidad  = especialidad
        self.tiene_seguro  = tiene_seguro

    def calcular_costo(self):
        base = 80.00
        return base * 0.75 if self.tiene_seguro else base

    def duracion_minutos(self):
        return 30

class ConsultaUrgencia(Consulta):
    def __init__(self, paciente, nivel_urgencia=1):
        super().__init__(paciente)
        self.nivel_urgencia = nivel_urgencia

    def duracion_minutos(self):
        return 15

    def calcular_costo(self):
        return 60.00 + (self.nivel_urgencia * 10)

# Polimorfismo — mismo código para cualquier Consulta
consultas = [
    ConsultaGeneral("Ana Torres", True),
    ConsultaEspecialista("Luis Mendez", "Cardiologia"),
    ConsultaUrgencia("Clara Vega", 2)
]

for consulta in consultas:
    print(consulta.describir())

costo_total = sum(c.calcular_costo() for c in consultas)
print(f"Costo total: ${costo_total:.2f}")
