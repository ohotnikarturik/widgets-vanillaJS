let accordList = document.querySelector('.accord__list');
let accordButton = document.querySelectorAll('.accord__link');



for (let i = 0; i < accordButton.length; i++) {
  accordButton[i].onclick = function() {
    // accordText.classList.toggle('accord__active');
    let accordText = this.nextElementSibling;
    if (accordText.style.height === '150px') {
      accordText.style.height = '0px';

    } else {
      accordText.style.height = '150px';

    }
  }

}


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (let i = 0; i < accordButton.length; i++) {
//   accordButton[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     console.log('hi');
//     // let panel = this.nextElementSibling;
//     // if (panel.style.display === "block") {
//     //   panel.style.display = "none";
//     // } else {
//     //   panel.style.display = "block";
//     // }
//   });
// }


// accordButton[i].onclick = (e) => {
//   e.preventDefault();
//
//   accordButton.setAttribute('class', 'active')
//
//
// }