const slider = $('.products').bxSlider({
  pager: false,
  controls: false
});

$('#products-arrow-left').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$('#products-arrow-right').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});