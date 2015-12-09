/////////////////////////////////////////
// ESTE EJERCICIO AUN NO ESTA ACABADO
//
// FALTA: Game Over.
//        Reglas para ganar/perder.
//
////////////////////////////////////////

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
    
    // Inicializamos el array
    posicionBarcos = [0, 0, 0, 0, 0];
    
    // Le damos a todas las celdas la propiedad click. Para lanzar la funcion dispara
    // Y ademas quitamos todas las clases que pudieran tener, reiniciando todas las capas 
    for (var i = 1; i <= 25; i++) {
        
        // Le damos la propiedad click
        $("#coordenada" + i).on("click", dispara);
        
        // En el caso de que tengan alguna clase "no-inicial", la quitamos.
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
        
        // Si el numero ya esta en el array (contains(array, obj))
        if (contains(posicionBarcos[i], aux)) {
            // Restamos a i uno para volver a repetir la iteraccion
            i--;
            
        } else { // Si no esta en el array
            // Le damos al array el valor de aux
            posicionBarcos[i] = aux;
            
            // Le damos al div la clase barco
            $("#coordenada" + posicionBarcos[i]).addClass("barco");
            
        }
    }
    
    // Inicializamos las variables globales a 0 y las mostramos en pantalla
    aciertos = 0;
    fallos = 0;
    $("#aciertos").html(aciertos);
    $("#fallos").html(fallos);
}



// Funcion dispara que comprueba si hay o no un barco en la celda
function dispara () {
    
    // Si tiene la clase barco
    if ($(this).hasClass("barco")) {
        
        // Aumentamos el contador de aciertos
        aciertos++;
        
        // Actualizamos UI de aciertos
        $("#aciertos").html(aciertos);
        
        // Le añadimos la clase hundido
        $(this).addClass("hundido");  
        
        // Desactivamos el click en la capa en la que hemos clicado
        $(this).off("click");
        
        
    } else { // Si no tiene la clase barco
        
        // Aumentamos el contador de fallos
        fallos++;
        
        // Actualizamos la UI de fallos
        $("#fallos").html(fallos);
        
        // Le añadimos la clase agua
        $(this).addClass("agua");  
        
        // Desactivamos el click en la capa que hemos clicado
        $(this).off("click");
        
    }
}




// Funcion Random entre un minimo y un maximo
function randomRange(min, max) {
	var resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    return resultado;
}

// Funcion contains manual. Dado que no he encontrado niongun metodo para arrays similar 
// Parametros: array (array que se quiere comprobar).
//					   obj (objeto que se quiere comprobar si esta en el array)
// return: True or false.
function contains(array, obj) {
	// Bucle for para recorrer el array
    for (var i = 0; i < array.length; i++) {
		// Si se encuentra el objeto
        if (array[i] == obj) {
			// Retorna true
            return true;
        }
    }
	// Si no encuentra el objeto retorna false.
    return false;
}