$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 800,
        autoplay: {
            delay: 1000
        },
        

        //If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        
    });
    $('.menu > li > a').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
    });
    $('.totop a').click(function (e) { 
        e.preventDefault();
        $('html,bodt').animate({
            scrollTop: 0}
            ,700);
    });
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'positionFromTop': 350
        // 'maxWidth': 600,
        // 'maxHeight': 400
    });
});
// $('.cart > li > a').click(function(event) {
//     event.preventDefault();
//     $(this).parent().siblings().find('ul').slideUp();
//     $(this).parent().find('ul').slideToggle();
//   });