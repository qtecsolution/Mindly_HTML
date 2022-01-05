
// 404 ANIMATION START
TweenMax.from(".errorbox", 1, {
    opacity: 0,
    delay: .5,
    x: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".errortext", 2, {
    opacity: 0,
    delay: .75,
    y: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".back-home", 3, {
    opacity: 0,
    delay: 1,
    y: 20,
    ease: Expo.easeInOut
});
// 404 ANIMATION END