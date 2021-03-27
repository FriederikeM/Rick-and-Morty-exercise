import { createCharacter } from "./lib/api.js";
import { clearCharacters } from "./lib/api.js";

const fetchButton = document.querySelector(".header__search-button");

fetchButton.addEventListener("click", () => {
  clearCharacters();
  createCharacter();
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearCharacters();
  createCharacter();
  form.reset();
});
