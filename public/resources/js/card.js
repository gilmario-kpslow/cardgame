escoderCarta = (function(carta) {
//    carta.attr('posicao', 'oculta');
    carta.removeClass('card-virada');
//    carta.html("");
});

mostrarCarta = (function(carta) {
    carta.addClass('card-virada');
    if (carta.attr('posicao') == 'oculta') {
        carta.attr('posicao', 'virada');
        carta.append('<div class="card-nome"><span>' + carta.attr('nome') + '</span></div>');
        carta.append('<div class="text-center">' + carta.attr('c') + '</div>');
        carta.append('<div class="center"><div class="esquerda">' + carta.attr('e') + '</div><div class="direita">' + carta.attr('d') + '</div></div>');
        carta.append('<div class="clear"></div>');
        carta.append('<div class="text-center baixo">' + carta.attr('e') + '</div>');
    }
});

desabilitar = (function(carta) {
    carta.removeClass('card-virada');
    carta.addClass('card-desativada');
});

