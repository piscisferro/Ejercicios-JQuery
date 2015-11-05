$(document).ready(function() {
    
    $('#iniciar').on('click', function() {
        var message = $('<span>Call 1-555-jquery-air to book this tour</span><br>');
        var message2 = $('<span>Come to USA now</span><br>');

        // Introducir texto antes de Book Now
        $('.book').before(message);


        // Introducir un span en .usa
        $('.usa').append(message2);

        // Borra el book now de tokyo
        $('.asia').find('.book').remove();
    });
    
    // Si clickeamos en cualquier boton book now
    $('.book').on('click', function() {
        // mensaje que se motrara
        var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
        
        // Buscamos el <li> de clase .tour mas cercano respecto al boton pulsado y le colocamos el mensaje como hijo
        $(this).closest('.tour').append(message);
        
        // Borramos el boton que hemos pulsado
        $(this).remove();
    });
    
    
});