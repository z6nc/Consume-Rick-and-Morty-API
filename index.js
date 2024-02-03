

function getCharacters(done){
    const result = fetch("https://rickandmortyapi.com/api/character/?page=1");
    result
    .then(Response=> Response.json())
    .then(data =>{
        done(data)
    });
}

getCharacters(data=>{
    data.results.forEach(personaje => {
     const article = document.createRange ().createContextualFragment(/* html */ `
     <article>
     <div class="image-container">
       <img src="${personaje.image}" alt="Personaje">
     </div>
     <div class="info-container">
      <p>Name</p>
      <h2>${personaje.name}</h2>
      <p id="estado">status</p>
      <span id="text"> </span>
      <h3 id="status">${personaje.status}</h3>
      <p>species</p>
      <h3>${personaje.species}</h3>
      <p>Gender</p>  
      <h3>${personaje.gender}</h3>
      </div>
   </article>
    `);

    const main =  document.querySelector("main");
    main.append(article);


    });
    
    


});