var cartaAbierta = false;
var carta = document.getElementById("carta");
var cartadiv = $("#carta-div");

$(document.getElementById("carta")).click(function(){
    
    if(cartaAbierta){
        cerrarcarta();
    }else{
        abrircarta();
    }
    
});

function showinvitation(){
    cartadiv.append('<img id="invitacion" src="images/invitacion-ejemplo.jpg">');
}

function hiddeinvitation(){
    $("#invitacion").remove();
}

function abrircarta(){
        carta.setAttribute("src","images/carta-abierta.png");
        cartadiv.removeClass("carta-wrapper");
        cartadiv.addClass("carta-wrapper-open");
        showinvitation();
        cartaAbierta=true;
}

function cerrarcarta(){
        carta.setAttribute("src","images/carta-cerrada.png");
        cartadiv.removeClass("carta-wrapper-open");
        cartadiv.addClass("carta-wrapper");
        hiddeinvitation();
        cartaAbierta=false;
}