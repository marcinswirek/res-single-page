const navMenu = document.getElementById('nav-bar');
const headerBtn = document.getElementById('headerBtn');
const logo = document.getElementById('navLogo');
//const bodyOne = document.getElementById('bodyOne');

//Background change
// const gradientOneBtn = document.getElementById('gradientOne');
// const gradientTwoBtn = document.getElementById('gradientTwo');
// const gradientThreeBtn = document.getElementById('gradientThree');
// const gradientFourBtn = document.getElementById('gradientFour');

// function gradientOneSwitch() {
//     document.body.className = 'body-one';
// }

// function gradientTwoSwitch() {
//     document.body.className = 'body-two';
// }

// function gradientThreeSwitch() {
//     document.body.className = 'body-three';
// }

// function gradientFourSwitch() {
//     document.body.className = 'body-four';
// }

// gradientOneBtn.addEventListener('click', gradientFourSwitch);
// gradientTwoBtn.addEventListener('click', gradientTwoSwitch);
// gradientThreeBtn.addEventListener('click', gradientThreeSwitch);
// gradientFourBtn.addEventListener('click', gradientOneSwitch);

//Mobile tap event to do
//gradientOneBtn.addEventListener('touch', gradientFourSwitch);
//gradientTwoBtn.addEventListener('touch', gradientTwoSwitch);
//gradientThreeBtn.addEventListener('touch', gradientThreeSwitch);
//gradientFourBtn.addEventListener('touch', gradientOneSwitch);

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

//Header button show function
function showBtn() {
    setTimeout(function() {
        headerBtn.style.opacity = '1';
    }, 11000);
}

document.addEventListener('DOMContentLoaded', showBtn);
