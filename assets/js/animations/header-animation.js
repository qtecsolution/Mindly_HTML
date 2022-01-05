// HEADER ANIMATION START

TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".headerlist-item", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08);

TweenMax.staggerFrom(".iconlist-item", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08);

// HEADER ANIMATION END







