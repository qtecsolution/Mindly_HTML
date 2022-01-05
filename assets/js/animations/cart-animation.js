// CART ANIMATION START

TweenMax.from(".cart-content", 1, {
    delay: .7,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".billing", 2, {
    opacity: 0,
    delay: .8,
    x: -20,
    ease: Expo.easeInOut
});

TweenMax.from(".shipping", 3, {
    opacity: 0,
    delay: .8,
    x: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".shippingdescript", 4, {
    opacity: 0,
    delay: 1,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".orderlist", 5, {
    opacity: 0,
    delay: 1.25,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".suggested-products", 6, {
    opacity: 0,
    delay: 1.35,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".shipping-method", 6, {
    opacity: 0,
    delay: 1.5,
    y: 20,
    ease: Expo.easeInOut
});

// CART ANIMATION END