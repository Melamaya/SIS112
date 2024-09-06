class Materia:
    #method -> constructor
    def __init__(self,nombre_materia,sigla,docente,horarios,aula,prerequisito,carrera,universidad,cantidad_inscrito):
        self.nombre_materia = nombre_materia
        self.sigla = sigla 
        self.docente = docente
        self.horarios= horarios 
        self.aula= aula
        self.prerequisito =prerequisito
        self.carrera=carrera
        self.universidad=universidad
        self.cantidad_inscrito= cantidad_inscrito
    def Materias (self):
        print(f"Mis materias del segundo semestre son:  {self.nombre_materia}")
    def Sigla (self):
        print(f"las siglas de estas materias son {self.sigla}")
    def Docentes (self):
        print(f"Los nombres de los docentes don :{self.docente}")
    def Horarios(self):
        print(f"Mis horarios de clase son :{self.horarios}")
    def Aula(self):
        print(f"Me toca en el aula:{self.aula}")
    def Prerequisito(self):
        print(f"tengo el prerequisito de :{self.prerequisito}")
    def Carrera(self):
        print(f"Estoy estudiando :{self.carrera}")
    def Universidad(self):
        print(f"Estoy estudiando en:{self.universidad}")
    def Inscritos (self):
        print(f"Estoy estudiando  inscrito en:{self.cantidad_inscrito}")
   
    #funcion modificar 
    def modificar_Materia(self):
        self.nombre_materia= str(input("ingrese su las materias "))
        if self.nombre_materia.isalpha():
            print(f"hola, mis materias son: {self.nombre_materia}")
        else:
            print("ingrese un valor correcto")
            
    def modificar_Sigla(self):
        self.sigla= str(input("ingrese su las materias "))
        if self.sigla.isalpha():
            print(f"hola, mis materias son: {self.sigla}")
        else:
            print("ingrese un valor correcto")
    
    def modificar_Docente(self):
        self.docente= str(input("ingrese la carrera que esta estudiando"))
        if self.docente.isalpha():
            print(f"Estoy estudiando {self.docente}")
        else:
            print("ingrese un valor correcto")
            
    def modificar_Horario(self):
        self.horarios= str(input("ingrese la universidad en la que estudia"))
        if self.horarios.isalpha():
            print(f"Estoy estudiando en {self.horarios}")
        else:
            print("ingrese un valor correcto")
    def modificar_Aula(self):
        self.aula= str(input("ingrese su las materias "))
        if self.aula.isalpha():
            print(f"hola, mis materias son: {self.aula}")
        else:
            print("ingrese un valor correcto")
    def modificar_Prerequisito(self):
        self.prerequisito= str(input("ingrese su las materias "))
        if self.prerequisito.isalpha():
            print(f"hola, mis materias son: {self.prerequisito}")
        else:
            print("ingrese un valor correcto")
    def modificar_Carrera(self):
        self.carreraa= str(input("ingrese su las materias "))
        if self.carrera.isalpha():
            print(f"hola, mis materias son: {self.carrera}")
        else:
            print("ingrese un valor correcto")
    def modificar_Universidad(self):
        self.universidad= str(input("ingrese su las materias "))
        if self.universidad.isalpha():
            print(f"hola, mis materias son: {self.universidad}")
        else:
            print("ingrese un valor correcto")
    def modificar_Inscritos(self):
        self.cantidad_inscrito= str(input("ingrese su las materias "))
        if self.cantidad_inscrito.isalpha():
            print(f"hola, mis materias son: {self.cantidad_inscrito}")
        else:
            print("ingrese un valor correcto")
    
    #FUNCIONES ELIMINAR
    def eliminar_Materia(self):
        if hasattr(self,'nombre_materia'):
            delattr(self,'nombre_materia')
            print("se elimino atributo 'nombre_materia'")
        else:
            print("el atributo 'nombre_materia' ya no existe o ha sido eliminado")
    
    def eliminar_Sigla(self):
        if hasattr(self,'sigla'):
            delattr(self,'sigla')
            print("se elimino atributo 'sigla'")
        else:
            print("el atributo 'edad' ya no existe o ha sido eliminado")
            
    def eliminar_Docente(self):
        if hasattr(self,'docente'):
            delattr(self,'docente')
            print("se elimino atributo 'docente'")
        else:
            print("el atributo 'carrera' ya no existe o ha sido eliminado")
    
    def eliminar_Horarios(self):
        if hasattr(self,'horarios'):
            delattr(self,'horarios')
            print("se elimino atributo 'horarios'")
        else:
            print("el atributo 'horarios' ya no existe o ha sido eliminado")
    def eliminar_Aula(self):
        if hasattr(self,'aula'):
            delattr(self,'aula')
            print("se elimino atributo 'aula'")
        else:
            print("el atributo 'aula' ya no existe o ha sido eliminado")
    def eliminar_Prerequisito(self):
        if hasattr(self,'prerequisito'):
            delattr(self,'prerequisito')
            print("se elimino atributo 'prerequisito'")
        else:
            print("el atributo 'prerequisito' ya no existe o ha sido eliminado")
    def eliminar_Carrera(self):
        if hasattr(self,'carrera'):
            delattr(self,'carrera')
            print("se elimino atributo 'carrera'")
        else:
            print("el atributo 'carrera' ya no existe o ha sido eliminado")
    def eliminar_Universidad(self):
        if hasattr(self,'universidad'):
            delattr(self,'universidad')
            print("se elimino atributo 'universidad'")
        else:
            print("el atributo 'universidad' ya no existe o ha sido eliminado")
    def eliminar_Inscritos (self):
        if hasattr(self,'cantidad_incritos'):
            delattr(self,'cantidad_incritos')
            print("se elimino atributo 'cantidad_incritos'")
        else:
            print("el atributo 'cantidad_incritos' ya no existe o ha sido eliminado")
    



        
    #crear una instancia de la clase persona
Materia1 = Materia(
    nombre_materia="Programacion 1 ",
    sigla="SIS111",
    docente="Eddy Escalante",
    horarios="lunes de 10-12 y viernes de 10-13",
    aula="laboratorio C2-2",
    prerequisito="Intro a progra",
    carrera="ingenieria Industrial",
    universidad="Catolica boliviana ",
    cantidad_inscrito="15",
)
Materia2 = Materia (
    nombre_materia="Calculo 1",
    sigla="Mat-132",
    docente="Victor Hugo Aspiazu",
    horarios="lunes de 7-9 y miercoles de 7-9",
    aula="10 Aula A-N4",
    prerequisito="Matematica Basica",
    carrera="Ingenieria Industrial",
    universidad="Catolica boliviana ",
    cantidad_inscrito="33",
)

Materia3 = Materia (
    nombre_materia="Manufactora y Mecanizado",
    sigla="IND-112",
    docente="Salvatierra Aranciabia Jorge Enrique",
    horarios="martes de 7-9 ,jueves  de 7-9 y viernes de 7-9",
    aula="10 Aula A-N4",
    prerequisito="Diseño indutrial",
    carrera="Ingenieria Industrial",
    universidad="Catolica boliviana ",
    cantidad_inscrito="14",
)
Materia4 = Materia (
    nombre_materia="fisica y laboratorio ",
    sigla="FIS-111",
    docente="victor Hugo Lobo Limpias",
    horarios="martes de 9-11 y miercoles 9-11",
    aula="E-2-5",
    prerequisito="Diseño indutrial",
    carrera="Ingenieria Industrial",
    universidad="Catolica boliviana ",
    cantidad_inscrito="45",
)
Materia5 = Materia (
    nombre_materia="Fisica y Laboratorio",
    sigla="IND-112",
    docente="Alvarez Caballero Roberto Carlos",
    horarios="miercoles de 11-12",
    aula="laboratorio de procesos",
    prerequisito="Diseño indutrial",
    carrera="Ingenieria Industrial",
    universidad="Catolica boliviana ",
    cantidad_inscrito="15",
)
Materia6 = Materia (
    nombre_materia="Antropologia y Valores ",
    sigla="FHC-101",
    docente="Gabriela Exalta",
    horarios="martes 9-11 y los jueves 9-11",
    aula="4 Aula A-N3",
    prerequisito="Diseño indutrial",
    carrera="Ingenieria Industrial",
    universidad="Catolica boliviana ",
    cantidad_inscrito="62",
)
Materia7 = Materia (
    nombre_materia="Probabilidad y estadistica",
    sigla="MAT-142",
    docente="Silvia Carmen Barca",
    horarios="martes de 11-12 y los jueves de 11-12",
    aula="laboratorio de Computo",
    prerequisito="Diseño indutrial",
    carrera="Ingenieria Industrial",
    universidad="Catolica boliviana ",
    cantidad_inscrito="33",
)

 #llamar metodos   
Materia1.Materias()
Materia1.Sigla ()
Materia1.Docentes()
Materia1.Horarios ()
Materia1.Aula()
Materia1.Prerequisito()
Materia1.Carrera()
Materia1.Universidad ()
Materia1.Inscritos ()
# llamar metodos de modificar
Materia1.modificar_Materia()
Materia1.modificar_Sigla()
Materia1.modificar_Docente()
Materia1.modificar_Horario ()
Materia1.modificar_Aula()
Materia1.modificar_Prerequisito()
Materia1.modificar_Carrera()
Materia1.modificar_Universidad ()
Materia1.modificar_Inscritos()
#llamar metodos de eliminar
Materia1.eliminar_Materia()
Materia1.eliminar_Sigla()
Materia1.eliminar_Docente()
Materia1.eliminar_Horarios ()
Materia1.eliminar_Aula()
Materia1.eliminar_Prerequisito()
Materia1.eliminar_Carrera()
Materia1.eliminar_Universidad ()
Materia1.eliminar_Inscritos ()
