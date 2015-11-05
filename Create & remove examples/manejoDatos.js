// Cuando el documento este listo
$(document).ready(function() {
    
    // Al hacer Click en cualquier boton que este dentro de .tour
    $('.tour').on('click','button', function() {
        // Metemos la ruta en la variable tour
        var tour = $(this).closest('.tour');
        
        // En discount metemos el valor "data-discount" del HTML 
        var discount = tour.data('discount');
        
        // Variable con el mensaje
        var message = $('<span>Call 1-555-jquery-air for a $'+discount+' discount.</span><br>');
        
        // Añadimos el mensaje al final del li tour en el que se encuentra el boton
        tour.append(message);
        
        // Borramos el boton
        $(this).remove();
        
    });
  
    // Al hacer click en el boton de clase on-sale dentro de #filters
    $('#filters').on('click', '.on-sale', function() {
        // Primero buscamos todas las clases highlight y las borramos en caso de que haya
        $('.highlight').removeClass('highlight');
        // Añadimos la clase Highlight a los hijos de .tour que tambien tengan la clase on-sale
        $('.tour').filter('.on-sale').addClass('highlight');
    });
    
    // Al hacer click en el boton de clase featured dentro de #filters
    $('#filters').on('click', '.featured', function() {
        // Primero buscamos todas las clases highlight y las borramos en caso de que haya
        $('.highlight').removeClass('highlight');
        // Añadimos la clase Highlight a los hijos de .tour que tambien tengan la clase featured
        $('.tour').filter('.featured').addClass('highlight');
    });
    
    // Al hacer click en el boton de clase none dentro de #filters
    $('#filters').on('click', '.none', function() {
        // Buscamos todas las clases highlight y las borramos en caso de que haya
        $('.highlight').removeClass('highlight');
    });
    
});
