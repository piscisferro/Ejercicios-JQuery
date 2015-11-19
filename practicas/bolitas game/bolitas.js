$(document).ready(function() {
    
    // Le damos al boton start la propiedad onclick para que lanze la funcion comenzar
    $('#start').on('click', comenzar);    
    
}); 

var niveles = 0;
var vidas = 3;
var colores;
var timeoutJuego;

// Funcion comenzar que lo inicializa todo
function comenzar() {
    
    // Borramos todos los hijos del espacio de juego reiniciando el juego
    $('#gamespace').empty();
    
    // Reiniciamos nivel, vidas y colores
    niveles = 0;
    vidas = 3;
    colores = ["red", "pink", "green", "blue", "orange", "purple", "yellow" ]
    
    
    $('#nivel').html(niveles);
    $('#vidas').html(vidas);
    
    // Desactivamos el boton comenzar
    $('#start').attr('disabled', 'disabled');
    
    // Desactivamos la lista desplegable
    $('#color').attr('disabled', 'disabled');
    
    // Lanzamos la funcion juego
    juego();
}

// Funcion para la logica del juego principal
function juego() {
    
    // Creamos la bolita jugador
    crearJugador();
    
    // Creamos las bolitas de relleno
    crearBolitas();
    
    // Timeout para que se vuelva a repetir el juego
    timeoutJuego = setTimeout(juego, 4500);
    
    
}

function crearJugador() {
    
    // Creamos la capa jugador con la clase jugador
    var jugador = $('<div class="jugador"></div>');
    
    // Metemos el color seleccionado en una variable
    var color = $('#color').val();
    
    // Eliminamos el color seleccionado del array de colores
    eliminarColor(color);
                  
    // Metemos un numero aleatorio entre 0 y 350 para el offset left
    var ofLeft = randomRange(0, 350);
    
    // Le damos a la bolita jugador la propiedad onclick para pasar de nivel
    $(jugador).on('click', pasarNivel);
    
    // Le damos todas las propiedades dinamicas a la capa (color, top y left)
    $(jugador).css({'background-color' : color, 'top' : '550px', 'left' : ofLeft + 'px'});
    
    // Actualizamos el random del offset left
    ofLeft = randomRange(0, 350);
    
    // Le damos una animacion a jugador para que vaya de abajo hacia arriba 
    // Funciones callbacks, desvanecer para hacer desaparecer la bolita y fallo para quitar una vida cuando 
    // llega arriba
    $(jugador).animate({'top' : '0px', 'left' : ofLeft + 'px'}, 4000, function() {desvanecer(".jugador"); fallo()});
    
    // Creamos la capa en el maravilloso mundo del juego
    $('#gamespace').append(jugador);  
}

// Funcion para crear bolitas de relleno
function crearBolitas() {
    
    // Contador para crear 2 bolitas por nivel.
    for (var i = 0; i < (niveles * 2); i++) {
        
        var bolitaRelleno = $('<div class="relleno"></div>')
        
        // Metemos el color seleccionado en una variable
        var color = randomRange(0, colores.length);

        // Metemos un numero aleatorio entre 0 y 350 para el offset left
        var ofLeft = randomRange(0, 350);

        // Le damos a la bolita jugador la propiedad onclick para pasar de nivel
        $(bolitaRelleno).on('click', fallo);
        
        // Le damos todas las propiedades dinamicas a la capa (color, top y left)
        $(bolitaRelleno).css({'background-color' : colores[color], 'top' : '550px', 'left' : ofLeft + 'px'});
        
        // Actualizamos el random del offset left
        ofLeft = randomRange(0, 350);
        
        // Le damos una animacion a jugador para que vaya de abajo hacia arriba 
        $(bolitaRelleno).animate({'top' : '0px', 'left' : ofLeft + 'px'}, 4000, function() {desvanecer(".relleno");});

        // Creamos la capa en el maravilloso mundo del juego
        $('#gamespace').append(bolitaRelleno);
    }
}


// Funcion para cuando fallamos al cliquear en la pelota
function fallo() {
    
    // Paramos la animaciones de todas las bolas
    $('.jugador').stop();
    $('.relleno').stop();
    
    // Hacemos desvanecer todas las bolas
    desvanecer(".jugador");
    desvanecer(".relleno");
    
    // Incrementamos el nivel
    vidas--;
    
    // Actualizamos la informacion en el span
    $('#vidas').html(vidas);
    
    // Limpiamos el timeOut de juego
    clearTimeout(timeoutJuego);
    
    // Si el contador de vida llega a 0
    if (vidas == 0) {
        // Lanzamos gameOver
        gameOver();
        // Nos salimos de la funcion para no llegar al timeout
        return;
    }
    
    // Lanzamos de nuevo el juego al cabo de 1 segundo
    setTimeout(juego, 1000);
    
}


// Funcion para pasr de nivel
function pasarNivel() {
    // Paramos la animaciones de todas las bolas
    $(this).stop();
    $('.relleno').stop();
    
    // Hacemos desvanecer todas las bolas
    desvanecer(".jugador");
    desvanecer(".relleno");
    
    // Incrementamos el nivel
    niveles++;
    
    // Actualizamos la informacion en el span
    $('#nivel').html(niveles);
    
    // Limpiamos el timeOut de juego
    clearTimeout(timeoutJuego);
    
    // Lanzamos de nuevo el juego al cabo de 1 segundo
    setTimeout(juego, 1000);
    
}

// Funcion Game Over
function gameOver() {
    
    // Creamos las capas GameOver y el mensaje GameOver
    var gameOver = $('<div id="gameOver"></div>');
    var message = $('<p>GAME OVER!</p>');
    
    // Metemos las capas en gameSpace y message en gameOver
    $('#gamespace').append(gameOver);
    $('#gameOver').append(message);
    
    // Devolvemos al boton y al select sus funcionalidades
    $('#color').removeAttr('disabled');
    $('#start').removeAttr('disabled');
    
}

// Funcion desvanecer, para que cuando termine la animacion principal de movimiento
// la capa desaparezca y se borre haciendose transparente
function desvanecer(clase) {
    
    // La capa hace una animacion de transparencia para luego ser borrada
    $(clase).animate({opacity : 0}, 'fast', function() {
        // Borramos la capa
        $(clase).remove();
    });
}
    
// Funcion para eliminar un color que se pasa como parametro del array
function eliminarColor(color) {
    // Contador para pasar por todos los indices del array
    for (var i = 0; i < colores.length; i++) {
        // Si el color que se encuentra en el indice es el mismo que el que pasamos como parametro
        if (colores[i] == color) {
            // Eliminamos el color, el metodo para arrays splice("indice", "cantidad a borrar desde el indice")
            colores.splice(i, 1);
        }
    }
}

// Funcion para generar un numero aleatorio entre un minimo y un maximo 
function randomRange(min, max) {
    
    var resultado = Math.round((Math.random() * (max - min)) + min);
    return resultado;
    
}