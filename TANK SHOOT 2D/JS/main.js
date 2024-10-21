//seleccionamos el canvas y el contexto
const canvas=document.getElementById('gameCanvas');
const ctx = canvas .getContext('2d');

// funcion para ajustar el tamaño del canvas a la ventana
function resizeCanvas (){
    canvas.width =window.innerWidth * 0.9;
    canvas.height =window.innerHeight * 0.9;
}

// llamamos a la funcion al cargar la pagina 
resizeCanvas();

// ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize',resizeCanvas);


//CREAMOS UN OBJETO DE JUEGO
const game = new Game(canvas.width, canvas.height, "start");
 //creamos un tanque de jugador y un tanque enemigo 
const playerTank =new Tank (100,100,'up',3);
const enemyTank = new EnemyTank (500,100,'down',3);

//dibujamos los elementos en canvas 
function drawTank (tank){
    ctx.fillStyle = 'green';
    //representamos el tanque como un cuadro 
    ctx.fillRect (tank.posX,tank.posY,50,50);
}

function drawEnemyTank (enemyTank){
    ctx.fillStyle = 'red';
    //representamos el tanque como un cuadro 
    ctx.fillRect (enemyTank.posX,enemyTank.posY,50,50);
}
// logica del juego (actualizacion de la pantalla )
function updateGame (){
    //limpiamos el canvas en cada frame 
    ctx.clearRect(0,0, canvas.width,canvas.height);

    drawTank(playerTank); //dibujamos el tanque del jugador 
    drawEnemyTank(enemyTank);//dibujamos el tanque enemigo
     

    //resfrescar los graficos
    requestAnimationFrame(updateGame);
}
// iniciar el juego 
updateGame();