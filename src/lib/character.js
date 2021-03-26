export function createCharacter() {
  let url;
  const filterDropdown = document.querySelector(".header__filter");
  const type = filterDropdown.value;

  const search = document.querySelector(".header__search-form");
  const searchInput = search.value;

  if (type === "alive") {
    url = `https://rickandmortyapi.com/api/character/?name=${searchInput}&status=alive`;
  } else if (type === "dead") {
    url = `https://rickandmortyapi.com/api/character/?name=${searchInput}&status=dead`;
  } else if (type === "unknown") {
    url = `https://rickandmortyapi.com/api/character/?name=${searchInput}&status=unknown`;
  } else if (type === "all") {
    url = `https://rickandmortyapi.com/api/character/?name=${searchInput}`;
  }

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
        const section = document.createElement("section");
        section.classList.add("character");
        const main = document.querySelector("main");
        const fullName = document.createElement("h2");
        fullName.textContent = `${character.name}`;
        const img = document.createElement("img");
        img.src = character.image;
        img.alt = `${character.name}`;

        if (character.status === "Alive") {
          section.style.background = "var(--color-primary)";
        } else if (character.status === "Dead") {
          section.style.background = "var(--color-accent)";
        } else if (character.status === "unknown") {
          section.style.background = "var(--color-secondary)";
        }

        section.append(fullName);
        section.append(img);
        main.append(section);
      })
    );
}
