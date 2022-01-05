// CONTACT ANIMATION START

TweenMax.from(".contact", 1, {
    delay: .5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".orderdown", 2, {
    delay: .75,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".orderup", 3, {
    opacity: 0,
    delay: 1,
    x: 20,
    ease: Expo.easeInOut
});

// CONTACT ANIMATION END