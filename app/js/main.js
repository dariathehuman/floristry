//  Script for main-nav

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

//  Script for modal 

var orderLink = document.querySelector('.offer__button');
var popup = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal__close');

orderLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.add('overlay-show');
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
})

overlay.addEventListener('click', function () {
    popup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove('modal-show');
        overlay.classList.remove('overlay-show');
    }
});

window.onload = function () {
    var form = document.querySelector('.modal__form');
    var name = form.querySelector('[name=user-name]');
    var phone = form.querySelector('[name=phone]');

    form.addEventListener('submit', function (evt) {
        if (!name.value && !phone.value) {
            evt.preventDefault();
            name.classList.add('required');
            phone.classList.add('required');
        }
        if (!name.value && phone.value) {
            evt.preventDefault();
            name.classList.add('required');
        }
        if (name.value && !phone.value) {
            evt.preventDefault();
            phone.classList.add('required');
        }
    });
}

// Slick slider

$(function () {

    $('.catalog__slider').slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

});