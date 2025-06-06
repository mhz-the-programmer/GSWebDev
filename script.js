document.addEventListener('DOMContentLoaded', function () {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    themeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const classes = this.classList;
            let bgColor;
            if (classes.contains('blue')) {
                bgColor = '#1a73e8';
            } else if (classes.contains('green')) {
                bgColor = '#34a853';
            } else if (classes.contains('purple')) {
                bgColor = '#6a0dad';
            } else if (classes.contains('reset')) {
                bgColor = '#ffffff'
            }
            body.style.backgroundColor = bgColor;
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideCount = slides.length;
    const slideWidth = slides[0].clientWidth;

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            currentSlide = slideCount - 1;
        } else if (index >= slideCount) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        updateIndicators();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    prevBtn.addEventListener('click', function () {
        prevSlide();
    });

    nextBtn.addEventListener('click', function () {
        nextSlide();
    });

});