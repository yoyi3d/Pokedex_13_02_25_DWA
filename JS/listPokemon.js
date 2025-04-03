$(document).ready(function(){

    // Primera llamada a la API para conseguir el listado.
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        
        .then(function (response) {
            return response.json();

        })
        .then(function (result) {
            // console.log(result);
            let pokemonList = result.results;

           // Lanzamos una nueva petición a la API por cada pokemon del primer listado que hemos recibido
           pokemonList.forEach(function (pokemon){
                fetchPokemonDetails(pokemon);

           });

        })
        .catch(function(err) {
            console.log(err);
           
        });
        
        // Funcion que se encarga de pedir los datos de cada Pokemon

        function fetchPokemonDetails(pokemon){
            let urlPokemon = pokemon.url;
            // console.log(urlPokemon);

            // Con esta llamada pedimos los detalles de cada Pokemon

            fetch(urlPokemon)
                .then(function (response) {
                    return response.json();

                })
                .then(function(pokemonDetails) {
                    console.log(pokemonDetails);

                    let nameCap = pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1);
                    
                    let pokeHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${pokemonDetails.sprites.front_shiny}" class="card-img-top" alt="...">
                        <div class="card-body justify-content-center">
                            <h5 class="card-title">${nameCap}</h5>
                            <p class="card-text">${pokemonDetails.id}</p>
                            <a href="https://www.wikidex.net/wiki/${nameCap}" class="btn btn-primary">Wiki Data</a>
                        </div>
                    </div>
                    `;
                    $("#pokeCont").append(pokeHTML);




                })
                .catch(function (err) {
                    console.log(err);
                    
                });
        }       

});