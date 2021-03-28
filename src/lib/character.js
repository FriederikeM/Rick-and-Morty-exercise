export function buildSection(character) {
  const main = document.querySelector("main");

  const section = document.createElement("section");
  section.classList.add("character");

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name-wrapper");

  const fullNameH2 = document.createElement("h2");
  fullNameH2.textContent = character.name;

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-wrapper");

  const characterImg = document.createElement("img");
  characterImg.src = character.image;
  characterImg.alt = character.name;

  if (character.status === "Alive") {
    section.classList.add("character-alive");
    imgDiv.classList.add("character-alive-shadow");
  } else if (character.status === "Dead") {
    section.classList.add("character-dead");
    imgDiv.classList.add("character-dead-shadow");
  } else if (character.status === "unknown") {
    section.classList.add("character-unknown");
    imgDiv.classList.add("character-unknown-shadow");
  }

  section.append(nameDiv);
  nameDiv.append(fullNameH2);
  imgDiv.append(characterImg);
  section.append(imgDiv);
  main.append(section);
}
