export function buildSection(character) {
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
}
