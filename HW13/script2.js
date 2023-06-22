$( document ).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });
    
});