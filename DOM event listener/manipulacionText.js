$(document).ready(function() {
    
    // Cuando dejamos de presionar la tecla
    $('#nights').on('keyup', function() {
        // Guardamos el valor del input #nights en una variable
        var nights = +$(this).val();
        
        // Guardamos el data-daily-price del Tour mas cercano en una variable
        var dailyPrice = +$(this).closest(".tour").data("daily-price");
        
        // Al span total le asignamos el valor de nights multiplicado por el dailyprice
        $('#total').text(nights * dailyPrice);
        
        // Al contador de noches le asignamos el valor del input
        $('#nights-count').text($(this).val());
    });
  
    // Cuando hacemos focus en el input
    $("#nights").on("focus", function() {
    
        // Ponemos su valor a 7
        $("#nights").val(7);
  
    });
  
});
