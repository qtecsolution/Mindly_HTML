// HOME PAGE START

TweenMax.staggerFrom(".homeimage", 2, {
    delay: .5,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
}, 0.08);

TweenMax.from(".hometitle", 3, {
    opacity: 0,
    delay: .8,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".hometext", 4, {
    opacity: 0,
    delay: .8,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".home-button", 5, {
    opacity: 0,
    delay: 1,
    y: 20,
    ease: Expo.easeInOut
});

// HOME PAGE END