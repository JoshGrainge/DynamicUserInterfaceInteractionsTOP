// 1st project
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownButton = dropdown.querySelector(".dropdown-button");
  const menu = dropdown.querySelector(".menu");

  dropdownButton.addEventListener("mouseenter", () => {
    menu.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", () => {
    menu.classList.remove("show");
  });
});

// 2nd project

const more = document.querySelector(".more");
const header = document.querySelector("header");

more.addEventListener("mouseenter", () => {
  header.classList.add("extend");
});

header.addEventListener("mouseleave", () => {
  header.classList.remove("extend");
});

// 3rd project
const images = document.querySelectorAll(".slideshow-container>img");
const navButtons = document.querySelectorAll(".button-container > button");
let currentImage = 0;

navButtons.forEach((navButton) => {
  navButton.addEventListener("click", (e) => {
    // Stop autoscroll when player input starts
    clearInterval(autoScroll);
    gotoSpecificSlide(parseInt(e.target.id));
  });
});

let autoScroll = window.setInterval(gotoNextSlide, 5000);

function gotoNextSlide() {
  images[currentImage].classList.remove("current");
  navButtons[currentImage].classList.remove("current");
  currentImage++;
  if (currentImage >= images.length) currentImage = 0;
  images[currentImage].classList.add("current");
  navButtons[currentImage].classList.add("current");
}

function gotoSpecificSlide(index) {
  images[currentImage].classList.remove("current");
  navButtons[currentImage].classList.remove("current");
  currentImage = index;
  images[currentImage].classList.add("current");
  navButtons[currentImage].classList.add("current");
}
