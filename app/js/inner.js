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

// Slick slider

$(function () {

    $('.inner__slider').slick({
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    prevArrow: false,
                    nextArrow: '<svg width="46" height="46"><use xlink:href="#arrow"></use></svg>'
                }
            },
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: true,
                    prevArrow: false,
                    nextArrow: '<svg width="46" height="46"><use xlink:href="#arrow"></use></svg>'
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    variableWidth: true
                }
            }
        ]
    });

});