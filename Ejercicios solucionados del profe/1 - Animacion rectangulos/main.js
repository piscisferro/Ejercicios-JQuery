var capaHorizontal, capaVertical;
var stopped = false;

/**
 * Callback para el evento click sobre el botón #avanzar
 */
function btnAvanzarClick() {
   /* if (stopped) {
        capaHorizontal.css({
            left: 0
        });

        capaVertical.css({
            top: '100px'
        });

        stopped = false;
    }*/

    capaHorizontal.animate({
        left: '425px'
    }, 2000, 'linear');

    capaVertical.animate({top: '100px'}, 450);
	capaVertical.animate({top: '0px'});
	capaVertical.animate({top: '100px'}, 700);
}

/**
 * Callback para el evento click sobre el botón #retroceder
 */
function btnRetrocederClick() {
   /* if (stopped) {
        capaHorizontal.css({
            left: '425px'
        });

        capaVertical.css({
            top: '100px'
        });

        stopped = false;
    }*/

    capaHorizontal.animate({
        left: 0
    }, 2000, 'linear');

    capaVertical.animate({
        top: '100px'
    }, 600).animate({
        top: '0px'
    }).animate({
        top: '100px'
    }, 600);
}

/**
 * Callback para el evento click sobre el botón #parar
 */
function btnPararClick() {
    capaHorizontal.stop();
    capaVertical.stop(true);
    stopped = true;
}

$(document).ready(function () {
    capaHorizontal = $('#horizontal');
    capaVertical = $('#vertical');

    $('#avanzar').click(btnAvanzarClick);
    $('#retroceder').click(btnRetrocederClick);
    $('#parar').click(btnPararClick);
});