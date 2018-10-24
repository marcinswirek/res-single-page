const navMenu = document.getElementById('nav-bar');
const headerBtn = document.getElementById('headerBtn');
const bodyOne = document.getElementById('bodyOne');

//Background change
const gradientOneBtn = document.getElementById('gradientOne');
const gradientTwoBtn = document.getElementById('gradientTwo');
const gradientThreeBtn = document.getElementById('gradientThree');
const gradientFourBtn = document.getElementById('gradientFour');

function gradientOneSwitch() {
    document.body.className = 'body-one';
}

function gradientTwoSwitch() {
    document.body.className = 'body-two';
}

function gradientThreeSwitch() {
    document.body.className = 'body-three';
}

function gradientFourSwitch() {
    document.body.className = 'body-four';
}

gradientOneBtn.addEventListener('click', gradientFourSwitch);
gradientTwoBtn.addEventListener('click', gradientTwoSwitch);
gradientThreeBtn.addEventListener('click', gradientThreeSwitch);
gradientFourBtn.addEventListener('click', gradientOneSwitch);

//Body color
// function bodyBackground() {
//     if (document.body.scrollTop > 800) {
//         bodyOne.className = 'body-one';
//     } else {
//         bodyOne.className = 'body-main';
//     }
// }

// window.onscroll = function() {
//     bodyBackground();
// };

// $(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 550) {
//             $('body').addClass('body-one');
//         }
//         if ($(this).scrollTop() < 550) {
//             $('body').removeClass('body-one');
//         }
//         if ($(this).scrollTop() > 1100) {
//             $('body').addClass('body-two');
//         }
//         if ($(this).scrollTop() < 1100) {
//             $('body').removeClass('body-two');
//         }
//         if ($(this).scrollTop() > 1650) {
//             $('body').addClass('body-three');
//         }
//         if ($(this).scrollTop() < 1650) {
//             $('body').removeClass('body-three');
//         }
//     });
// });

//Navigation scroll visualisation
function menuScroll() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        navMenu.className = 'on-scroll-color';
    } else {
        navMenu.className = 'navigation';
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

//Tab

// function openTab(event, tabName) {

//   let i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(tabName).style.display = "block";
//   event.currentTarget.className += " active";
// };

// openTab();

document.addEventListener('DOMContentLoaded', showBtn);
