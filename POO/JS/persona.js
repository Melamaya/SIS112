class Persona {
    constructor(nombre, edad, carrera,universidad) {
      this.nombre=nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
      this.Modificar_nombre=nombre;
      this.Modificar_edad = edad;
      this.Modificar_carrera = carrera;
      this.Modificar_universidad = universidad;
    }
  
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    }
  
    cumpleanios() {
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera ;
    }
    Universidad() {
      return 'estudia en ' + this.universidad;
    }
    Modificar_Saludo() {
      this.nombre =prompt("ingrese su nombre");
      this.edad=prompt("ingrese su edad","19");

      return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    }
    Modificar_cumpleanios() {
      this.edad=prompt("ingrese su edad","19");
      return '¡Felicidades! tienes ' + this.edad + ' años.'
    }
    Modificar_estudiar() {
      this.carrera =prompt("ingrese la carrera que esta estudiando ","Ingenieria industrial");
      return 'Estoy estudiando ' + this.carrera ;
       }
    Modificar_Universidad() {
      this.universidad =prompt("ingrese la universidad donde estudia o estudio","universidad Catolica Boliviana");
      return 'Estudia en  ' + this.universidad ;
    }
    eliminar_saludar() {
      return  ;
    }
    eliminar_cumpleanios() {
      return  ;
    }
    eliminar_estudiar() {
      return  ;
    }
    eliminar_universidad() {
      return  ;
    }
  
    
  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona('Mel', 19, 'Ingeniería industrial','en la universidad Catolica ');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad= document.getElementById('universidad');

  

  
  // Función para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }
   // Función para estudiar
   function botonUniversidad() {
    universidad.textContent = persona.Universidad();
  }

//Modificar

 // Función para saludar
  function botonModificar_Saludo() {
   saludar.textContent = persona.Modificar_Saludo();
}

// Función para cumpleaños
  function botonModificar_Edad() {
   edad.textContent = persona.Modificar_cumpleanios();
}

// Función para estudiar
  function botonModificar_Carrera() {
   carrera.textContent = persona.Modificar_estudiar();
}
 // Función para estudiar
  function botonModificar_Universidad() {
   universidad.textContent = persona.Modificar_Universidad();
}
// Función para saludar
function botoneliminar_Saludo() {
  saludar.textContent = persona.eliminar_saludar();
  }
// Función para saludar
function botoneliminar_Edad() {
  edad.textContent = persona.eliminar_cumpleanios();
  }
  // Función para saludar
function botoneliminar_Carrera() {
  carrera.textContent = persona.eliminar_estudiar();
  }
  // Función para saludar
function botoneliminar_Universidad() {
  universidad.textContent = persona.eliminar_universidad();
  }



