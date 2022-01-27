let lastScrollTop = 0;
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.scrollTop;

    if(scrollTop > lastScrollTop) {
        header.style.top = '-88.3445px';
    } else {
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});