$(document).ready(function() {

});

colocarCartaMao = (function(nome, img, d, e, c, b) {
    var carta = $('<div draggable="true" ondragstart="dragstart(event);" class="card col-lg-2" nome="' + nome + '" posicao="oculta" situacao="maojogador" d="' + d + '" e="' + e + '" c="' + c + '" b="' + b + '"></div>');
    $("#cartas").append(carta);
    mostrarCarta(carta);
    escoderCarta(carta);
    carta.on('mouseover', function() {
        mostrarCarta(carta);
    });
    carta.on('mouseout', function() {
        escoderCarta(carta);
    });
});

function dragOver(ev) {
    return false;
}


dragstart = (function(ev) {
    var t = ev.target;
    ev.dataTransfer.setData("COMP", t);
    return true;
});

function dragDrop(ev) {
    var idelt = ev.dataTransfer.getData("COMP");
    $(ev.target).append($(idelt));

    return true;
}


opcoes = (function() {
    $("#adversarios").modal("show");
});

iniciar = (function(d) {
    criarMao();
    $("#btnacao").hide();
});

criaBaralho = (function() {
    $("#baralho").html('<div class="baralho" onclick="novaCarta();">Baralho do GIL</div>');
});

criarMao = (function() {
    criarMaoJogador();
    criaBaralho();
});

criarMaoJogador = (function() {
    colocarCartaMao("Carta 01", '', "3", "2", '5', '7');
    colocarCartaMao("Carta 02", '', "7", "3", '0', '1');
    colocarCartaMao("Carta 03", '', "1", "1", '2', '9');
    colocarCartaMao("Carta 04", '', "5", "6", '8', '8');
    colocarCartaMao("Carta 05", '', '6', '9', '5', '7');
});

removeCartaTabuleiro = (function(obj) {
    $("#cemiterio").append(obj);
    obj.unbind("click");
    obj.bind('click', function() {
        alert("hi");
    });
});

colocaCartaTabuleiro = (function(carta, tab) {
    $("#" + tab).append(carta);
    carta.unbind("mouseover");
    carta.unbind("mouseout");
    carta.unbind("click");
    carta.removeClass('card-virada');
    carta.addClass('card-virada-emcampo');
    var m = new MensagemClasse("addCarta", $("#oponente").val(), carta.html());
    enviaMensagem(m);
    carta.bind('click', function() {
        selecionaCarta(carta, "#tabplayer");
    });
});

selecionaCarta = (function(carta, local) {
    $(local).children().removeClass("selecionada");
    carta.addClass('selecionada');
});

selecionaAdversario = (function(adversario) {
    $("#oponente").val(adversario);
    $("#adversarios").modal("hide");
    $("#btnacao").attr("onclick", "iniciar();");
    $("#btnacao").html("Iniciar o jogo");
    $("#btnacao").addClass("btn-success");
    $("#btnacao").removeClass("btn-info");
});

ativaCartas = (function() {
//    $("#cartas")
//    var cartas = $("#loca").children()
//    if (carta.attr('situacao') == 'maojogador') {
//        carta.unbind("click");
//        carta.bind('click', function() {
//            colocaCartaTabuleiro(carta, 'tabplayer');
//        });
//    }
});

novaCarta = (function() {
    colocarCartaMao("Carta do baralho", "Nome qualquer");
});



