const openNavBtn = document.querySelector('#open__nav');
const closeNavBtn = document.querySelector('#close__nav');
const navbarNav = document.querySelector('.navbar__nav');

if (openNavBtn) {
    openNavBtn.addEventListener('click', () => {
        navbarNav.style.display = 'flex'
        openNavBtn.style.display = 'none'
        closeNavBtn.style.display = 'inline-block'
    })
}

function closeNav() {
    navbarNav.style.display = 'none'
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}

if (closeNavBtn) {
    closeNavBtn.addEventListener('click', () => {
        closeNav()
    })
}

if (window.innerWidth < 1024) {
    document.querySelectorAll('.navbar__nav li a').forEach(link => {
        link.addEventListener('click', closeNav);
    })
}

/* navbar change bg on scroll */
window.addEventListener('scroll', function () {
    document.querySelector('.navbar').classList.toggle('scroll', window.scrollY > 0)
})

/* copyright year */
document.querySelector('#get_year').innerText = new Date().getFullYear();

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    /* responsive */
    breakpoints: {
        // when window width is >= 600px
        300: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    }
});



