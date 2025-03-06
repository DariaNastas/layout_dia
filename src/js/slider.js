'use strict';

const images = [
  'https://surl.li/htxzej',
  'https://surl.li/ugxvhv',
  'https://surl.gd/fhgope',
];

document.addEventListener("DOMContentLoaded", () => {
  const sliderImage = document.querySelector('.slider__image');
  const moveBack = document.querySelector('.slider__arrow-btn--left');
  const moveForward = document.querySelector('.slider__arrow-btn--right');
  console.log(sliderImage)
 
  let index = 0;
  function updateImage() {
    sliderImage.style.backgroundImage = `url(${images[index]})`;
  }
  moveBack.addEventListener("click", () => {
    index =  (index - 1 + images.length) % images.length;
    updateImage();
    console.log(1)
  });
  moveForward.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateImage();
    console.log(2)
  });
  updateImage(index);
});
