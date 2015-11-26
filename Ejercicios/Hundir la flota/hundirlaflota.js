var aciertos; // Variable contador para aciertos
var fallos; // Variable contador para fallos
var posicionBarcos; // Variable array para la posicion de los barcos

$(document).ready(function() {
    
    // Le damos al boton comenzar la propiedad click para lanzar la funcion comenzar
    $("#comenzar").on("click", comenzar);
    
});

function comenzar() {
    
    // Desactiva el boton
    $("#comenzar").attr("disabled", "true");
    
    // Le damos a todas las celdas la propiedad click. Para lanzar la funcion dispara
    for (var i = 1; i <= 25; i++) {
        $("#coordenada" + i).on("click", dispara);
        
        if ( $("#coordenada" + i).hasClass("barco")) {
             $("#coordenada" + i).removeClass("barco");
        } 
        
        if ( $("#coordenada" + i).hasClass("agua")) {
             $("#coordenada" + i).removeClass("agua");
        }
        
        if ( $("#coordenada" + i).hasClass("hundido")) {
             $("#coordenada" + i).removeClass("hundido");
        }
    }
    
    // Ponemos 5 barcos en coordenadas aleatorias.
    for (var i = 0; i < 5; i++) {
        // Variable auxiliar para guardar el random
        var aux = randomRange(1, 25);
        
        // Si el numero ya esta en el array
        if (posicionBarcos.contains(aux)) {
            // Restamos a i uno para volver a repetir la iteraccion
            i--;
        } else { // Si no esta en el array
            // Le damos al array el valor de aux
            posicionBarcos[i] = aux;
            
            // Le damos al div la clase barco
            $("#coordenada" + posicionBarcos[i]).addClass("barco");
            
        }
    }
    
    // Inicializamos las variables globales a 0
    aciertos = 0;
    fallos = 0;
}



// Funcion dispara que comprueba si hay o no un barco en la celda
function dispara () {
    
    if ($(this).hasClass("barco")) {
        
        aciertos++;
        
        
    } else {
        
        fallos--;
        
    }
    
}




// Funcion Random entre un minimo y un maximo
function randomRange(min, max) {
	var resultado = Math.ceil((Math.random() * (max - min) - 1) + min);
    return resultado;
}