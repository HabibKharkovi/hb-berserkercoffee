new Swiper('[js-review-grid]', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
        1028: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 2.5,
            spaceBetween: 10
        }
    }
});