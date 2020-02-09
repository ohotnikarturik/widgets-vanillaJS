let accordButton = document.querySelectorAll('.accord__link');
let accordArrow = document.querySelector('.accord__arrow');

// VARIANT-1
// for (let i = 0; i < accordButton.length; i++) {
//   accordButton[i].onclick = function() {
//     // accordText.classList.toggle('accord__active');
//     let accordText = this.nextElementSibling;
//     if (accordText.style.height === '150px') {
//       accordText.style.height = '0px';
//
//     } else {
//       accordText.style.height = '150px';
//
//     }
//   }
// }

// VARIANT-2
for (let i = 0; i < accordButton.length; i++) {
  accordButton[i].onclick = function() {
    let accordText = accordButton[i].nextElementSibling;
    accordText.classList.toggle('accord__text_height_opened');
    accordButton[i].lastElementChild.classList.toggle('active');
    accordButton[i].firstElementChild.classList.toggle('active');

  }
}

