// Función para obtener los personajes de una página específica
function getCharacters(done, url = "https://rickandmortyapi.com/api/character/?page=1") {
  const buttons = document.getElementById("buttons");
  let btnNext;
  let btnPrevious;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      btnNext = data.info.next ? `<button class="btn" onclick="next('${data.info.next}')">-></button>` : '';
      btnPrevious = data.info.prev ? `<button class="btn" onclick="previous('${data.info.prev}')"><-</button>` : '';
      buttons.innerHTML = btnPrevious + url  + btnNext
      done(data);
    });
}

// Función para obtener los personajes de la página siguiente
function next(url) {
  getCharacters((data) => {
    renderCharacters(data);
  }, url);
}

// Función para obtener los personajes de la página anterior
function previous(url) {
  getCharacters((data) => {
    renderCharacters(data);
  }, url);
}
function Personas(personajes) {
  const statusElements = [];

  personajes.forEach((personaje, index) => {
    const statusElement = document.querySelector(`#status-${index}`);
    const bgTitle = document.querySelector(`#bgFondo-${index}`);
    const keys = Object.keys(personaje);

    if (keys.includes("status") && personaje.status.toLowerCase() === "alive") {
      statusElement.textContent = "🟢 Alive ";
      bgTitle.classList.add("alive");
    } else {
      statusElement.textContent = "🔴 Dead ";
      bgTitle.classList.add("dead");
    }

    statusElements.push(statusElement);
  });

  return statusElements;
}
function Contador(personajes) {
  const results = document.querySelector(`#contador`);

  const contador = personajes.length;
  results.textContent = contador + " Characters ";
  return contador;
}
function renderCharacters(data) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  data.results.forEach((personaje, index) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <div class="image-container">
        <img src="${personaje.image}" alt="Personaje">
      </div>
      <h2 id="bgFondo-${index}">${personaje.name}</h2>
      <div class="info-container">
        <div class="subInfo">
          <p class="status" id="status-${index}"></p> -
          <p>${personaje.species}</p>
        </div>
        <b>Origen :</b> <h3>${personaje.origin.name}</h3>
        <b>Last known location:</b> <h3>${personaje.location.name}</h3>
        <b>Gender:</b><h3>${personaje.gender}</h3>
      </div>
    `;
    main.appendChild(article);
 
  });
Personas(data.results);
Contador(data.results);

}


getCharacters((data) => {
  renderCharacters(data);
});
