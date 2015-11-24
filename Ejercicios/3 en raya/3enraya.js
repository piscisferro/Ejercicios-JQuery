var turnoJugador; // Variable booleana para controlar el turno del jugador
var contadorCeldas = 0; // Variable para llevar la cuenta de las celdas jugadas


$(document).ready(function() {
    
    // Le damos la funcion click a todas las celdas
    for( var i = 1; i <= $("#tablero").children().length; i++) {
        $("#celda" + i).on("click", ponerCirculo);
    }
    
    // Le damos la funcion comenzar al boton comenzar
    $("#comenzar").on('click', comenzar);
    
    // Inicializamos variables
    var contadorCeldas = 0;
    turnoJugador = false;
    
});


// Funcion para comenzar el juego al darle al boton comenzar
function comenzar() {
    
    // Hacemos un 50% para ver quien empieza
    var random = randomRange(0,10);
    
    // Si el resultado es menor a 5 la maquina empieza
    if(random < 5) {
        // Ponemos a false el turno del jugador y actualizamos el mensaje de quien es el turno
        turnoJugador = false;
        $("#turno").html("Es el turno de la Maquina");
        // Turno de la maquina
        setTimeout(maquina, 1000);
    } else {
        // Es el turno del jugador y actualizamos el mensaje de quien es el turno
        turnoJugador = true;
        $("#turno").html("Es el turno del jugador");
        
    }  
}

// Funcion poner ciruclo en el Div cliqueado
function ponerCirculo() {
    
    // Si las celdas estan llenas
    if (contadorCeldas == 9) {
        gameOver();
        return;
    }
    
    // Si es el turno del jugador
    if (turnoJugador) {
        // Pintamos el circulo
        $(this).html("<span>O</span>");
        // Le damos la clase de circulo a la capa
        $(this).addClass("O");
        // Le quitamos la clase Libre
        $(this).removeClass("libre");
        // Le desactivamos la capacidad de dar click
        $(this).off("click");

        // Ponemos a false el turno del jugador y actualizamos el mensaje de quien es el turno
        turnoJugador = false;
        $("#turno").html("Es el turno de la Maquina");
        
        // Incrementamos el contador de celdas
        contadorCeldas++;
        
        // Comprobamos si ha ganado
        compruebaGanador("jugador");
        
        // Lanzamos la funcion de la maquina con 500ms de retardo, para que no sea instantanea
        setTimeout(maquina, 1000);
        
    } 
}

// IA primitiva para la maquina
function maquina() {
    
    // Si las celdas estan llenas
    if (contadorCeldas == 9) {
        gameOver();
        return;
    }
    
    // Sacamos un aleatorio para poner la X de la maquina
    var ponerX = randomRange(1, 9);
    
    // Si la celda donde quiere poner la X esta libre..
    if ($("#celda" + ponerX).hasClass("libre")) {
        
        // Ponemos la X
        $("#celda" + ponerX).html("<span>X</span>");
        // Borramos la clase libre del div
        $("#celda" + ponerX).removeClass("libre");
        // Le añadimos la clase X
        $("#celda" + ponerX).addClass("X");
        // Le desactivamos la funcion de click
        $("#celda" + ponerX).off("click");
        
        // Incrementamos el contador de celdas
        contadorCeldas++;
        
        // Comprobamos si ha ganado
        compruebaGanador("maquina");
        
        // Es el turno del jugador y actualizamos el mensaje de quien es el turno
        turnoJugador = true;
        $("#turno").html("Es el turno del jugador");
        
    } else { // En el caso de que la celda elegida no este libre
        // Repetimos la funcion hasta que encuentre una libre
        maquina();
    }
}


// Funcion para finalizar el juego.

// Optional Param celda = Integer (Celda por la cual empezara la animacion de la raya)
// Optional Param ganador = "X", "O", none (el Ganador del juego)
// Optional Param direccion = "hor", "ver", "dia" (direccion de la linea)
function gameOver(celda, direccion, ganador) {
    
    // Si hay algo en celda le damos el valor de celda, sino, 0.
    celda = celda || 0;
    
    // Le damos a la variable direccion el valor direccion (si pasamos algo por parametro) 0 (si no hay nada)
    direccion = direccion || 0;
    
    // Le damos a la variable el ganador dependiendo si pasamos por parametros, X, O u otra cosa o nada.
    ganador = (ganador=="X")?"Maquina":(ganador=="O")?"Jugador":"Ninguno";
    
    // Hacemos visible la capa GameOver con flex. E imprimimos el mensaje
    $("#gameOver").css("display", "-webkit-flex");
    $("#gameOver").html("GAME OVER! " + ganador + " Ha Ganado");
    
    
    // AQUI VA EL CODIGO DE LA LINEA. PARA PINTARLA COGEREMOS LA DIRECCION Y LA 
    // CELDA DONDE EMPEZARA. CON UNA IMAGEN HAREMOS LA ANIMACION DE IZQUIERDA A DERECHA
    // EN CASO DE HORIZONTAL Y DE ARRIBA A ABAJO EN CASO VERTICAL. PARA LA DIAGONAL NECESITAREMOS
    // CREAREMOS UNA CAPA CON LA LINEA YA PINTADA EN LOS 500PX EN DIAGONAL
    
    
    
    
    
    
    
}

// Funcion para comprobar si hay algun ganador
// Param jugador = jugador, maquina (el jugador que se quiere comprobar)
function compruebaGanador(jugador) {
    
    jugador = (jugador=="jugador")?"O":"X";
    
    // Comprobacion horizontal
    for (var i = 1; i < 9; i+=3) {
        var aux = i; // Variable Auxiliar para incrementar
        if ($("#celda" + i).hasClass(jugador) && $("#celda" + (++aux)).hasClass(jugador) && $("#celda" + (++aux)).hasClass(jugador)) {
            // Lanzamos GameOver
            gameOver(i, "hor", jugador);
        }
    }
    
    // Comprobacion Vertical
    for (var i = 1; i < 4; i++) {
        var aux = i;
        if ($("#celda" + i).hasClass(jugador) && $("#celda" + (aux+=3)).hasClass(jugador) && $("#celda" + (aux+=3)).hasClass(jugador)) {
            // Lanzamos GameOver
            gameOver(i, "ver", jugador);
        }
    }
    
    // Comprobacion diagonal
    if ($("#celda1").hasClass(jugador) && $("#celda5").hasClass(jugador) && $("#celda9").hasClass(jugador)) {
        // Lanzamos GameOver
        gameOver(1, "dia", jugador);
    }
    
    if ($("#celda3").hasClass(jugador) && $("#celda5").hasClass(jugador) && $("#celda7").hasClass(jugador)) {
        // Lanzamos GameOver
        gameOver(3, "dia", jugador);
    }
    
}

////////////////////////////////////////////////////
// Funcion Random entre un minimo y un maximo //////
////////////////////////////////////////////////////
function randomRange(min, max) {
    // Calculamos el random max y min
    var resultado = Math.round((Math.random() * (max - min)) + min);
    // Retornamos el resultado
    return resultado;
}
