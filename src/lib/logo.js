export function logoSetup() {
  const logoUrl = "https://rickandmortyapi.com/api/character/";

  const logo = document.querySelector(".header__img");

  fetch(logoUrl)
    .then((response) => {
      return response.json();
    })
    .then((dataObject) => {
      logo.src = dataObject.results[18].image;
      logo.style.borderRadius = "50%";
    });
}
