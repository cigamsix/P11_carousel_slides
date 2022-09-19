const slides = document.getElementsByClassName("carousel-item");
const page = document.getElementById("page");
let slidePosition = 0;
const totalSlides = slides.length;
page.textContent = `${slidePosition + 1} / ${totalSlides}`;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
  page.textContent = `${slidePosition + 1} / ${totalSlides}`;
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
  page.textContent = `${slidePosition + 1} / ${totalSlides}`;
}
