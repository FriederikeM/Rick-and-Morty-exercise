export function buildSection(character) {
  const section = document.createElement("section");
  section.classList.add("character");

  const main = document.querySelector("main");

  const fullNameH2 = document.createElement("h2");
  fullNameH2.textContent = character.name;

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

  section.append(fullNameH2);
  section.append(characterImg);
  main.append(section);
}
