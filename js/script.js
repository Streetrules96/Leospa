$(document).ready(function() {
    $(".burger").click(function(event) {
        $(".burger, .nav").toggleClass("active");
        $("body").toggleClass("lock");
    });   

    $('.nav').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock');
    });
    
    $('.testimonials_slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
   
    /* Fixed Header */
    
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
        
    });
    
    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };
    
    /* Smooth scroll */
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this);
        var blockId = $(this).data("scroll");
        var blockOffset = $(blockId).offset().top -63;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    
    
    
    
});