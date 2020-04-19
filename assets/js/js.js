const navbar = document.querySelector(".navbar");
window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('bg-black')
    } else {
        navbar.classList.remove('bg-black')
    }
}