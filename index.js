function getCharacters(done) {
    const result = fetch("https://rickandmortyapi.com/api/character/?page=1");
    result
      .then((Response) => Response.json())
      .then((data) => {
        done(data);
      });
  }
  
  function Personas(personajes) {
    const statusElements = [];
  
    personajes.forEach((personaje, index) => {
      const statusElement = document.querySelector(`#status-${index}`);
      const keys = Object.keys(personaje);
  
      if (keys.includes('status') && personaje.status.toLowerCase() === "alive") {
        statusElement.textContent = "Está vivo";
        statusElement.style.color = "green"; // Puedes ajustar el color según tus preferencias
      } else {
        statusElement.textContent = "Está muerto";
        statusElement.style.color = "red"; // Puedes ajustar el color según tus preferencias
      }
  
      statusElements.push(statusElement);
    });
  
    return statusElements;
  }
  
  getCharacters((data) => {
    const main = document.querySelector("main");
  
    // Mostrar información de personajes
    data.results.forEach((personaje, index) => {
      const article = document.createRange().createContextualFragment(`
          <article data-aos="flip-right">
            <h2>${personaje.name}</h2>
            <div class="image-container">
              <img src="${personaje.image}" alt="Personaje">
            </div>
            <div class="info-container">
              <h3>${personaje.species}</h3>
              <h3>${personaje.location.name}</h3>
              <h3>${personaje.origin.name}</h3>
              <h3>${personaje.gender}</h3>
              <h3 class="status" id="status-${index}"></h3>
            </div>
          </article>
        `);
  
      main.append(article);
    });
  
    // Llamada a la función Personas para actualizar los estados
    Personas(data.results);
  });
  