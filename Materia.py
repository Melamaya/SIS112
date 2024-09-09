class Materia:
    #method -> constructor
    def __init__(self,nombre_materia,sigla,docente,horarios,aula,prerequisito,carrera,universidad,cantidad_inscrito,modalidad,calificacionminima,temas,ubicacion):
        self.nombre_materia = nombre_materia
        self.sigla = sigla 
        self.docente = docente
        self.horarios= horarios 
        self.aula= aula
        self.prerequisito =prerequisito
        self.carrera=carrera
        self.universidad=universidad
        self.cantidad_inscrito= cantidad_inscrito
        self.modalidad =modalidad
        self.calificacionminima =calificacionminima
        self.temas =temas
        self.ubicacion = ubicacion 
    def Informacion(self):
        print( f"\nMateria:  {self.nombre_materia}")
        print(f"Sigla {self.sigla}")
        print(f"Docente :{self.docente}")
        print(f"Horarios:{self.horarios}")
        print(f"Aula:{self.aula}")
        print(f"Prerequisito:{self.prerequisito}")
        print(f"Carrera:{self.carrera}")
        print(f"Universidad:{self.universidad}")
        print(f"Cantidad de inscritos:{self.cantidad_inscrito}")
        print(f"Modalidad:{self.modalidad}")
        print(f"Calificaion:{self.calificacionminima}")
        print(f"Temas:{self.temas}")
        print(f"Ubicacion :{self.ubicacion}")
   
    #funcion modificar 
    def modificar_Materia(self):
         while True:
            nuevo_nombre = input("Ingrese el nuevo nombre de la materia: ")
            if nuevo_nombre.strip() and " " not in nuevo_nombre:
                self.nombre = nuevo_nombre
                print("Nombre modificado exitosamente.")
                break
            else:
                print("El nombre no puede tener espacios en blanco.")
            
    def modificar_Sigla(self):
       while True:
            nueva_sigla = input("Ingrese la nueva sigla de la materia: ")
            if nueva_sigla.strip() and " " not in nueva_sigla:
                self.sigla = nueva_sigla
                print("Sigla modificada exitosamente.")
                break
            else:
                print("La sigla no puede tener espacios en blanco.")

    def modificar_Docente(self):
        while True:
            nuevo_docente = input("Ingrese el nombre del nuevo docente: ")
            if nuevo_docente.replace(" ", "").isalpha():
                self.docente = nuevo_docente
                print("Docente modificado exitosamente.")
                break
            else:
                print("Nombre de docente inválido. Ingresa solo letras y sin números.")

            
    def modificar_Horario(self):
           while True:
            nuevo_horario = input("Ingrese los nuevos horarios (separados por comas): ")
            horarios_lista = [horario.strip() for horario in nuevo_horario.split(",")]
            if all(horario and " " not in horario for horario in horarios_lista):
                self.horarios = horarios_lista
                print("Horarios modificados exitosamente.")
                break
            else:
                print("Cada horario debe ser una cadena sin espacios en blanco.")
    def modificar_Aula(self):
          while True:
            nueva_aula = input("Ingrese el nuevo aula: ")
            if nueva_aula.strip() and " " not in nueva_aula:
                self.aula = nueva_aula
                print("Aula modificada exitosamente.")
                break
            else:
                print("El aula no puede tener espacios en blanco.")
    def modificar_Prerequisito(self):
          while True:
            nuevo_prerequisito = input("Ingrese el nuevo prerequisito: ")
            if nuevo_prerequisito.strip() and " " not in nuevo_prerequisito:
                self.prerequisito = nuevo_prerequisito
                print("Prerequisito modificado exitosamente.")
                break
            else:
                print("El prerequisito no puede tener espacios en blanco.")

    def modificar_Carrera(self):
       while True:
            nueva_carrera = input("Ingrese la nueva carrera: ")
            if nueva_carrera.replace(" ", "").isalpha():
                self.carrera = nueva_carrera
                print("Carrera modificada exitosamente.")
                break
            else:
                print("Nombre de carrera inválido. Ingresa solo letras y sin números.")

    def modificar_Universidad(self):
        while True:
            nueva_universidad = input("Ingrese la nueva universidad: ")
            if nueva_universidad.replace(" ", "").isalpha():
                self.universidad = nueva_universidad
                print("Universidad modificada exitosamente.")
                break
            else:
                print("Nombre de universidad inválido. Ingresa solo letras y sin números.")

    def modificar_Inscritos(self):
       while True:
            try:
                nueva_cantidad = int(input("Ingrese la nueva cantidad de inscritos: "))
                if nueva_cantidad > 0:
                    self.cantidad_inscritos = nueva_cantidad
                    print("Cantidad de inscritos modificada exitosamente.")
                    break
                else:
                    print("La cantidad debe ser un número positivo.")
            except ValueError:
                print("La cantidad debe ser un número entero.")
    def modificar_Modalidad(self):
        while True:
            nuevo_modalidad = input("Ingrese la nueva modalidad nuevo docente: ")
            if nuevo_modalidad.replace(" ", "").isalpha():
                self.docente = nuevo_modalidad
                print("Modalidad modificado exitosamente.")
                break
            else:
                print("Modalidad inválida. Ingresa solo letras y sin números.")
    def modificar_Calificacion(self):
        self.calificacionminima += 1 
        self.calificacionminima=int(input("ingrese su calificaion"))
        if self.calificacionminima > 60 < (self.calificacionminima) <= 100 :
            print(f"Tu calificacion es {self.calificacionminima}")
        else:
            print("Ingrese una nota válida")
    def modificar_Temas(self):
        while True:
            nuevo_temas = input("Ingrese la nueva modalidad nuevo docente: ")
            if nuevo_temas.replace(" ", "").isalpha():
                self.temas = nuevo_temas
                print("tema modificado exitosamente")
                break
            else:
                print("tema  inválida. Ingresa solo letras y sin números.")
    
    def modificar_Ubicacion (self):
        self.ubicacion += 1 
        self.ubicacion=float(input("ingrese su ubicaion en latitud y longitud"))
        print(f"Tu ubicacion es: {self.ubicacion}")

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
    def eliminar_Modalidad (self):
        if hasattr(self,'modalidad'):
            delattr(self,'modalidad')
            print("se elimino atributo 'modalidad'")
        else:
            print("el atributo 'modalidad' ya no existe o ha sido eliminado")
    def eliminar_Calificacion (self):
        if hasattr(self,'calificacionminima'):
            delattr(self,'cantidadminima')
            print("se elimino atributo 'calificacionminima'")
        else:
            print("el atributo 'calificacionminima' ya no existe o ha sido eliminado")
    def eliminar_Temas (self):
        if hasattr(self,'temas'):
            delattr(self,'temas')
            print("se elimino atributo 'temas'")
        else:
            print("el atributo 'temas' ya no existe o ha sido eliminado")
    def eliminar_Ubicacion (self):
        if hasattr(self,'ubicacion'):
            delattr(self,'ubicacion')
            print("se elimino atributo 'ubicacion'")
        else:
            print("el atributo 'temas' ya no existe o ha sido eliminado")
     # Métodos generales
    def modificar_atributo(self, atributo):
        funciones_modificar = {
            "nombre": self.modificar_nombre,
            "sigla": self.modificar_sigla,
            "docente": self.modificar_docente,
            "horarios": self.modificar_horarios,
            "aula": self.modificar_aula,
            "prerequisito": self.modificar_prerequisito,
            "carrera": self.modificar_carrera,
            "universidad": self.modificar_universidad,
            "cantidad_inscritos": self.modificar_cantidad_inscritos,
            "modalidad": self.modificar_modalidad,
            "calificacion": self.modificar_calificacion,
            "temas": self.modificar_temas,
            "ubicacion": self.modificar_ubicacion

        }
        funcion = funciones_modificar.get(atributo)
        if funcion:
            funcion()
        else:
            print("dato no válido para modificar.")

    def eliminar_atributo(self, atributo):
        funciones_eliminar = {
            "nombre": self.eliminar_nombre,
            "sigla": self.eliminar_sigla,
            "docente": self.eliminar_docente,
            "horarios": self.eliminar_horarios,
            "aula": self.eliminar_aula,
            "prerequisito": self.eliminar_prerequisito,
            "carrera": self.eliminar_carrera,
            "universidad": self.eliminar_universidad,
            "cantidad_inscritos": self.eliminar_cantidad_inscritos,
            "modalidad": self.eliminar_modalidad,
            "calificacion": self.eliminar_calificacion,
            "temas": self.eliminar_temas,
            "ubicacion": self.eliminar_ubicacion

        }
        funcion = funciones_eliminar.get(atributo)
        if funcion:
            funcion()
        else:
            print("dato no válido para eliminar.")



        
    #crear una instancia de la clase persona
Materia1 = Materia (
    nombre_materia="Programacion 1 ",
    sigla="SIS111",
    docente="Eddy Escalante",
    horarios="lunes de 10-12 y viernes de 10-13",
    aula="laboratorio C2-2",
    prerequisito="Intro a progra",
    carrera="ingenieria Industrial",
    universidad="Catolica boliviana ",
    cantidad_inscrito="15",
    modalidad="presencial",
    calificacionminima="60",
    temas="",
    ubicacion="-17.695191,-63.1514697",
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
     modalidad="presencial",
    calificacionminima="60",
    temas="",
    ubicacion="-17.695191,-63.1514697",
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
     modalidad="presencial",
    calificacionminima="60",
    temas="",
    ubicacion="-17.695191,-63.1514697",
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
     modalidad="presencial",
    calificacionminima="60",
    temas="",
    ubicacion="-17.695191,-63.1514697",
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
     modalidad="presencial",
    calificacionminima="60",
    temas="",
    ubicacion="-17.695191,-63.1514697",
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
    cantidad_inscrito="62", modalidad="presencial",
    calificacionminima="60",
    temas="",
    ubicacion="-17.695191,-63.1514697",
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
     modalidad="presencial",
    calificacionminima="60",
    temas="",
    ubicacion="-17.695191,-63.1514697",
)
## Lista de materias
materias = [Materia1, Materia2, Materia3, Materia4, Materia5, Materia6, Materia7]

def mostrar_menu_materias():
    print("\nSeleccione una materia para modificar o eliminar:")
    for i, materia in enumerate(materias):
        print(f"{i+1}. {materia.nombre_materia}")

def mostrar_menu_atributos():
    print("\nSeleccione el atributo que desea modificar o eliminar:")
    print("1. Nombre")
    print("2. Sigla")
    print("3. Docente")
    print("4. Horarios")
    print("5. Aula")
    print("6. Prerequisito")
    print("7. Carrera")
    print("8. Universidad")
    print("9. Cantidad inscritos")
    print("10. Modalidad")
    print("11. Calificaion minima")
    print("12. Temas")
    print("13. Ubicacion")

def modificar_o_eliminar():
    while True:
        mostrar_menu_materias()
        try:
            opcion_materia = int(input("\nIngrese el número de la materia que desea modificar/eliminar: ")) - 1
            if 0 <= opcion_materia < len(materias):
                materia_seleccionada = materias[opcion_materia]
                materia_seleccionada.Informacion()

                while True:
                    mostrar_menu_atributos()
                    opcion_atributo = int(input("Seleccione el atributo a modificar/eliminar (1-13): "))
                    if 1 <= opcion_atributo <= 13 :
                        atributos = ["nombre", "sigla", "docente", "horarios", "aula", "prerequisito", "carrera", "universidad", "cantidad_inscritos","modalidad","calificaion","temas","ubicacion"]
                        atributo = atributos[opcion_atributo - 1]

                        accion = input(f"¿Desea modificar o eliminar {atributo}? (modificar/eliminar): ").lower()
                        if accion == "modificar":
                            materia_seleccionada.modificar_atributo(atributo)
                        elif accion == "eliminar":
                            materia_seleccionada.eliminar_atributo(atributo)
                        else:
                            print("Acción no válida. Intente de nuevo.")

                        continuar_atributo = input("¿Desea modificar/eliminar otro atributo de esta materia? (si/no): ").lower()
                        if continuar_atributo != 'si':
                            break
                    else:
                        print("Opción no válida. Intente de nuevo.")

                continuar_materia = input("¿Desea modificar/eliminar atributos de otra materia? (si/no): ").lower()
                if continuar_materia != 'si':
                    break
            else:
                print("Opción de materia no válida. Intente de nuevo.")
        except ValueError:
            print("Entrada inválida. Por favor, ingrese un número.")

# Mostrar información inicial de todas las materias
print("Información inicial de las materias:")
for materia in materias:
    materia.Informacion()

# Iniciar el menú interactivo
modificar_o_eliminar()

# Mostrar información actualizada de todas las materias
print("\nInformación actualizada de las materias:")
for materia in materias:
    materia.Informacion()