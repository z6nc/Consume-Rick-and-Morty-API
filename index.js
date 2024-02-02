

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
       <h2>${personaje.name}</h2>
       <h3>${personaje.status}</h3>
       <h3>${personaje.species}</h3>
       <h3>${personaje.gender}</h3>
       <h3>${personaje.origin.name}</h3>



       
     </article>

    `);
    const main =  document.querySelector("main");
    main.append(article);



    });




});