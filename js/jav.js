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
  
      if (keys.includes("status") && personaje.status.toLowerCase() === "alive") {
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
  Personas(data.results);
  Contador(data.results);