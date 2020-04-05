var menuBtn = document.querySelector('.toggle');
var menu = document.querySelector('.main-nav');
var logo = document.querySelector('.logo');

menuBtn.classList.remove('toggle--no-js');
menu.classList.remove('main-nav--no-js');

menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menuBtn.classList.toggle('toggle--closed');
    menuBtn.classList.toggle('toggle--opened');
    menu.classList.toggle('main-nav--closed');
    menu.classList.toggle('main-nav--opened');
    logo.classList.toggle('logo--nav'); 
    var social = document.querySelectorAll('.social__link').forEach(social => {
        social.classList.toggle('social__link--nav');
    });
});