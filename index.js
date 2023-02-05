const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownButton = dropdown.querySelector(".dropdown-button");
  const menu = dropdown.querySelector(".menu");

  dropdownButton.addEventListener("mouseenter", () => {
    console.log("moused over");
    menu.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", () => {
    menu.classList.remove("show");
  });

  //dropdownButton.
});
