const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    }, 
    960: {
        items: 3
    }
};




    /*$nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');*/

    

    /*   Click event on toggle menu   */
    /*$toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });*/

    //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    }); 

    // click to scroll up
    $('.move-up span').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    // AOS instance
    AOS.init();


    // Sticky NavBar
    $(document).ready(function() {

        var nav_offset_top = $('.header_area').height() + 50;
    
        function navbarFixed() {
            if ($('.header_area').length) {
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    if (scroll >= nav_offset_top) {
                        $('.header_area .main-menu').addClass('navbar_fixed');
                    } else {
                        $('.header_area .main-menu').removeClass('navbar_fixed');
                    }
                });
            }
        }
    
        navbarFixed();

});