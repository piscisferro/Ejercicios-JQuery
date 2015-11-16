
// Cuando el documento este cargado
$(document).ready(function() {
    
    // Cuando hacemos click llamamos a la funcion, el parametro Event es necesario para manejar el evento
    $('.see-photos').on('click', function(event) {
        // Usamos el parametro event para evitar que la segunda funcion se active
        event.stopPropagation();
        
        // Usamos el parametro event para evitar que el navegador salte a principio de pagina cuando cliqueamos
        event.preventDefault();
        
        // Buscamos la clase .photos dentro del tour en el que nos encontramos
        // Y le damos la propiedad fadeRoggle (tambien fadeIn y fadeOut)
        $(this).closest('.tour').find('.photos').fadeToggle();
    });
    
    // Segunda funcion con una alerta, esta de ejemplo para ver como la funcion stopPropagation
    // evita que esta alerta salga 
    $('.tour').on('click', function() {
        alert('This event handler should not be called.');
    });
});