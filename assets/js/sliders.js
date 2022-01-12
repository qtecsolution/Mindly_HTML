

$(document).ready(function(){
    // CHARACTERISTICS SLIDER START
    const mobileCharacteristics = $('.mobile-characteristics');
    
    if(mobileCharacteristics.length > 0) {
        mobileCharacteristics.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 2,
            responsiveClass:true,
            nav: false,
            dots: false
        });
    }
    // CHARACTERISTICS SLIDER END

    // CHARACTERISTICS SLIDER START
    const mobileServices = $('.mobile-services');
    
    if(mobileServices.length > 0) {
        mobileServices.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 2,
            nav: false,
            responsiveClass:true,
            dots: false,
            afterAction: function(el) {
                //afterinit: function(el)//same results

                this
                .$owlItems
                .removeClass('active')

                this
                .$owlItems 
                .eq(this.currentItem)
                .addClass('active')

            }
        });
    }
    // CHARACTERISTICS SLIDER END

    // PACKAGES SLIDER START
    const packages = $('.packages');
    
    if(packages.length > 0) {
        packages.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: false,
            responsiveClass:true,
            afterAction: function(el){
                //afterinit: function(el)//same results

                this
                .$owlItems
                .removeClass('active')

                this
                .$owlItems 
                .eq(this.currentItem)
                .addClass('active')

            },
            responsive : {
                // breakpoint from 0 up
                0 : {
                    margin: 0,
                    items: 1,
                    nav: false
                },

                // breakpoint from 480 up
                480 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 768 up
                768 : {
                    items: 2,
                    nav: false
                },

                991 : {
                    items: 2,
                    nav: false
                },

                1024 : {
                    items: 3,
                    nav: true
                }
            }
        });

        // SHOW SLIDER INDICATORS
        $('.owl-carousel').on('changed.owl.carousel', function(event) {
            $(this).find('.owl-nav').removeClass('disabled');
        });

        $(".owl-prev").html('<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 11.4989L4.125 24.5024C4.125 29.0324 7.3335 31.8749 11.874 31.8749L24.126 31.8749C28.6665 31.8749 31.875 29.0474 31.875 24.5024L31.875 11.4989C31.875 6.95388 28.6665 4.12488 24.126 4.12488L11.874 4.12488C7.3335 4.12488 4.125 6.95388 4.125 11.4989Z" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.8709 17.9999L24.1289 17.9999" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5156 23.6219L11.8696 17.9999L17.5156 12.3779" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        $(".owl-next").html('<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.875 24.5011L31.875 11.4976C31.875 6.96762 28.6665 4.12512 24.126 4.12512L11.874 4.12512C7.3335 4.12512 4.125 6.95262 4.125 11.4976L4.125 24.5011C4.125 29.0461 7.3335 31.8751 11.874 31.8751L24.126 31.8751C28.6665 31.8751 31.875 29.0461 31.875 24.5011Z" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.1291 18.0001L11.8711 18.0001" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.4844 12.3781L24.1304 18.0001L18.4844 23.6221" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }
    // PACKAGES SLIDER END

    // DOCTOR LIST SLIDER START
    const doctors = $('.doctors-slider');
    
    if(doctors.length > 0) {
        doctors.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: false,
            responsiveClass:true,
            items: 2,
            afterAction: function(el) {
                //afterinit: function(el)//same results

                this
                .$owlItems
                .removeClass('active')

                this
                .$owlItems 
                .eq(this.currentItem)
                .addClass('active')

            }
        });
    }
    // DOCTOR LIST SLIDER END

    // REVIEW SLIDER START
    const reviews = $('.reviewslider');
    
    if(reviews.length > 0) {
        reviews.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsiveClass:true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 360 up
                360 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 768 up
                768 : {
                    items: 2,
                    nav: false
                },

                // breakpoint from 992 up
                992 : {
                    items: 3,
                    nav: false
                }
            }
        });
    }
    // REVIEW SLIDER END

    // CLIENTS SLIDER START
    const clients = $('.clients-slider');
    
    if(clients.length > 0) {
        clients.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            responsiveClass:true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 360 up
                360 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 480 up
                480 : {
                    items: 2,
                    nav: false
                },

                // breakpoint from 768 up
                768 : {
                    items: 3,
                    nav: false
                },

                // breakpoint from 992 up
                992 : {
                    items: 4,
                    nav: false
                },

                // breakpoint from 1024 up
                1024 : {
                    items: 5,
                    nav: false
                },

                // breakpoint from 1100 up
                1100 : {
                    items: 6,
                    nav: false
                }
            }
        });
    }
    // CLIENTS SLIDER END

    // BRANDS SLIDER START
    const brands = $('.brands-slider');
    
    if(brands.length > 0) {
        brands.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            responsiveClass:true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 360 up
                360 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 480 up
                480 : {
                    items: 2,
                    nav: false
                },

                // breakpoint from 768 up
                768 : {
                    items: 3,
                    nav: false
                },

                // breakpoint from 992 up
                992 : {
                    items: 4,
                    nav: false
                },

                // breakpoint from 1024 up
                1024 : {
                    items: 5,
                    nav: false
                },

                // breakpoint from 1100 up
                1100 : {
                    items: 6,
                    nav: false
                }
            }
        });
    }
    // BRANDS SLIDER END

    // BLOGS SLIDER START
    const blogs = $('.blogs-slider');
    
    if(blogs.length > 0) {
        blogs.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: false,
            responsiveClass:true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 360 up
                360 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 480 up
                480 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 768 up
                768 : {
                    items: 2,
                    nav: false
                },

                // breakpoint from 992 up
                992 : {
                    items: 3,
                    nav: false
                },

                // breakpoint from 1024 up
                1024 : {
                    items: 4,
                    nav: false
                }
            }
        });
    }
    // BLOGS SLIDER END

    // PRESS SLIDER START
    const press = $('.press-slider');
    
    if(press.length > 0) {
        press.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            responsiveClass:true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 360 up
                360 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 480 up
                480 : {
                    items: 1,
                    nav: false
                },

                // breakpoint from 768 up
                768 : {
                    items: 2,
                    nav: false
                },

                // breakpoint from 992 up
                992 : {
                    items: 3,
                    nav: false
                },

                // breakpoint from 1024 up
                1024 : {
                    items: 4,
                    nav: false
                }
            }
        });
    }
    // PRESS SLIDER END

    // PRESS SLIDER START
    const providers = $('.providerinfo-slider');
    
    if(providers.length > 0) {
        providers.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
            nav: true,
            responsiveClass:true,
            dots: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                }
            }
        });

        
        // SHOW SLIDER INDICATORS
        $('.owl-carousel').on('changed.owl.carousel', function(event) {
            $(this).find('.owl-nav').removeClass('disabled');
        });
        
        // SHOW SLIDER INDICATORS
        $('.owl-carousel').on('changed.owl.carousel', function(event) {
            $(this).find('.owl-dots').removeClass('disabled');
        });

        $(".owl-prev").html('<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 11.4989L4.125 24.5024C4.125 29.0324 7.3335 31.8749 11.874 31.8749L24.126 31.8749C28.6665 31.8749 31.875 29.0474 31.875 24.5024L31.875 11.4989C31.875 6.95388 28.6665 4.12488 24.126 4.12488L11.874 4.12488C7.3335 4.12488 4.125 6.95388 4.125 11.4989Z" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.8709 17.9999L24.1289 17.9999" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5156 23.6219L11.8696 17.9999L17.5156 12.3779" stroke="#B7DBD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        $(".owl-next").html('<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.875 24.5011L31.875 11.4976C31.875 6.96762 28.6665 4.12512 24.126 4.12512L11.874 4.12512C7.3335 4.12512 4.125 6.95262 4.125 11.4976L4.125 24.5011C4.125 29.0461 7.3335 31.8751 11.874 31.8751L24.126 31.8751C28.6665 31.8751 31.875 29.0461 31.875 24.5011Z" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.1291 18.0001L11.8711 18.0001" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.4844 12.3781L24.1304 18.0001L18.4844 23.6221" stroke="#409E85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    }
    // PRESS SLIDER END

    // MOBILE TEAM SLIDER START
    const mobileteam = $('.mobileteam-slider');
    
    if(mobileteam.length > 0) {
        mobileteam.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            items: 2,
            nav: false,
            responsiveClass:true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                }
            }
        });
    }
    // MOBILE TEAM SLIDER END

    // MOBILE CHOOSE SLIDER START
    const mobilechoose = $('.mobilechoose-slider');
    
    if(mobilechoose.length > 0) {
        mobilechoose.owlCarousel({
            margin: 12,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            items: 2,
            nav: false,
            responsiveClass:true,
            dots: false,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                }
            }
        });
    }
    // MOBILE CHOOSE SLIDER END
    
});