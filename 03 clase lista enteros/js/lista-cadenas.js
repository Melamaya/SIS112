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
        this.lista.sort((a, b) => a - b); // Orden ascendente
    }
}
let milista = new ListaCadena ();
 milista.agregar('Hola');
 milista.agregar ('Mundo');
 console.log (milista.lista);// imprime :['hola', 'Mundo' ]