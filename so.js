// JavaScript for the image slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fade"); // Remove the "fade" class
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#ccc";
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fade"); // Add the "fade" class
  dots[slideIndex - 1].style.backgroundColor = "#ff00ff";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// JavaScript for manual navigation with arrow buttons

const prevButton = document;
