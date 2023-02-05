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

const more = document.querySelector(".more");
const header = document.querySelector("header");

more.addEventListener("mouseenter", () => {
  header.classList.add("extend");
});

header.addEventListener("mouseleave", () => {
  header.classList.remove("extend");
});
