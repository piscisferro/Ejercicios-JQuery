
// Cuando cargue el documento
$(document).ready(function() {
    
    // Buscamos #tour y dentro de tour el boton #toggle
    $("#tour").on('click', '#toggle', function() {
        // Usamos la funcion slideToggle en la clase photos
        $('.photos').slideToggle();
    });
    
    // Buscamos #tour y dentro de tour el boton #slideup
    $("#tour").on('click', '#slideup', function() {
        // Usamos la funcion slideUp en la clase photos
        $('.photos').slideUp();
    });
    
    // Buscamos #tour y dentro de tour el boton #slidedown
    $("#tour").on('click', '#slidedown', function() { 
        // Usamos la funcion slideDown en la clase photos
        $('.photos').slideDown();
    });
    
    // Buscamos la clase .photos y el elemento li para añadirle el mouseenter y llamamos a la funcion showPhotos
    $('.photos').on('mouseenter', 'li', showPhotos);
    
    // Buscamos la clase .photos y el elemento li para añadirle el mouseleave y llamamos a la funcion showPhotos
    $('.photos').on('mouseleave', 'li', showPhotos);
    
    
    
    // Funcion showPhotos, que muestra o esconde las fotos
    function showPhotos () {
        // Muestra o esconde el span de las fotos.
        $(this).find("span").slideToggle();
        
    }
    
});
