var bolasCreadas; // Variable para las bolas creadas
var bolasEliminadas; // Variables para las bolas eliminadas
var colores = ["red", "pink", "green", "blue", "orange", "purple", "yellow" ];

// Cuando el documento este cargado...
$(document).ready(function() {
    
    // Le damos al boton adornar la funcion adornar al hacer click
    $("#adornar").on("click", adornar);
    
    
    // Le damos al boton mover arbol la funcion moverArbol
    $("#mover").on("click", moverArbol);
    
    // Inicializamos variables
    bolasCreadas = 0;
    bolasEliminadas = 0;
    
});

// Funcion adornar
function adornar() {
    
    // Desactivamos el boton mover
    $("#mover").attr("disabled");
    
    // Guardamos la variable la capa para crear
    var bolita = $('<div class="bolita"></div>');
    
    // Trozo de codigo para calcular la posicion left y top por tramos
    var posicionTop = randomRange(37, 320);
    var posicionLeft = 0;
    
    if (posicionTop >= 37 && posicionTop <= 77) {
        
        var posicionLeft = randomRange(180, 227);
        
    } else if (posicionTop > 77 && posicionTop <= 124) {
        
        var posicionLeft = randomRange(160, 257);
        
    } else if (posicionTop > 124 && posicionTop <= 211) {
        
        var posicionLeft = randomRange(136, 265);
        
    } else if (posicionTop > 211 && posicionTop <= 320) {
        
        var posicionLeft = randomRange(113, 300);
        
    }
    
    var color = randomRange(0, colores.length);
    
    // le damos su posicion left y el color
    $(bolita).css({'background-color' : colores[color], 'left' : posicionLeft + 'px'});
    
    // Le damos la animacion de caer en el arbol
    $(bolita).animate({'top': posicionTop}, 1000);
    
    // Creamos la bolita en el html
    $("#juego").append(bolita);
        
    // Incrementamos el contador de bolas creadas
    bolasCreadas++;
    
    // Actualizamos el contador de bolas creadas 
    $("#creadas").html(bolasCreadas);
    
    // Reactivamos el boton mover 
    $("#mover").removeAttr("disabled");
    
}


function moverArbol() {
    
    // Desactivamos el boton adornar
    $("#adornar").attr("disabled");

    
    // Hacemos la animacion shake del arbol
    $("#arbol").animate({'left' : -10 + 'px'}, 300, function() { 
    
        $("#arbol").animate({'left' : +10 + 'px'}, 300, function() { 
        
            $("#arbol").animate({'left' : -10 + 'px'}, 300, function() { 
            
                $("#arbol").animate({'left' : 0 + 'px'}, 150);
            
            });
        });
    });
    
    
   var hijos = $("#juego .bolita").length;
    
   for (var i = 0; i < hijos; i++) {
       
       $("#juego").children(".bolita").first().animate({'top' : 355 + 'px'}, 500, function() {
          
           $("#juego").children(".bolita").first().animate({'opacity' : 0}, 500, function () {
               
               $("#juego").children(".bolita").first().remove();
           });
       });
       
       
       
       bolasEliminadas++;
   }

    // Actualizamos el contador de bolas eliminadas 
    $("#eliminadas").html(bolasCreadas);
    
    
    
    // Reactivamos el boton poner adornos 
    $("#adornar").removeAttr("disabled");
    
    
}

// Funcion Random entre un minimo y un maximo
function randomRange(min, max) {
    
    var resultado = (Math.random() * (max - min)) + min;
	
    return resultado;
    
}
