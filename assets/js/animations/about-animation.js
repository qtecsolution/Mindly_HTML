// ABOUT PAGE START

TweenMax.from(".aboutvideo", 1, {
    delay: 1,
    width: "0",
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".about-title", 2, {
    delay: 1.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".about-text", 2, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".about-button", 2, {
    opacity: 0,
    delay: 2.5,
    y: 20,
    ease: Expo.easeInOut
})

// ABOUT PAGE END