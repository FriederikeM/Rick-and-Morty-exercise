import { fetchData } from "./lib/api.js";

const fetchButton = document.querySelector(".header__search-button");

function clearCharacters() {
  const characterElements = document.querySelectorAll(".character");
  characterElements.forEach((section) => section.remove());
}

fetchButton.addEventListener("click", () => {
  clearCharacters();
  fetchData();
});
