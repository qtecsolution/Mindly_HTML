// PRODUCT ANIMATION START

TweenMax.staggerFrom(".product-slider", 1, {
    delay: .5,
    opacity: 0,
    y: +20,
    ease: Power3.easeInOut
}, 0.08);

TweenMax.staggerFrom(".slidetext", 2, {
    delay: 1,
    opacity: 0,
    y: +20,
    ease: Power3.easeInOut
}, 0.08);

// PRODUCT ANIMATION END