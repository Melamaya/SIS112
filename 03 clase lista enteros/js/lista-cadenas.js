class ListaCadena {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a.localeCompare(b)); // Orden alfabético
    }
}

let milista = new ListaCadena();
milista.agregar('hola')
milista.agregar('Mundo')
milista.agregar('UCB')
mostrarResultado ();

// retornar la cadena con mayor caracteres 
 
// var = let 
//-------------------------------------------
var a = milista.lista[0]
console.log (a);
var aCant = a.length;
console.log (aCant);
//-------------------------------------
var b = milista.lista[1]
console.log (b);
var bCant = b.length;
console.log (bCant);
//--------------------------------------------------------------
var c = milista.lista[2]
console.log (c);
var cCant = c.length;
console.log (cCant);
//------------------buscar el mayor --------------------------
var mayor =0;
if (aCant > mayor ){
    mayor = aCant ;
    posicion = 0;
}
//--------------------
if (bCant > mayor ){
    mayor = bCant ;
    posicion = 1;
}
//---------------
if (cCant > mayor ){
    mayor = cCant;
    posicion = 2;
}
// ----------------
console.log ('la mayor cantidad de caracteres tiene : '+ mayor);
console.log ('la cadena con mayor cantidad de caracteres es : '+milista.lista[posicion]);
//------------------------------------------

// realiza un ejercicio realizando for 
//for
var mayor = 0;
var posicion = -1;

for (var i = 0; i < milista.lista.length; i++) {
    var cadena = milista.lista[i];
    console.log(cadena);
    
    var cant = cadena.length;
    console.log(cant);

    // Comprobamos si la longitud actual es mayor que el valor anterior
    if (cant > mayor) {
        mayor = cant;
        posicion = i;
    }
}

console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + milista.lista[posicion]);
console.log(milista.lista);

function agregarValor() {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        milista.agregar(valor);
        mostrarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function eliminarValor() {
    const valor = document.getElementById('inputValor').value;
    if (valor) {
        milista.eliminar(valor);
        mostrarResultado();
        document.getElementById('inputValor').value = ''; // Limpiar input
    }
}

function buscarValor() {
    const valor = document.getElementById('inputValor').value;
    const resultado = milista.buscar(valor);
    document.getElementById('resultado').innerText = 
        resultado !== -1 ? `Encontrado en la posición: ${resultado}` : 'No encontrado';
}

function ordenarLista() {
    milista.ordenar();
    mostrarResultado();
}

function mostrarResultado() {
    document.getElementById('resultado').innerText = 
        `Lista: ${milista.lista.join(', ')}`;

}