$(document).ready(function() {
    /** SOLID PIECE SLIDER START */

    const solidPieceContent = $('.product-solidpiece-for');
    const solidBackButton = '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></button>';
    const solidNextButton = '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></button>';

    solidPieceContent.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.product-solidpiece-nav',
        prevArrow: solidBackButton,
        nextArrow: solidNextButton
    });

    const sliderSolidePieceNav = $('.product-solidpiece-nav');
    
    sliderSolidePieceNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-solidpiece-for',
        dots: false,
        arrows: false,
        vertical: true,
        centerMode: true,
        focusOnSelect: true
    });

    /** SOLID PIECE SLIDER END */

    
    /** THREE PIECE SLIDER START */

    const threeSliderContent = $('.product-threepiece-for');
    const threeBackButton = '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></button>';
    const threeNextButton = '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></button>';

    threeSliderContent.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.product-threepiece-nav',
        prevArrow: threeBackButton,
        nextArrow: threeNextButton
    });

    const threeSliderNav = $('.product-threepiece-nav');
    
    threeSliderNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-threepiece-for',
        dots: false,
        arrows: false,
        vertical: true,
        centerMode: true,
        focusOnSelect: true
    });
    
    /** THREE PIECE SLIDER END */

    
    /** ACCESSORIES SLIDER START */
    
    const accessoriesSliderContent = $('.product-accessories-for');
    const accessoriesBackButton = '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></button>';
    const accessoriesNextButton = '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></button>';

    accessoriesSliderContent.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.product-accessories-nav',
        prevArrow: accessoriesBackButton,
        nextArrow: accessoriesNextButton
    });

    const accessoriesSliderNav = $('.product-accessories-nav');
    
    accessoriesSliderNav.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.product-accessories-for',
        dots: false,
        arrows: false,
        vertical: true,
        centerMode: true,
        focusOnSelect: true
    });
    
    /** ACCESSORIES SLIDER END */
});