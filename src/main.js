import { createCharacter } from "./lib/character.js";
import { logoSetup } from "./lib/logo.js";

const fetchButton = document.querySelector(".header__search-button");

fetchButton.addEventListener("click", () => {
  clearCharacters();
  createCharacter();
});

function clearCharacters() {
  const characterElements = document.querySelectorAll(".character");
  characterElements.forEach((section) => section.remove());
}

logoSetup();

//submit form when 'Enter' key is pressed while in myInputID
document
  .getElementById("search-input")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.getElementById("search-input").submit();
      return false;
    }
  });
