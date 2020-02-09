const btnLeft = document.querySelector('#left');
const btnLRight = document.querySelector('#right');
const carouselList = document.querySelector('#carousel__list');

const minRight = 0;
const maxRight = 3600;
const step = 400;
let currentRight = 0;

carouselList.style.right = currentRight;

btnLRight.addEventListener('click', (e) => {
  e.preventDefault();

  if(currentRight < maxRight) {
    currentRight += step;
    carouselList.style.right = currentRight + 'px'
  }
});

btnLeft.addEventListener('click', (e) => {
  e.preventDefault();

  if(currentRight > minRight) {
    currentRight -= step;
    carouselList.style.right = currentRight + 'px'
  }
});


