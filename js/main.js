
$(document).ready(() => {
    $('.slider').slick({
        dots: true,
        infinite: true,
        dotsClass: 'slider__dots',
        speed: 500,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        mobileFirst: true,
        cssEase: 'linear'
    });

    $('.sliderNews').slick({
        dots: true,
        infinite: true,
        dotsClass: 'sliderNews__dots',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: `<button class="sliderNews__arrow sliderNews__arrow--left">
                        <i class="fas fa-chevron-left"></i>
                    </button>`,
        nextArrow: `<button class="sliderNews__arrow sliderNews__arrow--right">
                        <i class="fas fa-chevron-right"></i>
                    </button>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ],
    });
})



let inputs = document.querySelectorAll('.input')

inputs.forEach(function (input) {
    input.addEventListener('input', function () {
        if (input.value.length) {
            input.classList.add('filled');
        }
        else {
            input.classList.remove('filled');
        }
    })
});


//lazy laod

document.addEventListener("DOMContentLoaded", function () {
    yall({
        observeChanges: true
    });
});






