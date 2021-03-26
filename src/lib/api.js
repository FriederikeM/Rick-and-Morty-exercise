export function fetchData() {
  const url = "https://rickandmortyapi.com/api/character/";
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

        section.append(fullName);
        section.append(img);
        main.append(section);
      })
    );
}
