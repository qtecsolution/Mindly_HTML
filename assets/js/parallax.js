// const parallax = document.querySelector('#parallax');

// window.addEventListener('scroll', function() {
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.7 + 'px';
// });

let rellax = new Rellax('.rellax', {
    speed: -4,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});