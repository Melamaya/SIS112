class tank {
    posX;
    posY;
    direccionDisparo;
    vidas;

    constructor (_posX,_posY,_direccionDisparo,_vidas){
        this.posX=_posX;
        this.posY=_posY;
        this.direccionDisparo=_direccionDisparo;
        this.vidas=_vidas;
    }
    moveLeft(){

    }
    moveRight(){

    }
    moveUP(){

    }
    moveDown(){

    }
    rotarTank(_direccionDisparo){
        this.direccionDisparo=_direccionDisparo;
    }
}