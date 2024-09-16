class Entero:
    def __init__(self,Numero):
        self.Num = Numero

    def setNum(self):
        input_value =input("enter a number")
        self.Num =int(input_value)
    
    def getNum(self):
        return self.Num
    
    def showNum (self):
        print(self.getNum())

    def showResultado(self,respuesta):
        print(respuesta)

    def incrementarNum (self):
        self.Num += 1

    def decrementarNum (self):
        self.Num -= 1 
    

    def esParImpar (self):
        return(self.Num% 2 == 0)
    
    def esPerfecto(self) :
        return sum( i for i in range (1, self.Num)if self.Num % i == 0) == self.Num
        
    
     
    
        
    
    def menu (self):
        while True:
            print("\nMenu:")
            print("1. establecer un nuevo numero")
            print("2.mostrar el numero actual")
            print("3.incrementar el numero")
            print("4.decrementar el numero")
            print("5. verificar si es par o impar")
            print("6.es perfecto")
            print("7.salir ")

            opcion=input("ingrese una opcion")
            if opcion == '1' :
                self.setNum()
            elif opcion == '2' :
                self.showNumNum()
            elif opcion == '3' :
                self.incrementarNum()
            elif opcion == '4' :
                self.decrementarNum()
            elif opcion == '5' :
                if self.esParImpar():
                    print("el numero es par ")
                else :
                    print("el numero es impar ")
            elif opcion == '6' :
                if self.esPerfecto():
                    print("el numero es perfecto ")
                else :
                    print("el numero no es  ")        
            elif opcion == '7':
                print("hasta luego")
                break
            else:
                print("opcion invalida,intente nuevamente")

numero=Entero(10)
numero.menu()
