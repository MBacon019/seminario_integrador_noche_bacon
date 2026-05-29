# poo_herencia_mp.py

class PersonalMedico:
    def __init__(self, nombre, matricula, anio_ingreso):
        self.nombre       = nombre
        self.matricula    = matricula
        self.anio_ingreso = anio_ingreso
        self._consultas_hoy = 0    # _ → convención "protegido"

    def atender_paciente(self):
        self._consultas_hoy += 1
        return self

    def descansar(self):
        self._consultas_hoy = max(0, self._consultas_hoy - 1)
        return self

    def __str__(self):
        return f"{self.nombre} (Mat. {self.matricula}, {self.anio_ingreso}) — {self._consultas_hoy} consultas hoy"

class Medico(PersonalMedico):
    def __init__(self, nombre, matricula, anio_ingreso, especialidad="General"):
        super().__init__(nombre, matricula, anio_ingreso)   # llama al constructor del padre
        self.especialidad = especialidad

    def recetar(self):
        return f"Dr/a. {self.nombre} emite receta medica"

    def __str__(self):
        return f"{super().__str__()} ({self.especialidad})"

class Enfermero(PersonalMedico):
    def __init__(self, nombre, matricula, anio_ingreso, unidad):
        super().__init__(nombre, matricula, anio_ingreso)
        self.unidad = unidad

    def tomar_signos_vitales(self):
        return f"Enfermero/a {self.nombre} registra signos vitales"

    def __str__(self):
        return f"{super().__str__()} (Unidad: {self.unidad})"

class MedicoEspecialista(Medico):
    def __init__(self, nombre, matricula, anio_ingreso, especialidad, subespecialidad):
        super().__init__(nombre, matricula, anio_ingreso, especialidad)
        self.__subespecialidad = subespecialidad
        self.__certificaciones = 0

    def certificar(self, cantidad=1):
        self.__certificaciones += cantidad
        return self

    @property
    def perfil_especialista(self):
        return f"{self.especialidad} > {self.__subespecialidad} ({self.__certificaciones} cert.)"

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Subespecialidad: {self.__subespecialidad} | "
                f"Certificaciones: {self.__certificaciones}")

# Herencia — cada objeto es también de todos sus tipos padre
especialista = MedicoEspecialista("Ana Gomez", "M-1045", 2015, "Cardiologia", "Ecocardiografia")
especialista.atender_paciente().atender_paciente().certificar(3)
print(especialista)

print(isinstance(especialista, MedicoEspecialista))  # True
print(isinstance(especialista, Medico))              # True — herencia
print(isinstance(especialista, PersonalMedico))      # True — herencia transitiva
print(isinstance(especialista, Enfermero))           # False

# MRO — Method Resolution Order
print(MedicoEspecialista.__mro__)
