var bolPiano = false;
var bolGuitarra = false;

$(document).ready(function() {
   
    // Le damos al boton quitar/poner la funcion de quitar
    $("#quitarponer").on("click", quitarponer);
    
    // Le damos al boton piano la funcion de piano
    $("#piano").on("click", piano);
    
    // Le damos al boton guitarra la funcion guitarra
    $("#guitarra").on('click', guitarra);
    
    // Le damos al boton plegar la funcion plegar
    $('#plegar').on('click', plegar);
    
});

function quitarponer() {
    
    // Cogemos el valor del select lista
    var lista = $("#lista").val();
    
    // Metemos en una variable almohadilla + el valor (la nota)
    var nota = "#" + lista;
    
    // Si el div se esta mostrando... 
    if ($(nota).data("plegado") == true) {
        
        // Lo escondemos
        $(nota).hide();
        // Ponemos el dato plegado como false
        $(nota).data("plegado", false);
        
    } else { // Si el div no se esta mostrando
        
        // Lo mostramos
        $(nota).show();
        // Ponemos el dato plegado como true.
        $(nota).data("plegado", true);
        
    }
    
}

function plegar() {
    // Plegamos y desplegamos con toggle
    $("#teclado").slideToggle();
    
    // Si el boton pone Plegar
    if ($(this).html() == "Plegar") {
        // Le cambiamos el html a desplegar
        $(this).html("Desplegar");
    
    } else { // Si el boton pone desplegar
        // Le cambiamos el html a plegar
        $(this).html("Plegar");
    }
}

function piano() {
    
    // Vuelve el teclado a como esta en la hoja de estilos
    $("#teclado div").removeAttr("style");
    
    if (bolPiano == false) {
        // Se le añade el color negro y fuente blanca a todas las teclas pares
        $("#teclado div:even").css({'background-color' : 'white', 'color' : 'black'});
        // Se le añade el color blanco y fuente negra a todas las teclas impares
        $("#teclado div:odd").css({'background-color' : 'black', 'color' : 'white'});
        
        // Actualizamos las booleanas guitarra y piano
        bolGuitarra = false;
        bolPiano = true;
        
        // Actualizamos los botones Guitarra(guitarra) y Piano (normal)
        $("#piano").html("Normal");
        $("#guitarra").html("Guitarra");
        
    } else {
        
        // Vuelve el teclado a como esta en la hoja de estilos
        $("#teclado div").removeAttr("style");
        
        // Ponemos el html del boton piano a Piano
        $("#piano").html("Piano");
        
        // Ponemos a false la booleana de piano
        bolPiano = false;
        
    }
    
}

function guitarra() {
    
    // Si la booleana guitarra es false
    if (bolGuitarra == false) {
        
        // Vuelve el teclado a como esta en la hoja de estilos
        $("#teclado div").removeAttr("style");
        
        // Creamos variable altura y la ponemos a 50
        var altura = 50;
        // Creamos la variable contador (necesario para la posicion left y el posicionamiento para conseguir
        // un vertical align middle)
        var contador = 0;
        
        // Para cada Div de teclado la funcion
        $('#teclado div').each(function() {
            // Para cada elemento div, le ponemos la altura, el vertical align middle (top 50% margin -altura/2) position absolute
            // y un left de 1 * contador
            $(this).css({'height' :  altura + "px", 'top' : '50%', 'margin-top' : "-" + altura/2 + "px", 'position' : 'absolute',
                        'left' : 1 * contador + 'px'});
            
            // Incrementamos la altura en 10 para conseguir el efecto ascendente
            altura += 10;
            // Incrementamos contador en 100, que es el ancho del div
            contador+= 100;
        });
        
        // Actualizamos las booleanas guitarra y piano
        bolGuitarra = true;
        bolPiano = false;
        
        // Actualizamos los botones Guitarra(guitarra) y Piano (normal)
        $("#piano").html("Piano");
        $("#guitarra").html("Normal");
        
    } else {
        
        // Vuelve el teclado a como esta en la hoja de estilos
        $("#teclado div").removeAttr("style");
        
        // Ponemos el html del boton piano a Piano
        $("#guitarra").html("Guitarra");
        
        // Ponemos a false la booleana de piano
        bolGuitarra = false;
        
    }
    
    
}

