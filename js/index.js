
function getCharacters(done) {
  
  let result = fetch("https://rickandmortyapi.com/api/character/?page=25");
  result
    .then((Response) => Response.json())
    .then((data) => {
      done(data);
    });
  

}

function Contador(personajes) {
  const results = document.querySelector(`#contador`);

  const contador = personajes.length;
  results.textContent = contador + " Characters ";
  return contador;
}


function Personas(personajes) {
  const statusElements = [];

  personajes.forEach((personaje, index) => {
    const statusElement = document.querySelector(`#status-${index}`);
    const bgTitle = document.querySelector(`#bgFondo-${index}`);

    const keys = Object.keys(personaje);

    if (keys.includes('status') && personaje.status.toLowerCase() === "alive") {
      bgTitle.style.backgroundColor = "#018743";
      statusElement.textContent = "🟢 Alive ";
    } else {
      statusElement.textContent = "🔴 Dead ";
      bgTitle.style.backgroundColor = "#d93938";

    }

    statusElements.push(statusElement);
  });

  return statusElements;
}

getCharacters((data) => {
  const main = document.querySelector("main");
  const contadorElement = document.querySelector("#contador");

  // Mostrar información de personajes
  data.results.forEach((personaje, index) => {
    const article = document.createRange().createContextualFragment(`
          <article >
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
             <b>Gender:</b><h3>${personaje.residents}</h3>

            </div>
          </article>
        `);

    main.append(article);
  });

  Personas(data.results);
  Contador(data.results);
});
