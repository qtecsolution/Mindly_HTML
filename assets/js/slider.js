
$(document).ready(function(){
    if($('.new-collection').length > 0) {
        $('.new-collection').owlCarousel({
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: true,
            dots: false,
            // touchDrag: false,
            // mouseDrag: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 2
                },
                
                // breakpoint from 991 up
                991 : {
                    items: 3
                }
            }
        });

        $(".owl-prev").html('<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 26.5L1.75 14L14.25 1.5" stroke="#DFDFDF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        $(".owl-next").html('<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 1.5L14.25 14L1.75 26.5" stroke="#848484" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }

    if($('.inspiration-style').length > 0) {
        $('.inspiration-style').owlCarousel({
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: true,
            dots: false,
            // touchDrag: false,
            // mouseDrag: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 2
                },
        
                // breakpoint from 991 up
                991 : {
                    items: 3
                },
        
                // breakpoint from 1200 up
                1200 : {
                    items: 4
                }
            }
        });

        $(".owl-prev").html('<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 26.5L1.75 14L14.25 1.5" stroke="#DFDFDF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        $(".owl-next").html('<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 1.5L14.25 14L1.75 26.5" stroke="#848484" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }

    if($('.our-brands').length > 0) {
        $('.our-brands').owlCarousel({
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 2
                },
        
                // breakpoint from 991 up
                991 : {
                    items: 3
                }
            }
        });

        $(".owl-prev").html('<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.25 26.5L1.75 14L14.25 1.5" stroke="#DFDFDF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        $(".owl-next").html('<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 1.5L14.25 14L1.75 26.5" stroke="#848484" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }
});