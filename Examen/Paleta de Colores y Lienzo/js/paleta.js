$(document).ready(function() {
    
    // Le damos a todos los div del lienzo la funcion de ser pintados
    $("#contenedor div").on("mouseenter", pintar);
    
    // Le damos al boton intercambiar la funcion intercambiar
    $("#intercambiar").on("click", intercambiar);
    
    // Le damos al boton limpiar la funcion limpiar
    $("#limpiar").on("click", limpiar);
    
    // Le damos al boton rellenar la funcion rellenar
    $("#rellenar").on("click", rellenar);
   
    // Le damos a los div de paleta de colores 1 la funcion click para elegir color
    $("#paletaUno div").on("click", elegirColor1);
    
    // Le damos a los div de paleta de colores 1 la funcion click para elegir color
    $("#paletaDos div").on("click", elegirColor2);
    
});

var colorElegido1; // Variable global para el color seleccionado de la paleta 1
var colorElegido2; // Variable global para el color seleccionado de la paleta 2

// Funcion para elegir color de la paleta 1
function elegirColor1() {
    
    // Metemos en la variable global el atributo class del color elegido
    colorElegido1 = $(this).attr("class");
    
    // Actualizamos el colorPaletaUno con el color que hemos elegido para mostrarlo en el html
    $("#colorPaletaUno").html(colorElegido1);
}

// Funcion para elegir color de la paleta 2
function elegirColor2() {
    
    // Metemos en la variable global el atributo class del color elegido
    colorElegido2 = $(this).attr("class");
    
    // Actualizamos el colorPaletaDos con el color que hemos elegido para mostrarlo en el html
    $("#colorPaletaDos").html(colorElegido2);
    
}


// Funcion para pintar en el lienzo
function pintar() {
    
    // Guardamos el color actual del div del lienzo
    var colorEliminado = $(this).attr("class");
    
    // Pintamos el div del color dandole la class elegida de la paleta
    $(this).attr("class", colorElegido1);
    
    // Contamos el numero de casillas con el color con el cual estamos pintando.
    var contadorCasillas = $("#contenedor ." + colorElegido1).length;    
    
    // Actualizamos en la paleta el numero de casillas con ese color
    $("#paletaUno ." + colorElegido1).html(contadorCasillas);
    
    // Si la clase de color que tenia el Div antes de pintar no era "nada"
    if (colorEliminado != "nada") {
        // Metemos en una variable la cantidad del color que hemos eliminado
        var eliminado = $("#contenedor ." + colorEliminado).length;
        
        // Actualizamos en la paleta el numero de casillas con ese color eliminado
        $("#paletaUno ." + colorEliminado).html(eliminado);
    }
    
}

// Funcion para intercambiar los colores del lienzo por los de paleta 2
function intercambiar() {
    
    // Si hemos elegido un color de la paleta 2
    if (colorElegido2 != undefined) {
        
        // Guardamos en una variable la cantidad de todos los hijos div de contenedor
        var lienzoLength = $("#contenedor div").length;
        
        // He intentado recorrer los children de $("#contenedor") de varias maneras pero
        // por falta de tiempo y de no encontrar solucion... he optado por esto
        var colorArray = ["rojo", "amariyo", "verde", "azul", "negro", "blanco"];
        
        // En este for recorreremos el array para seleccionar cada color
        for (var i = 0; i < colorArray.length; i++) {
            
            $("#contenedor ." + colorArray[i]).attr("class", colorElegido2);
            
            // Actualizamos en la paleta el numero de casillas con ese color, que sera 0
            $("#paletaUno ." + colorArray[i]).html(0);
            
        }
        
        // Contamos el numero de casillas con el color con el cual estamos pintando.
        var contadorCasillas = $("#contenedor ." + colorElegido2).length;    

        // Actualizamos en la paleta el numero de casillas con ese color
        $("#paletaUno ." + colorElegido2).html(contadorCasillas);
        
        
    }
} 

// Funcion para rellenar las partes en blanco del lienzo con los colores de paleta 2
function rellenar() {
    
    // Si hemos elegido un color de la paleta 2
    if (colorElegido2 != undefined) {
        
        // A todos los div de clase nada dentro del lienzo, rellenamos con el color elegido
        $("#contenedor .nada").attr("class", colorElegido2);
        
        
        // Contamos el numero de casillas con el color con el cual estamos pintando.
        var contadorCasillas = $("#contenedor ." + colorElegido2).length;    

        // Actualizamos en la paleta el numero de casillas con ese color
        $("#paletaUno ." + colorElegido2).html(contadorCasillas);
    }
}
  


// Funcion para limpiar el lienzo
function limpiar() {
    
    // Le borramos todas las clases de todos los div del lienzo
    $("#contenedor div").removeAttr("class");
    // Le volvemos a dar la clase "nada"
    $("#contenedor div").attr("class", "nada");
    
    // Ponemos a 0 el contador de las casillas
    $("#paletaUno div").html("0");
    $("#paletaDos div").html("0");
    
}

