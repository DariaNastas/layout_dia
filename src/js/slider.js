document.addEventListener("DOMContentLoaded", () => {
  const sliderImage = document.getElementById('slider__image');
  const moveBack = document.querySelector('.slider__arrow-btn--left');
  const moveForward = document.querySelector('.slider__arrow-btn--right');

  const images = [
    '../image/slider/slide-img-main.jpg',
    '../image/slider/slide-img-2.jpg',
    '../image/slider/slide-img-3.jpg',
  ];

  let index = 0;

  function updateImage() {
    sliderImage.style.backgroundImage = `url(${images[index]})`;
  }

  moveBack.addEventListener("click", () => {
    index =  (index - 1 + images.length) % images.length;
    updateImage(index);
  });

  moveForward.addEventListener("click", () => {
    index = (index + 1) % index.length;
    updateImage(index);
  });

  updateImage(index);
});