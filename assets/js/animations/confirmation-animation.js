
// CONFIRMATION ANIMATION START

TweenMax.from(".confirmation-details", 1, {
    opacity: 0,
    delay: 1.25,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".orderlist", 2, {
    opacity: 0,
    delay: 1.25,
    y: 20,
    ease: Expo.easeInOut
});

// CONFIRMATION ANIMATION END