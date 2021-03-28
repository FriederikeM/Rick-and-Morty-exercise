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
    section.style.background = "var(--color-primary)";
  } else if (character.status === "Dead") {
    section.style.background = "var(--color-accent)";
  } else if (character.status === "unknown") {
    section.style.background = "var(--color-secondary)";
  }

  section.append(nameDiv);
  nameDiv.append(fullNameH2);
  imgDiv.append(characterImg);
  section.append(imgDiv);
  main.append(section);
}
