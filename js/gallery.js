/**
 * Early Church Truth
 * Image Gallery Script
 */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function pluseSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(j) {
  var i;
  const slides = document.getElementsByClassName("mySlides");
  if (j > slides.length) {slideIndex = 1} 
  if (j < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}