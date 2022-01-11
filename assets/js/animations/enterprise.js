// ENTERPRISE PAGE START

TweenMax.from(".desktopbanner", 1, {
    opacity: 0,
    delay: .5,
    x: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".desktop-thumnail-content", 2, {
    opacity: 0,
    delay: .75,
    x: -20,
    ease: Expo.easeInOut
});


TweenMax.from(".mobilebanner", 3, {
    opacity: 0,
    delay: 1.5,
    x: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".banner-thumbnail-content", 4, {
    opacity: 0,
    delay: 1.75,
    y: 20,
    ease: Expo.easeInOut
});


// ENTERPRISE PAGE END