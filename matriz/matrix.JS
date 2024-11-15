class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                var numeroRandom = Math.random();
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
        this.dibujarMatriz();
    }

    ///////////////////////////////
    
     /*

    // primera fila con 2, el resto 0
    llenarMatrizPrimeraFila(){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i==0){
                    this.matriz[i][j]= 2;
                }else{
                    this.matriz[i][j]= 0;
                }
                
            }
        }
        this.dibujarMatriz();
    }
 

    // Ejemplo 1: Patrón Aleatorio
    llenarMatrizAleatorio() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = Math.floor(Math.random() * 3); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }

    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
    llenarMatrizBordes2() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila o columna,
                // estamos en el borde exterior de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0;
                }
                // Si estamos en el borde del cuadrado interno, eliminamos ese borde asignando 0.
                else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 2;
                }
                // Si estamos dentro del cuadrado interno, asignamos 2.
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
    llenarMatrizCuatrobordes() {
        this.vaciarMatriz();
        const mitadCol = Math.floor(this.columnas /2);
        const mitadFila = Math.floor(this.filas /2);
        /// Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
                if(j ==mitadCol){
                    this.matriz[i][j]=2;
                }
                if(j ==mitadCol-1){
                    this.matriz[i][j]=2;
                }
                if(i ==mitadFila){
                    this.matriz[i][j]=2;
                }
                if(i ==mitadFila-1){
                    this.matriz[i][j]=2;
                }

            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
    llenarMatrizSecuencia1(){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                    
                this.matriz[i][j]= i % 3;
                    
                
            }
        }
        this.dibujarMatriz();
    }
    llenarMatrizSecuencia2(){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                    
                this.matriz[i][j]= j % 3;
                    
                
            }
        }
        this.dibujarMatriz();
    }

     llenarMatrizPiramide() {
        this.vaciarMatriz();
         // Calcular el centro de la matriz
         const centro = Math.floor(this.columnas / 2);
        
         // Altura de la pirámide (mitad de la matriz)
         const alturaPiramide = Math.floor(this.filas / 2);
        
         // Rellenar la pirámide
         for (let i = 0; i < alturaPiramide; i++) {
         // Calcular los límites de cada fila de la pirámide
         const inicio = centro - i;
         const fin = centro + i;
        
         for (let j = 0; j < this.columnas; j++) {
        if (j >= inicio && j <= fin) {
         this.matriz[i][j] = 2; // Dibujar la pirámide en la parte superior
         } else {
         this.matriz[i][j] = 0; // Resto en 0
                }
            }
         }
         this.dibujarMatriz();
         }



    //primera columna
    llenarMatrizPrimeraColumna(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j==0){
                    this.matriz[i][j]= 2;
                }else{
                    this.matriz[i][j]= 0;
                }
                
            }
        }
        this.dibujarMatriz();
    }

    //DIAGONA CONTRARIA
    llenarMatrizDiagonal2() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la suma de la posición de la fila (i) y la columna (j) es igual al tamaño de columnas - 1,
                // estamos en la diagonal inversa de la matriz. Asignamos 1 en esa posición.
                if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal inversa, la dibujamos
        this.dibujarMatriz();
    }
    llenarMatrizSecuencia_0_al_7(){
        this.vaciarMatriz();
        var puntero =0 ;
        for(let  i=0 ; i < this.filas; i++) {
            for(let j=0 ;j < this.columnas;j++){
            this.matriz[i][j]=puntero;
            if (puntero ==7){
                puntero=-1;
            }
            puntero =puntero+1;
            }
        }
        this.dibujarMatriz();
    }
    llenarMatrizSecuencia3(){
        this.vaciarMatriz();
        var puntero =7 ;
        for(let i = 0 ; i < this.filas; i++) {
            for(let j = 0 ;j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                if (puntero == 0){
                    puntero= 8;
                }
                puntero = puntero - 1;
            }
        }
        this.dibujarMatriz();
    }
    llenarMatrizSecuencia4(){
        this.vaciarMatriz();
        var intercambio ="disminuir";
        var puntero =7 ;
        for(let i = 0 ; i < this.filas; i++) {
            for(let j = 0 ;j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                //////////////
                if (intercambio == "disminuir"){
                    if (puntero == 0){
                        intercambio="incrementar"
                    }
                    puntero = puntero - 1;   
                }
                ////
                if (intercambio == "incrementar"){  
                    if (puntero ==7 ) {
                        puntero = puntero - 1; 
                        intercambio="disminuir"
                    }
                    puntero = puntero + 1; 
                }
                

            }
        }
        this.dibujarMatriz();
    }
    

    */
   ///Ejercicio 1 
   // Método para llenar toda la matriz con el valor 1
    CuadradoRelleno() {
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = 1;  // Rellenar cada celda con 1
        }
    }
    this.dibujarMatriz();  // Dibujar la matriz con los nuevos valores
    }
    ///Ejercicio 2
    // Método para crear un marco interno (filas y columnas exteriores con 0, interior con 1)
    MarcoInterno() {
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            // Si estamos en la primera o última fila o columna, dejamos 0
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 0;  // Fila o columna exterior con 0
            } else {
                this.matriz[i][j] = 1;  // Interior con 1
            }
        }
    }
    this.dibujarMatriz();  // Dibujar la matriz con el patrón generado
    }
    ///Ejercicio 3
    Cruces() {
        // Calcular la fila y columna central
        const filaCentral = Math.floor(this.filas / 2);
        const columnaCentral = Math.floor(this.columnas / 2);

        // Llenamos la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === filaCentral -1|| j === columnaCentral-1) {
                    this.matriz[i][j] = 1;  // Colocamos 1 en la fila y columna centrales
                } else {
                    this.matriz[i][j] = 0;  // Colocamos 0 en el resto
                }
            }
        }
        // Dibujar la matriz en el canvas
        this.dibujarMatriz();
    }
     ///Ejercicio 4
    BordesyDiagonales(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) { // Recorremos todas las filas
            for (let j = 0; j < this.columnas; j++) {
                // Rellenar los bordes exteriores con `1`s
                if (i === 0 || i === this.filas - 2 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // Rellenar las diagonales principales con `2`s (modificado según tu descripción)
                else if ((i === 2 && j === 2) ||  // Primer "2"
                         (i === 6 && j === 2) ||  // Segundo "2"
                         (i === 3 && j === 3) ||  // Tercer "2"
                         (i === 5 && j === 3) ||  // Cuarto "2"
                         (i === 4 && j === 4) ||  // Quinto "2"
                         (i === 3 && j === 6) ||  // Sexto "2"
                         (i === 5 && j === 6) ||  // Septimo "2"
                         (i === 2 && j === 7) ||  // Octavo "2"
                         (i === 6 && j === 7)) {  // Noveno "2"
                    this.matriz[i][j] = 2;
                }
                // Rellenar el resto con `0`s
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Colocar un único `1` en la fila 5, columna 2 desde la derecha (índice 1 desde el final)
        this.matriz[4][this.columnas - 2] = 1;
    
        // Rellenar la columna 5 desde la derecha (índice 4) con `0`s, excepto en los bordes
        for (let i = 1; i < this.filas - 3; i++) { // Evitamos los bordes superiores e inferiores
            this.matriz[i][this.columnas - 5] = 0;  // Columna 5 desde la derecha
        }
    
        // Línea 10 vacía con `0`s
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[9][j] = 0;
        }
    
        // Llamar al método para dibujar la matriz
        this.dibujarMatriz();
    }
    
    
     //EJERCICIO 5
     Bandera() {
        this.vaciarMatriz();
        const franja = Math.floor(this.filas / 3);
        for (let i = 0; i < this.filas; i++) {
            let valor;
            if (i < franja) valor = 1;
            else if (i < 2 * franja) valor = 2;
            else valor = 0;
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = valor;
            }
        }
        this.dibujarMatriz();
    }
    ///Ejercicio 6
    RellenoAlterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Alternar entre 1 y 0 para cada fila
                if (i % 2 === 0) {
                    this.matriz[i][j] = 1;  // Filas impares con 1
                } else {
                    this.matriz[i][j] = 0;  // Filas pares con 0
                }
            }
        }
        // Dibujar la matriz en el canvas
        this.dibujarMatriz();
    }
    ///Ejercicio 7
    ZigZagHorizontal() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            // Colocar un 1 en la columna i (hace el zig-zag)
            this.matriz[i][i] = 1;
        }
        // Dibujar la matriz en el canvas
        this.dibujarMatriz();
    }
    //EJERCICIO 8
    RellenoenEspiral() {
        this.vaciarMatriz();
        let row = 0;
        let col = 0;
        let direction = 0; 
        let steps = 1;
        let stepCount = 0;
    
        for (let i = 0; i < this.columnas * this.filas; i++) {
            this.matriz[row][col] = 1;
    
            stepCount++;
    
            if (stepCount === steps) {
                stepCount = 0;
                direction = (direction + 1) % 4;
                if (direction % 2 === 0) {
                    steps++;
                }
            }
    
            switch (direction) {
                case 0: 
                    if (col + 1 >= this.columnas) {
                        break; 
                    }
                    col++;
                    break;
                case 1:
                    if (row + 1 >= this.filas) {
                        break;
                    }
                    row++;
                    break;
                case 2: 
                    if (col - 1 < 0) {
                        break; 
                    }
                    col--;
                    break;
                case 3:
                    if (row - 1 < 0) {
                        break; 
                    }
                    row--;
                    break;
            }
        }
    
        this.dibujarMatriz();
    }

    ///Ejercicio 9
    TrianguloSuperiorIzquierdo() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i; j++) {
                this.matriz[i][j] = 1;  // Llenar las primeras i+1 columnas con 1
            }
        }

        // Dibujar la matriz en el canvas
        this.dibujarMatriz();
    }
    
    ///Ejercicio 10
    TrianguloInferiorDerecho() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = this.columnas - i - 1; j < this.columnas; j++) {
                this.matriz[i][j] = 1;  // Llenar las últimas columnas con 1
            }
        }

        // Dibujar la matriz en el canvas
        this.dibujarMatriz();
    }
    //EJERCICIO 11
    Cuadricula() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            if (i === this.filas - 1) {
                // Si estamos en la última fila, llenamos con ceros
                for (let j = 0; j < this.columnas; j++) {
                    this.matriz[i][j] = 0;
                }
            } else {
                // Alternamos entre filas llenas de 1 y bordes de 1
                for (let j = 0; j < this.columnas; j++) {
                    if (i % 2 === 0) {
                        this.matriz[i][j] = 1;
                    } else {
                        this.matriz[i][j] = (j === 0 || j === this.columnas - 1) ? 1 : 0;
                    }
                }
            }
        }
        // Después de llenar la matriz con el patrón de cuadrícula, la dibujamos
        this.dibujarMatriz();
    }
    //EJERCICIO 12
    TrianguloCentral() {
    this.vaciarMatriz();
        let mid = Math.floor(this.filas / 2);  // Encuentra la fila central
    
        // Rellenamos las filas para la pirámide, máximo 5 filas
        for (let i = 1; i <= 5; i++) {
            let start = mid - i + 1;  // Empieza a formar la pirámide desde el centro
            let end = mid + i - 1;    // Expande hacia los bordes
    
            // Rellenar con 1's entre el rango de start y end en la fila i
            for (let j = start; j <= end; j++) {
                this.matriz[i][j] = 1;
            }
        }
    
        this.dibujarMatriz();
    }
    //EJERCICIO 13
    RombosCentricos() {
        this.vaciarMatriz();
      // Definir el tamaño de la matriz
      let mid = Math.floor(this.filas / 2);  // Encuentra el centro de la matriz
    
      // Re this.vaciarMatriz();

    const centro = Math.floor(this.columnas / 2);
    const alturaPiramide = Math.floor(this.filas / 2);

    // Dibujar la pirámide en la mitad superior
    for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
        const inicio = centro - i;
        const fin = centro + i;

        for (let j = inicio; j <= fin; j++) {
            this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
        }
    }

    // Dibujar la pirámide invertida en la mitad inferior
    for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide invertida
        const inicio = centro - i;
        const fin = centro + i;

        for (let j = inicio; j <= fin; j++) {
            this.matriz[this.filas - 1 - i][j] = 1; // Dibujar la pirámide invertida en la parte inferior
        }
    }

    this.dibujarMatriz();
}
//EJERCICIO 14
CrucesCentricas() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas - 1; i++) { // Excluir la última fila
        for (let j = 0; j < this.columnas; j++) {
            if (
                i === 0 || i === this.filas - 2 || // Bordes superior e inferior
                j === 0 || j === this.columnas - 1 || // Bordes izquierdo y derecho
                i === j || i + j === this.filas - 2 // Diagonales principales
            ) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }
    // Última fila completamente de ceros
    for (let j = 0; j < this.columnas; j++) {
        this.matriz[this.filas - 1][j] = 0;
    }
    this.dibujarMatriz();
}

//EJERCICIO 15
BanderaDiagonal(){
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j <= i && j < this.columnas; j++) {
            this.matriz[i][j] = 1;
        }
    }
    this.dibujarMatriz();
}

CuadradodentrodeCuadrado() {
    this.vaciarMatriz();
    const bordeExterior = 0;
    const bordeInterior = 2;
    const limiteExterior = this.filas - 1;
    const limiteInterior = this.filas - 3;

    // Dibujar el cuadrado exterior con 1
    for (let i = bordeExterior; i <= limiteExterior; i++) {
        this.matriz[bordeExterior][i] = 1; // Lado superior
        this.matriz[limiteExterior][i] = 1; // Lado inferior
        this.matriz[i][bordeExterior] = 1; // Lado izquierdo
        this.matriz[i][limiteExterior] = 1; // Lado derecho
    }

    // Dibujar el cuadrado interior con 2
    for (let i = bordeInterior; i <= limiteInterior; i++) {
        this.matriz[bordeInterior][i] = 2; // Lado superior
        this.matriz[limiteInterior][i] = 2; // Lado inferior
        this.matriz[i][bordeInterior] = 2; // Lado izquierdo
        this.matriz[i][limiteInterior] = 2; // Lado derecho
    }

    this.dibujarMatriz();
}
    //EJERCICIO 17
    BordesyCentro() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (i >= 3 && i <= 6 && j >= 3 && j <= 6) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }
//EJERCICIO 18
LineasParalelas() { 
    this.vaciarMatriz();
   // Recorremos cada fila de la matriz
   for (let i = 0; i < this.filas; i++) {
    if (i === this.filas - 1) {
        // Si estamos en la última fila, llenamos con ceros
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = 0;
        }
    } else {
        // Alternamos entre filas llenas de 1 y bordes de 1
        for (let j = 0; j < this.columnas; j++) {
            if (i % 2 === 0) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = (j === 0 || j === this.columnas - 1) ? 1 : 0;
            }
        }
    }
}
// Después de llenar la matriz con el patrón de cuadrícula, la dibujamos
this.dibujarMatriz();
}
//EJERCICIO 19
MarcasdeCruz() {
    this.vaciarMatriz();
    const intervalo = 4; // Ajusta este valor para cambiar la separación entre las marcas de X
    for (let i = 0; i < this.filas; i += intervalo) {
        for (let j = 0; j < this.columnas; j += intervalo) {
            // Dibuja la cruz "X" en cada intervalo
            if (i < this.filas && j < this.columnas) {
                this.matriz[i][j] = 1; // Esquina superior izquierda
            }
            if (i + 1 < this.filas && j + 1 < this.columnas) {
                this.matriz[i + 1][j + 1] = 1; // Diagonal hacia abajo
            }
            if (i + 2 < this.filas && j + 2 < this.columnas) {
                this.matriz[i + 2][j + 2] = 1; // Diagonal hacia abajo
            }
            if (i + 3 < this.filas && j + 3 < this.columnas) {
                this.matriz[i + 3][j + 3] = 1; // Diagonal hacia abajo
            }
        }
    }

    this.dibujarMatriz();
}
//EJERCICIO 20
Rombosdeesquina() {
    this.vaciarMatriz();
    const tamRombo = 3; // Tamaño del rombo desde la esquina hacia el centro
    // Dibuja rombo en la esquina superior izquierda
    for (let i = 0; i <= tamRombo; i++) {
        for (let j = 0; j <= tamRombo - i; j++) {
            this.matriz[i][j] = 1;
            this.matriz[j][i] = 1;
        }
    }
    // Dibuja rombo en la esquina superior derecha
    for (let i = 0; i <= tamRombo; i++) {
        for (let j = 0; j <= tamRombo - i; j++) {
            this.matriz[i][this.columnas - 1 - j] = 1;
            this.matriz[j][this.columnas - 1 - i] = 1;
        }
    }
    // Dibuja rombo en la esquina inferior izquierda
    for (let i = 0; i <= tamRombo; i++) {
        for (let j = 0; j <= tamRombo - i; j++) {
            this.matriz[this.filas - 1 - i][j] = 1;
            this.matriz[this.filas - 1 - j][i] = 1;
        }
    }
    // Dibuja rombo en la esquina inferior derecha
    for (let i = 0; i <= tamRombo; i++) {
        for (let j = 0; j <= tamRombo - i; j++) {
            this.matriz[this.filas - 1 - i][this.columnas - 1 - j] = 1;
            this.matriz[this.filas - 1 - j][this.columnas - 1 - i] = 1;
        }
    }
    this.dibujarMatriz();
}

//EJERCICIO 21
RellenodeAjedrez() {
    this.vaciarMatriz();
    // Recorremos cada fila de la matriz
    for (let i = 0; i < this.filas; i++) {
        // Recorremos cada columna de la matriz
        for (let j = 0; j < this.columnas; j++) {
            // Alternamos entre `1` y `0` para crear el patrón de ajedrez
            if ((i + j) % 2 === 0) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }
    // Después de llenar la matriz con el patrón de ajedrez, la dibujamos
    this.dibujarMatriz();
}
//EJERCICIO 22
RelojdeArena() {
    this.vaciarMatriz();
    // Calcular el centro de la matriz
    const centro = Math.floor(this.columnas / 2);
    // Altura de la pirámide (mitad de la matriz)
    const alturaPiramide = Math.floor(this.filas / 2);

    // Rellenar el triángulo en la parte superior
    for (let i = 0; i < alturaPiramide; i++) {
        const inicio = i;
        const fin = this.columnas - i - 1;
        for (let j = 0; j < this.columnas; j++) {
            // Condición para evitar la diagonal
            if (j >= inicio && j <= fin && j !== this.columnas - i - 1) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }

    // Rellenar el triángulo invertido en la parte inferior
    for (let i = 0; i < alturaPiramide; i++) {
        const inicio = i;
        const fin = this.columnas - i - 1;
        const filaActual = this.filas - i - 1;
        for (let j = 0; j < this.columnas; j++) {
            // Condición para evitar la diagonal
            if (j >= inicio && j <= fin && j !== this.columnas - i - 1) {
                this.matriz[filaActual][j] = 1;
            } else {
                this.matriz[filaActual][j] = 0;
            }
        }
    }

    // Añadir el "1" en la primera fila y primera columna (contando desde la derecha)
    this.matriz[0][this.columnas - 1] = 1;

    // Añadir el "1" en la décima fila y primera columna contando desde la derecha
    this.matriz[this.filas - 1][this.columnas - 1] = 1;

    this.dibujarMatriz();
}





    

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;

        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#8e44ad"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e74c3c"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }
    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "50aa69"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#50aa69";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("3", x + ancho / 2, y + alto / 2);
    }
    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#6ca6b2";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("4", x + ancho / 2, y + alto / 2);
    }
    DibujarCinco(x, y, ancho, alto) {
        this.ctx.fillStyle = "#1d3235"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#1d3235";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("5", x + ancho / 2, y + alto / 2);
    }
    DibujarSeis(x, y, ancho, alto) {
        this.ctx.fillStyle = "#5c9da6"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#5c9da6";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("6", x + ancho / 2, y + alto / 2);
    }
    DibujarSiete(x, y, ancho, alto) {
        this.ctx.fillStyle = "#a65c78"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#a65c78";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("7", x + ancho / 2, y + alto / 2);
    }
    
}


