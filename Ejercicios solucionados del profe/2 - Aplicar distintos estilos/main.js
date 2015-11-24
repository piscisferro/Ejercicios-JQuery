$(document).ready(function () {
    $('#estilos1').find('h4').click(function () {
        // El click sobre el título de estilos1 cierra la lista de estilos2 y abre la lista de estilos1
        $('#estilos2').find('ul').slideUp();
        $('#estilos1').find('ul').slideDown();
    }).parent().find('a').each(function(index, elem) {
        $(elem).click(function() {
            // Al hacer click sobre cada estilo para capa1 se cambia su clase a ese estilo
            $('#capa1').removeClass().addClass('estilo' + index);
        });
    });

    $('#estilos2').find('h4').click(function () {
        // El click sobre el título de estilos2 cierra la lista de estilos1 y abre la lista de estilos2
        $('#estilos1').find('ul').slideUp();
        $('#estilos2').find('ul').slideDown();
    }).parent().find('a').each(function(index, elem) {
        $(elem).click(function() {
            // Al hacer click sobre cada estilo para capa2 se cambia su clase a ese estilo
            $('#capa2').removeClass().addClass('estilo' + index);
        })
    });
});