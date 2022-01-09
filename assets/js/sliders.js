

$(document).ready(function(){
    const mobileCharacteristics = $('.mobile-characteristics');
    
    if(mobileCharacteristics.length > 0) {
        mobileCharacteristics.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 2,
            nav: false,
            dots: false,
            center:true
        });
    }
});