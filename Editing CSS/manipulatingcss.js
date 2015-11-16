
// Cuando el documento este cargado
$(document).ready(function() {
    // Cuando entramos con el raton
    $('.tour').on('mouseenter', function() {

        // Cambiar css enviando el atributo y el valor
        //$(this).css('background-color', '#252b30');

        // Cambiar CSS enviando objeto 
        //$(this).css({'background-color' : '#252b30', 'font-weight' : 'bold'});

        // Usando clases de css con las propiedades anteriores
        $(this).addClass("highlighted");
        
        // Mostramos las fotos
        $(this).closest(".tour").find(".photos").show();
        
        

    });
    
    // Cuando sacamos el raton
    $('.tour').on('mouseleave', function() {

        // Quitamos la clase highlighted
        $(this).removeClass("highlighted");
        
        // Escondemos las fotos
        $(this).closest(".tour").find(".photos").hide();

    });
});