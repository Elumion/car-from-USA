$(function(){
    $('.carousel_inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,

        responsive:[
            {
                breakpoint: 841,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint: 701,
                settings:{
                    slidesToShow:1
                }
            },
        ]
    });
});

