'use strict';

// slider

const images = [
  'https://surl.li/njqhnp',
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

// dialog
const dialog = document.getElementById('tabletOverlay');
const showButton = document.getElementById('show');
const closeButton = document.getElementById('close');
const links = document.querySelectorAll('.tablet-overlay__link');

const closeDialog = () => {
  dialog.style.display = 'none';
  document.body.classList.remove('hide');
  dialog.close();
};

showButton.addEventListener('click', () => {
    dialog.style.display = 'block';
    document.body.classList.add('hide');
    dialog.showModal();
  });

  closeButton.addEventListener('click', () => closeDialog());

links.forEach((link) => link.addEventListener('click', () => closeDialog()));


// From
const form = document.getElementById('ContactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});