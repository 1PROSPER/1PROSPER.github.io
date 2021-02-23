$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.header .navigationBar').addClass("sticky");
        }else{
            $('.header .navigationBar').removeClass("sticky");
        }
    })

    var typed = new Typed(".Typinganim", {
        strings : ["Developer","Designer","Music Producer","GFX Artist", "Pentester", "3D artist"],
        typeSpeed: 100,
        backSpeed:60,
        loop:true
    });

});