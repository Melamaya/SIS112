class Enteros {
    // ATRIBUTO
    Num;
    //constructor = inicializa el objeto
    constructor(Numero) {
        this.Num=Numero
    }
    //class-cargar el valor de num
    SetNum(){
        const input =document.getElementById('numeroInput');
        this.Num=parseInt(input.value,10);
    }
    //class -obtener el valor de num
    getNum(){
      return this.Num;
    }
    //class -mostrar el vcalor de num
    showNum(){
        const resultadoDiv=document.getElementById("resultado");
        resultadoDiv.textContent=this.getNum();
    
    }
    showResultado(respuesta){
        const resultadoDiv=document.getElementById("resultado");
        resultadoDiv.textContent=respuesta;
    
    }
    incrementarNum(){
        this.Num =this.Num+1;
    }
    decrementarNum(){
        this.Num =this.Num-1;
    }
    esParImpar(){
        if(this.Num % 2 ==0){
            return true;

        }else{
            return false;
        }
    }
    esPositivoNegativo(){
        if(this.Num>0){
            return true;

        }else{
            return false;
        }

    }
}

        


//las funciones =button HTML
var ClaseEnteros=new Enteros(0);
//crear el objeto

function cargarNum(){
    ClaseEnteros.SetNum();

}
function mostrarNum(){
    ClaseEnteros.showNum();

}
function incrementarvalor(){
    ClaseEnteros.incrementarNum();
    ClaseEnteros.showNum();

}
function decrementarvalor(){
    ClaseEnteros.decrementarNum();
    ClaseEnteros.showNum();

}
function esParImparNum(){
    var respuesta = ClaseEnteros.esParImpar();
    var resp =respuesta ? "es num par":"es num impar"
    ClaseEnteros.showResultado(resp)
}
function esPositivoNegativoNum(){
    var respuesta = ClaseEnteros.esPositivoNegativo();
    var resp =respuesta ? "es num positivo":"es num negativo"
    ClaseEnteros.showResultado(resp)
}

