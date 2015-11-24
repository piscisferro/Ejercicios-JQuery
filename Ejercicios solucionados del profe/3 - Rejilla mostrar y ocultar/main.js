/**
 * Tiempo en milisegundos entre la aparición de cada número
 *
 * @type {number}
 */
var NUM_INTERVAL_TIME = 500;

/**
 * Encuentra una capa por su contenido
 *
 * Si, existe un selector para esto pero no me acuerdo
 *
 * @param content Contenido que debe contener la capa
 * @returns {undefined|object} La capa si se ha encontrado, undefined si no
 */
function findByContent(content) {
    var children = $('#capas').children();
    for (var i = 0; i < children.length; i++) {
        var child = $(children.get(i));
        if (child.html() == content) {
            return child;
        }
    }

    return undefined;
}

/**
 * Callback para el evento click del botón comenzar
 */
function btnComenzarClick() {
    $(this).attr('disabled', true);

    var children = $('#capas').children();
    var count = 0;
    var interval = setInterval(function() {
        $(children.get(count)).html(++count);

        if (count >= children.length) {
            clearInterval(interval);
            $('#numero').attr('disabled', false).focus();
            $('#ocultar').attr('disabled', false);
            $('#borrar').attr('disabled', false);
        }
    }, NUM_INTERVAL_TIME)
}

/**
 * Callback para el evento click sobre el botón ocultar
 */
function btnOcultarClick() {
    var child = findByContent($('#numero').val());

    if (child == undefined) {
        // Capa inexistente
        $('p.error').fadeIn();
    } else {
        $('p.error').fadeOut();
        child.toggle('slow');
    }
}

/**
 * Callback para el evento click sobre el botón borrar
 */
function btnBorrarClick() {
    var child = findByContent($('#numero').val());

    if (child == undefined) {
        // Capa inexistente
        $('p.error').fadeIn();
    } else {
        $('p.error').fadeOut();
        child.remove();
    }
}

$(document).ready(function() {
    $('#comenzar').click(btnComenzarClick);
    $('#ocultar').click(btnOcultarClick);
    $('#borrar').click(btnBorrarClick);
});