/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hambergur = document.getElementById("hambergur");
const navMenu = document.getElementById("nav-menu");
const ulLink = document.querySelectorAll(".ul-link");
const closeIcon = document.getElementById("closeIcon");

hambergur.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
})

closeIcon.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
})

ulLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
    })
})
/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

/*~~~~~~~~~~~~~~~ HOVER EFFECT ~~~~~~~~~~~~~~~~~*/
const container = document.querySelector("#container");

container.addEventListener('mouseover', (event) => {
    const cardItem = event.target.closest('.container-items'); // Find closest .container-items
    if (cardItem) {
        cardItem.classList.add('card_animate');
    }
});

container.addEventListener('mouseout', (event) => {
    const cardItem = event.target.closest('.container-items'); // Find closest .container-items
    if (cardItem) {
        cardItem.classList.remove('card_animate');
    }
});




/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.remove("bottom-4");
        scrollUpBtn.classList.add("-bottom-1/2");
    }
}

window.addEventListener('scroll', scrollUp);   


/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activateLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.ul-link');

    let current = "home";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >=  sectionTop - 60){
            current = section.getAttribute('id');
        }
    })

    navLinks.forEach(item => {
        item.classList.remove('active');
        if(item.href.includes(current)){
            item.classList.add("active");
        }
    })
}

window.addEventListener("scroll", activateLink);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollheader = () => {
    const navBar = document.getElementById('navBar');

    if(this.scrollY >= 200){
        navBar.classList.add("shadow-myboxshadow");
    }
    else{
        navBar.classList.remove("shadow-myboxshadow");
    }
}
window.addEventListener('scroll', scrollheader);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 300,
    reset: true
})

sr.reveal('.hero_top, .ingredients_top, .blog_top, .blog_btn, .newsletter');
sr.reveal('.hero_img, .promo_img', {scale: 0.5});
sr.reveal('.hero_outline_1, .hero_outline_2', {scale: 0.5, distance: "0px", delay:1000});

sr.reveal('.hero_leaf_2, .hero_leaf_3', {origin: "right", delay:1500});
sr.reveal('.hero_leaf_1, .hero_leaf_4', {origin: "left", delay:1500});

sr.reveal('.feature_left', {origin: "left"});
sr.reveal('.feature_right', {origin: "right"});

sr.reveal('.promo_top, .promo_info', {origin: "left"});

sr.reveal('.ingredients_left', {origin: "left", interval: 100});
sr.reveal('.ingredients_right', {origin: "right", interval: 100});

sr.reveal('.flavor_item', {interval: 100});

sr.reveal('.blog', {interval: 100, delay: 1500});

