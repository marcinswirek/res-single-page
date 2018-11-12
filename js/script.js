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
  $('body, html').animate({
    scrollTop: $(clickMenu).offset().top
  })
})

//Header button show function
function showBtn() {
    setTimeout(function() {
        headerBtn.style.opacity = '1';
    }, 11000);
}

document.addEventListener('DOMContentLoaded', showBtn);
