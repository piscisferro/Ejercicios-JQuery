
// Cuando el documento este cargado
$(document).ready(function() {
    // Cuando entramos con el raton
    $('.tour').on('mouseenter', function() {

        // Usando clases de css con las propiedades anteriores
        $(this).addClass("highlighted");
        
        // Mostramos las fotos
        $(this).closest(".tour").find(".photos").show();
        
        // Hacemos la animacion para que aparezca el precio por noche
        $(this).find('.per-night').animate({'top': '-10px', 'opacity': '1'}, 'fast');
        
        

    });
    
    // Cuando sacamos el raton
    $('.tour').on('mouseleave', function() {

        // Quitamos la clase highlighted
        $(this).removeClass("highlighted");
        
        // Escondemos las fotos
        $(this).closest(".tour").find(".photos").hide();
        
        // Hacemos la animacion para que desaparezca el precio por noche
        $(this).find('.per-night').animate({'top': '0px', 'opacity': '0'}, 'fast');

    });
});