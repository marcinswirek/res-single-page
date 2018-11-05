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

//Header button show function
function showBtn() {
    setTimeout(function() {
        headerBtn.style.opacity = '1';
    }, 11000);
}

document.addEventListener('DOMContentLoaded', showBtn);

//Contact form
$(document).ready(function() {
  return $('#contact-form').submit(function(e) {
    var email, message, name;
    name = document.getElementById('inputName');
    email = document.getElementById('inputEmail');
    message = document.getElementById('inputMessage');
    if (!name.value || !email.value || !message.value) {
      alertify.error('Please check your entries');
      return false;
    } else {
      $.ajax({
        method: 'POST',
        url: '//formspree.io/swirek.marcin@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();
      return alertify.success('Message sent');
    }
  });
});
