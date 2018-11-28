const navMenu = document.getElementById('nav-bar');
const headerBtn = document.getElementById('headerBtn');
const logo = document.getElementById('navLogo');

//Navigation scroll visualisation
function menuScroll() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        navMenu.className = 'on-scroll-color';
        logo.className = 'logo-on-scroll';
    } else {
        navMenu.className = 'navigation';
        logo.className = 'logo';
    }
}

window.onscroll = function() {
    menuScroll();
};

//Smooth scroll in jQuery

$('.menu li a').on('click', function() {
    const clickMenu = '#' + $(this).attr('class');
    $('body, html').animate(
        {
            scrollTop: $(clickMenu).offset().top
        },
        1000
    );
});

$('.header-btn-link').on('click', function() {
    $('body, html').animate(
        {
            scrollTop: $('#contact-nav').offset().top
        },
        1000
    );
});

//Header button show function
function showBtn() {
    setTimeout(function() {
        headerBtn.style.opacity = '1';
    }, 11000);
}

document.addEventListener('DOMContentLoaded', showBtn);

//Sections animation on scroll

function sectionAnimation() {
    const windowHeight = window.innerHeight;
    const windowScrollValue = window.scrollY;
    const heroSection = document.querySelector('.start');
    const aboutSection = document.querySelector('.about');
    const skillsSection = document.querySelector('.skills');
    const portfolioSection = document.querySelector('.portfolio');
    const footerSection = document.querySelector('footer');
    const heroHeight = heroSection.offsetHeight;
    const aboutHeight = aboutSection.offsetHeight;
    const skillsHeight = skillsSection.offsetHeight;
    const portfolioHeight = portfolioSection.offsetHeight;
    const footerHeight = footerSection.offsetHeight;

    if (windowScrollValue > heroHeight + aboutHeight - 1.5 * windowHeight) {
        aboutSection.classList.add('effectOn');
    } else {
        aboutSection.classList.remove('effectOn');
    }

    if (
        windowScrollValue >
        heroHeight + aboutHeight + skillsHeight - 1.5 * windowHeight
    ) {
        skillsSection.classList.add('effectOn');
    } else {
        skillsSection.classList.remove('effectOn');
    }

    if (
        windowScrollValue >
        heroHeight +
            aboutHeight +
            skillsHeight +
            portfolioHeight -
            3.5 * windowHeight
    ) {
        portfolioSection.classList.add('effectOn');
    } else {
        portfolioSection.classList.remove('effectOn');
    }
}

window.addEventListener('scroll', sectionAnimation);
