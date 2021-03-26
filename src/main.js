import { createCharacter } from "./lib/character.js";

const fetchButton = document.querySelector(".header__search-button");

fetchButton.addEventListener("click", () => {
  clearCharacters();
  createCharacter();
});

function clearCharacters() {
  const characterElements = document.querySelectorAll(".character");
  characterElements.forEach((section) => section.remove());
}
