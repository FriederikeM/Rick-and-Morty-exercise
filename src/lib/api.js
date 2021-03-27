import { buildSection } from "./character.js";

export function createCharacter() {
  const filterDropdown = document.querySelector(".header__filter");
  const type = filterDropdown.value;
  let url = getUrlFrom(type);

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.status);
      }
    })
    .then((dataObject) =>
      dataObject.results.forEach((character) => {
        buildSection(character);
      })
    );
}

function getUrlFrom(type) {
  let url;
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  const search = document.querySelector(".header__search-form");
  const searchInput = search.value;
  if (type === "alive") {
    url = `${baseUrl}?name=${searchInput}&status=alive`;
  } else if (type === "dead") {
    url = `${baseUrl}?name=${searchInput}&status=dead`;
  } else if (type === "unknown") {
    url = `${baseUrl}?name=${searchInput}&status=unknown`;
  } else if (type === "all") {
    url = `${baseUrl}?name=${searchInput}`;
  }
  return url;
}

export function clearCharacters() {
  const characterElements = document.querySelectorAll(".character");
  characterElements.forEach((section) => section.remove());
}
