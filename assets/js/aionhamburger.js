// $(document).ready(function(){
//     $(".btn-hamburger").click(function(){
//         $(this).toggleClass("is-active");
//     });
// });

const hamburger = document.querySelector('.btn-hamburger');
hamburger.addEventListener('click', toggleHamburger);

function toggleHamburger() {
    if(this.classList.contains('is-active')) {
        this.classList.remove('is-active');
    } else {
        this.classList.add('is-active');
    }
}

window.addEventListener('click', function(event) {
    const burger = event.target.parentElement;
    
    
});

